import React from 'react';

import LayoutComponent from '../Components/Layout/Layout';
import BurgerBilder from './BurgerBuilder/BurgerBuilder';

import './App.css';

const App = () => {

  return (
    <div>
      <LayoutComponent>
        <BurgerBilder />
      </LayoutComponent>
    </div>
  );
 
}

export default App;
