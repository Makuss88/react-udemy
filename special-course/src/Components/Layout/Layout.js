import React from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrower from '../Navigation/SideDrawer/SideDrower';

import classes from './Layout.css';

const LayoutComponent = (props) => {

  return (
    <Aux>
      <Toolbar />
      <SideDrower />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
};

export default LayoutComponent;