import * as actionsType from './actions';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const initialState = {
  ingredients: {
    meat: 0,
    cheese: 0,
    salad: 0,
    bacon: 0,
  },
  totalPrice: 4,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientsName]: state.ingredients[action.ingredientsName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientsName],
      };
    case actionsType.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientsName]: state.ingredients[action.ingredientsName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientsName],
      };
    default:
      return state;
  }

}

export default reducer;