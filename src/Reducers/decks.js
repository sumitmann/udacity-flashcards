import { ADD_NEW_QUESTION, ADD_NEW_DECK, FETCH_DATA } from "../Actions/deck"

export const decks = (state = {}, {type, payload}) => {
  switch (type) {
    case ADD_NEW_DECK:
      return {
        ...state,
        [payload.id]: payload
      }
    
    case ADD_NEW_QUESTION:
      return {
        ...state,
        [payload.id]: payload
      }

    case FETCH_DATA:
      return {...state, ...payload}

    default:
      return state
  }
}
