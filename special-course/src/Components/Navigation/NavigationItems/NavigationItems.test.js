import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItems />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  })

  it('should rednder two <NavigationItems /> elements if not authenticade', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('should rednder three <NavigationItems /> elements if authenticade', () => {
    //wrapper = shallow(<NavigationItems isAuthenticade />);
    wrapper.setProps({ isAuthenticade: true })
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it('should an exact logout button', () => {
    wrapper.setProps({ isAuthenticade: true })
    expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
  });
});