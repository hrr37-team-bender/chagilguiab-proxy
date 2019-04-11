import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../index.jsx';

describe ('App', () => {
  const component = mount(<App />);
  it('should render to DOM', () => {
    expect(component.exists()).toBe(true);
  });

  it('should render product name', () => {
    expect(component.find('h3')).toHaveLength(1);
  })
});

