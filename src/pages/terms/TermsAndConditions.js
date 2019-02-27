import React from 'react';
// ui
import { Text, Flex } from '../../ui/index';
// helpers
import * as H from '../../helpers';
// components 
import { WrapperTerms } from './ui';

export const TermsAndConditions = (props) => (
  <WrapperTerms>
    <Flex
        bg='#4A4549'
        flexDirection='column'
    >
      <Text
        mb='30px'
        fontSize='40px'
        color='#FBFBFB'
        textAlign='center'
      >
        {H.getLocaleItem(['textHeadline'], props.locale)} 
      </Text>
      <Text
        pl='17%'
        pr='13%'           
        mb='25px'
        color='#FBFBFB'
      >
       {H.getLocaleItem(['textTerms'], props.locale)}   
      </Text>
      <Text
        pl='17%'
        pr='13%'           
        mb='25px'
        color='#FBFBFB'
      >
        {H.getLocaleItem(['textTerms'], props.locale)}   
      </Text>
      <Text
        pl='17%'
        pr='13%'           
        mb='25px'
        color='#FBFBFB'
       >
        {H.getLocaleItem(['textTerms'], props.locale)}   
      </Text>
    </Flex>
  </WrapperTerms> 
);

export default TermsAndConditions;
