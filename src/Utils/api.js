import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';
import { generateUId } from './helper';
import AsyncStorage from '@react-native-community/async-storage'
import { STORAGE_KEY_DECKS, STORAGE_KEY_QUIZ, KEY_NOTIFICATION, DECKS } from './_DATA'

export const getDecks = async () => {
  let decks = await AsyncStorage.getItem(STORAGE_KEY_DECKS);
  return decks;
}

export const getDeck = async (deckId) => {
  let deck = await AsyncStorage.getItem(STORAGE_KEY_DECKS);
  return deck[deckId];
}

export const saveDeckTitleEvent = async (deckTitle) => {
  let item = await AsyncStorage.getItem(STORAGE_KEY_DECKS);
  item = JSON.parse(item);
  let UID = generateUId();
  let newItem = {
    id: UID,
    title: deckTitle,
    createdAt: new Date(),
    questions: []
  };
  item = { ...item, [UID]: newItem }
  await AsyncStorage.setItem(STORAGE_KEY_DECKS, JSON.stringify(item));
  return newItem;
}

export const addNewCardToDeck = async ({ question, deckId, answer }) => {
  let deckItem = await AsyncStorage.getItem(STORAGE_KEY_DECKS);
  deckItem = JSON.parse(deckItem);
  let addDeckQuestion = deckItem[deckId];
  addDeckQuestion = {
    ...addDeckQuestion,
    "questions": [...addDeckQuestion["questions"], { question, answer }]
  };
  await AsyncStorage.mergeItem(STORAGE_KEY_DECKS, JSON.stringify({
    [deckId]: addDeckQuestion
  }));
  return addDeckQuestion;
}

export const addQuizData = async ({ deckTitle, score }) => {
  let quizData = {
    deckLastAttempted: deckTitle,
    deckLastAttemptedAt: new Date(),
    score
  };
  await AsyncStorage.setItem(STORAGE_KEY_QUIZ, JSON.stringify(quizData));
  clearNotification();
}

export const getQuizs = async () => {
  let quizData = await AsyncStorage.getItem(STORAGE_KEY_QUIZ);
  return JSON.parse(quizData);
}

export const initData = async () => {
  let deckItem = await AsyncStorage.getItem(STORAGE_KEY_DECKS);
  if (deckItem === null) {
    deckItem = DECKS;
    await AsyncStorage.setItem(STORAGE_KEY_DECKS, JSON.stringify(deckItem));
  } else {
    deckItem = JSON.parse(deckItem);
  }
  return deckItem;
};

export const clearNotification = async () => {
  await AsyncStorage.removeItem(KEY_NOTIFICATION)
  Notifications.cancelAllScheduledNotificationsAsync();
  return;
}

export function setupNotification(today) {
  AsyncStorage.getItem(KEY_NOTIFICATION)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()
              Notifications.setNotificationHandler({
                handleNotification: async () => ({
                  shouldPlaySound: true,
                  shouldshowMessage: true,
                  shouldSetBadge: false
                })
              })
              let tomorrow = new Date();
              tomorrow.setHours(17);
              tomorrow.setMinutes(0);
              tomorrow.setDate(tomorrow.getDate() + 1);
              Notifications.scheduleNotificationAsync({
                content: {
                  title: 'Quiz Reminder',
                  body: "Don't forget to take a quiz today :)",
                },
                trigger: tomorrow
              })
              AsyncStorage.setItem(KEY_NOTIFICATION, JSON.stringify(true))
            }
          })
      }
    })
}