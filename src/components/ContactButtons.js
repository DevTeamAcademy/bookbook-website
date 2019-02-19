import React from 'react';
import { withTheme } from 'styled-components';
import { themeGet } from 'styled-system';
// ui
import {
  Flex,
  Button } from '../ui';
// global
import * as TC from '../constants/test-constants';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: with theme
export const ContactButtons = withTheme((props) => (
  <Flex
    pb={107}
    justifyContent='center'
  >
    <Button
      width={350}
      height={70}
      fontSize={36}
      cursor='pointer'
      alignItems='center'
      fontFamily='Roboto'
      justifyContent='center'
      onClick={props.onSubmit}
      data-testid={TC.TEST_CONTACT_FORM_SEND_BUTTON}
      boxShadow={themeGet('shadows.button')((props))}
      bg={themeGet('colors.middleGrey', 'grey')((props))}
      color={themeGet('colors.mainWhite', 'white')((props))}
    >
      {props.contactButtonText}
    </Button>
  </Flex>
));

export default ContactButtons;
