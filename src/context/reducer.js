import { actionTypes } from './actions'

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CONTINENT:
      return {
        ...state,
        continent: action.payload
      }
    default:
      return state
  }
}