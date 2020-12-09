import React from 'react';

import Aux from "../../../hoc/Aux";
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {

  const {ingredient, purchaseCancel, purchaseContinue, price} = props;

  const ingredientSummary = Object.keys(ingredient)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}: </span> {ingredient[igKey]}
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
      <p><strong>Total price: {price.toFixed(2)}$</strong></p>
      <p>Contiune to Checkout?</p>
      <Button clicked={purchaseCancel} btnType='Danger'>CANCEL</Button>
      <Button clicked={purchaseContinue} btnType="Success">CONTINUE</Button>
    </Aux>
  )

}

export default OrderSummary;