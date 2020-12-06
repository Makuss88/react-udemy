import React, { Component } from 'react';

import Aux from '../../hoc/Aux';

import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const INGREDIANT_PRICE = {
  salad: 0.5,
  cheese: 0.3,
  meat: 1.6,
  bacon: 0.9,
}

class BurgerBilder extends Component {

  state = {
    ingredient: {
      meat: 0,
      cheese: 0,
      bacon: 0, 
      salad: 0,
    },
    totalPrice: 4,
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredient[type];
    const updateCount = oldCount + 1;
    const updateIngredient = {
      ...this.state.ingredient
    };
    updateIngredient[type] = updateCount;

    const price = INGREDIANT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const updatePrice = oldPrice+ price;
    this.setState({totalPrice: updatePrice, ingredient: updateIngredient})
  } 

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredient[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updateIngredient = {
      ...this.state.ingredient
    };
    updateIngredient[type] = updateCount;

    const price = INGREDIANT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const updatePrice = oldPrice+ price;
    this.setState({totalPrice: updatePrice, ingredient: updateIngredient})
  } 
  

  render () {
    const disabledInfo = {
      ...this.state.ingredient
    }

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <Aux>
        <Burger ingredient={this.state.ingredient} />
        <BuildControls 
          addingIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}/>
      </Aux>
    );
  }
}

export default BurgerBilder;