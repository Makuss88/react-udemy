import React from 'react';

import LayoutComponent from '../hoc/Layout/Layout';
import BurgerBilder from './BurgerBuilder/BurgerBuilder';

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
