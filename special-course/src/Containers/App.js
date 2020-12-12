import React, { Component } from 'react';

import LayoutComponent from '../hoc/Layout/Layout';
import BurgerBilder from './BurgerBuilder/BurgerBuilder';

class App extends Component {
  state = {
    show: true,
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000);
  // }

  render() {
    return (
      <div>
        <LayoutComponent>
          {this.state.show ? <BurgerBilder /> : null}
        </LayoutComponent>
      </div>
    );
  }
}

export default App;
