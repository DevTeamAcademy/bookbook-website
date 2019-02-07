import React from 'react';
import { shallow } from 'enzyme';
import About from '..';

describe('About', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<About debug />);
  
    expect(component).toMatchSnapshot();
  });
});
