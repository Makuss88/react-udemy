import React from 'react';

import Aux from "../../../hoc/Aux";

const OrderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredient)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}: </span> {props.ingredient[igKey]}
        </li>
      );
    });

  return (
    <Aux> 
      <h3>Your Order</h3>
      <p>Burger with ingrediants:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Contiune to Checkout?</p>
    </Aux>
  )

}

export default OrderSummary;