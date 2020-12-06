import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import './BuildControls.css';

const controls = [
  {label: "Meat", type: 'meat'},
  {label: "Cheese", type: 'cheese'},
  {label: "Bacon", type: 'bacon'},
  {label: "Salad", type: 'salad'},
]


const BuildControls = (props) => {

  return (
    <div className="BuildControls">
      {controls.map(ctrl => (
        <BuildControl 
          key={ctrl.label} 
          label={ctrl.label}
          adding={() => props.addingIngredient(ctrl.type)}
          remove={() => props.removeIngredient(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
    </div>
    )
};

export default BuildControls;