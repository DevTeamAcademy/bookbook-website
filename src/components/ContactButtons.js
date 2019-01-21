import React from 'react';
import {
  Button,
  Flex,
} from '../ui';
import {
  Paperclip,
} from './icons';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const ContactButtons = (props) => (
  <Flex
    mt={33}
    mb={33}
    width={262}
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
      onClick={props.onSubmit}
      ml={23}
      width={108}
      height={35}
      bg='#f18701'
      fontSize={18}
      color='#ffffff'
      cursor='pointer'
      alignItems='center'
      fontFamily='Roboto'
      justifyContent='center'
      boxShadow='0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12)'
    >
      {props.contactButtonText}
    </Button>
  </Flex>
);
