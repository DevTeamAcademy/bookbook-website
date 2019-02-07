import React from 'react';
// components/icons
import { Paperclip } from './icons';
// ui
import {
  Flex,
  Button } from '../ui';
// global
import * as TC from '../constants/test-constants';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: with theme
export const ContactButtons = (props) => (
  <Flex
    mt={33}
    mb={33}
    width={300}
    justifyContent='center'
  >
    {
      props.allowAttachButton
        && (
          <Button
            mr={23}
            width={108}
            height={35}
            bg='#ffffff'
            fontSize={12}
            color='#f18701'
            cursor='pointer'
            alignItems='center'
            fontFamily='Roboto'
            justifyContent='center'
            boxShadow='0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12)'
          >
            <Paperclip
              width='15px'
              height='15px'
            />
            {props.attachButtonText}
          </Button>
        )
    }
    <Button
      ml={23}
      width='64%'
      height={35}
      bg='#9D8C70'
      fontSize={18}
      color='#ffffff'
      cursor='pointer'
      alignItems='center'
      fontFamily='Roboto'
      justifyContent='center'
      onClick={props.onSubmit}
      data-testid={TC.TEST_CONTACT_FORM_SEND_BUTTON}
      boxShadow='0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12)'
    >
      {props.contactButtonText}
    </Button>
  </Flex>
);

export default ContactButtons;
