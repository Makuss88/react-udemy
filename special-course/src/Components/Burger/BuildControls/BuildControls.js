import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const controls = [
  {label: "Meat", type: 'meat'},
  {label: "Cheese", type: 'cheese'},
  {label: "Bacon", type: 'bacon'},
  {label: "Salad", type: 'salad'},
]


const BuildControls = (props) => {

  const {price, addingIngredient, removeIngredient, disabled, purchasable, ordered} = props;

  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{price.toFixed(2)}$</strong></p>
      {controls.map(ctrl => (
        <BuildControl 
          key={ctrl.label} 
          label={ctrl.label}
          adding={() => addingIngredient(ctrl.type)}
          remove={() => removeIngredient(ctrl.type)}
          disabled={disabled[ctrl.type]}
          />
          ))}
      <button 
        className={classes.OrderButton}
        disabled={!purchasable}
        onClick={ordered}>
        ORDER NOW!!!!
      </button>
          
    </div>
    )
};

export default BuildControls;