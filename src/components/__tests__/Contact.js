import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { shallow } from 'enzyme';
import Contacts, { fields } from '../Contacts';

afterEach(cleanup);

describe('Contacts', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Contacts debug />);

    expect(component).toMatchSnapshot();
  });
});

test('Sets the input value to entered value', () => {
  const { getByTestId } = render(<Contacts />);
  const input = getByTestId(fields[0].name);
  const value = 'test value';
  fireEvent.change(input, { target: { value } });
  expect(input.value).toEqual(value);
});
