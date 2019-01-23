import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { shallow } from 'enzyme';
// global
import * as GC from '../../constants';
// contacts
import Contacts from '../Contacts';

afterEach(cleanup);

describe('Contacts', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Contacts debug />);

    expect(component).toMatchSnapshot();
  });
});

it('Should set the your name input value to entered value', () => {
  const { getByTestId } = render(<Contacts />);
  const input = getByTestId(GC.TEST_CONTACT_FORM_YOUR_NAME);
  const value = 'test name';
  fireEvent.change(input, { target: { value } });
  expect(input.value).toEqual(value);
});

it('Should set the email input value to entered value', () => {
  const { getByTestId } = render(<Contacts />);
  const input = getByTestId(GC.TEST_CONTACT_FORM_EMAIL);
  const value = 'test email';
  fireEvent.change(input, { target: { value } });
  expect(input.value).toEqual(value);
});

it('Should set the phone number input value to entered value', () => {
  const { getByTestId } = render(<Contacts />);
  const input = getByTestId(GC.TEST_CONTACT_FORM_PHONE_NUMBER);
  const value = 'test phone number';
  fireEvent.change(input, { target: { value } });
  expect(input.value).toEqual(value);
});

it('Should set the details input value to entered value', () => {
  const { getByTestId } = render(<Contacts />);
  const input = getByTestId(GC.TEST_CONTACT_FORM_DETAILS);
  const value = 'test value';
  fireEvent.change(input, { target: { value } });
  expect(input.value).toEqual(value);
});
