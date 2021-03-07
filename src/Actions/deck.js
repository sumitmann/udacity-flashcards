export const ADD_NEW_DECK = 'ADD_NEW_DECK';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';
export const FETCH_DATA = 'FETCH_DATA';

export const addNewQuestionEvent = (deck) => ({
  type: ADD_NEW_QUESTION,
  payload: deck
})

export const handleReceiveData = (decks) => ({
  type: FETCH_DATA,
  payload: decks
});

export const addDeckEvent = (deck) => ({
  type: ADD_NEW_DECK,
  payload: deck
})
