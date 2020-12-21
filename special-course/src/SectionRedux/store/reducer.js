//TODO this file can be delete :D

import * as actionTypes from './actions';

const initialState = {
  results: [],
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.STORE_RESULTS:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), val: state.counter })
      }
    case actionTypes.DELETE_RESULTS:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updateArray = state.results.filter(results => results.id !== action.resultsElId);
      return {
        ...state,
        results: updateArray
      }
    default:
      return state;
  }
}

export default reducer;