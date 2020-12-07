import React from "react";

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';

const Burger = (props) => {

  let transformedIndegrent = Object.keys(props.ingredient)
    .map(igKey => { 
      return [...Array(props.ingredient[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      })
    }).reduce((arr, el) => {
      return arr.concat(el)
    }, []);

  if ( transformedIndegrent.length === 0) {
    transformedIndegrent = <p>Please start adding indegrent!!</p>
  }  

  // console.log(transformedIndegrent)
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIndegrent}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default Burger;