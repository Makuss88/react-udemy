import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import { BurgerBuilder } from './BurgerBuilder';
import BurgerControls from '../../Components/Burger/BuildControls/BuildControls'

configure({ adapter: new Adapter() });

describe('<BurgerBuilder />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => { }} />);
  });

  it('should render <BurgerBuilder /> when null receiving ingridients', () => {
    wrapper.setProps({ ings: null });
    expect(wrapper.find(BurgerControls)).toHaveLength(0);
  })

  it('should render <BurgerBuilder /> when receiving one ingridient for ex. {salad:1}', () => {
    wrapper.setProps({ ings: { salad: 2 } });
    expect(wrapper.find(BurgerControls)).toHaveLength(1);
  })

  it('should render <BurgerBuilder /> when receiving many ingridients for ex. {salad:2, meat:7}', () => {
    wrapper.setProps({ ings: { salad: 2, meat: 7 } });
    expect(wrapper.find(BurgerControls)).toHaveLength(1);
  })
});