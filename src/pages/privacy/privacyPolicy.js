import React from 'react';
// ui
import { Text, Flex } from '../../ui/index';
// helpers
import * as H from '../../helpers';
// components 
import { WrapperPrivacy } from './ui';

export const PrivacyPolicy = (props) => (
  <WrapperPrivacy>
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
        {H.getLocaleItem(['privacyPolicy'], props.locale)} 
      </Text>
      <Text
        pl='17%'
        pr='13%'           
        mb='25px'
        color='#FBFBFB'
      >
       {H.getLocaleItem(['textPrivacy'], props.locale)}   
      </Text>
      <Text
        pl='17%'
        pr='13%'           
        mb='25px'
        color='#FBFBFB'
      >
        {H.getLocaleItem(['textPrivacy'], props.locale)}   
      </Text>
      <Text
        pl='17%'
        pr='13%'           
        mb='25px'
        color='#FBFBFB'
       >
        {H.getLocaleItem(['textPrivacy'], props.locale)}   
      </Text>
    </Flex>
  </WrapperPrivacy> 
);

export default PrivacyPolicy;
