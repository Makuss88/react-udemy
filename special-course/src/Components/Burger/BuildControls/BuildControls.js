import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import * as ingName from '../../../assets/helper/helper';

import classes from './BuildControls.css';

const controls = [
  { label: 'Meat', type: ingName.MEAT },
  { label: 'Cheese', type: ingName.CHEESE },
  { label: 'Salad', type: ingName.SALAD },
  { label: 'Bacon', type: ingName.BACON },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}$</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}>{props.isLogged ? "ORDER NOW" : "SIGN UP TO BURGER"}</button>
  </div>
);

export default buildControls;