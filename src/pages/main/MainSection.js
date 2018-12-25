import React from 'react';
import { withTheme } from 'styled-components';
// components
import { MainSectionWrapper } from './ui';
import * as H from '../../helpers';
// ui
import { Flex, Text, Button } from '../../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const MainSection = props => (
  <MainSectionWrapper>
    <Flex
      height='100%'
      alignItems='center'
      flexDirection='column'
      justifyContent='center'
    >
      <Text
        mb={10}
        textAlign='center'
        width={[230, 300, 400]}
        fontSize={[18, 24, 32]}
        color={props.theme.colors.white}
      >
        {H.getLocaleItem(['mainPage', 'mainSectionFirstText'], props.locale)}
      </Text>
      <Text
        mb={100}
        textAlign='center'
        width={[230, 300, 400]}
        fontSize={[14, 18, 24]}
        color={props.theme.colors.white}
      >
        {H.getLocaleItem(['mainPage', 'mainSectionSecondText'], props.locale)}
      </Text>
      <Button
        type='button'
        height={40}
        borderRadius={2}
        cursor='pointer'
        width={[200, 300, 350]}
        color={props.theme.colors.white}
        bg={props.theme.colors.mainOrange}
        boxShadow={props.theme.shadows.button}
      >
        {H.getLocaleItem(['actions', 'openBookbook'], props.locale)}
      </Button>
    </Flex>
  </MainSectionWrapper>
);

export default withTheme(MainSection);
