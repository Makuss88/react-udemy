import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItem/NavigationItem';

import classes from './SideDrower.css';

const SideDrower = props => {

  return (
    <div className={classes.SideDrower}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
}

export default SideDrower;