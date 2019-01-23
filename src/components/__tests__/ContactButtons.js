import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { shallow } from 'enzyme';
import { TEST_CONTACT_FORM_SEND_BUTTON } from '../../constants/test-constants';
import ContactButtons from '../ContactButtons';

afterEach(cleanup);

describe('ContactButtons', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ContactButtons debug />);

    expect(component).toMatchSnapshot();
  });
});

it('Should send data one time', () => {
  const mockSubmit = jest.fn();
  const { getByTestId } = render(<ContactButtons onSubmit={mockSubmit} />);
  const button = getByTestId(TEST_CONTACT_FORM_SEND_BUTTON);
  fireEvent.click(button);
  expect(mockSubmit).toHaveBeenCalledTimes(1);
});
