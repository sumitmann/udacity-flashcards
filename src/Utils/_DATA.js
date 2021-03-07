export const STORAGE_KEY_DECKS = 'FlashCard:decks'
export const STORAGE_KEY_QUIZ = 'FlashCard:quiz'
export const KEY_NOTIFICATION = 'FlashCcards:notifications'

export const QUIZ = {
  deckLastAttempted: null,
  deckLastAttemptedAt: null,
  score: 0,
}

export const DECKS = {
  "d7m6hi66ss4qvz9mimkk5i" : {
    id: "d7m6hi66ss4qvz9mimkk5i",
    title: "React",
    createdAt: new Date("03/01/2021"),
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  "dmsi67si9kzc6mmqkh56id" : {
    id: "dmsi67si9kzc6mmqkh56id",
    title: "JavaScript",
    createdAt: new Date("03/02/2021"),
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}