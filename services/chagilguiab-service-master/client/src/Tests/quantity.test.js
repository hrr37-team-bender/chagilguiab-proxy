import React from 'react';
import { shallow, mount } from 'enzyme';
import Quantity from '../components/Quantity.jsx';

describe ('Quantity', () => {
  const component = mount(<Quantity />);
  it('should render to DOM', () => {
    expect(component.exists()).toBe(true);
  });

  it('should render default string', () => {
    const string = 'This will be the Quantity console.';
    expect(component.text()).toEqual(string);
  });

  it('should handle click', () => {
    expect(component.state().val).toEqual(0);
    component.simulate('click');
    expect(component.state().val).toEqual(1);
  });
});
