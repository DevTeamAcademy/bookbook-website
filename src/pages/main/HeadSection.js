import React from 'react';
import { withTheme } from 'styled-components';
import { themeGet } from 'styled-system';
// components
import {
  HeadSectionWrapper,
  HeadSectionSecondTextWrapper } from './ui';
// helpers
import * as H from '../../helpers';
// hocs
import { withTickyText } from '../../hocs';
// ui
import { Flex, Text, Button } from '../../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const MainTitle = withTickyText((props) =>
  <Text
    mb={10}
    textAlign='center'
    width={[230, 300, 400]}
    fontSize={[18, 24, 32]}
    color={themeGet('colors.white', 'white')(props)}
  >
    {props.outputText}
  </Text>
);

export const HeadSection = props => (
  <HeadSectionWrapper>
    <Flex
      height='100%'
      alignItems='center'
      flexDirection='column'
      justifyContent='center'
    >
      <MainTitle
        period={50}
        theme={props.theme}
        inputText={H.getLocaleItem(['mainPage', 'mainSectionFirstText'], props.locale)}
      />
      <HeadSectionSecondTextWrapper
        mb={100}
        opacity={0}
        pose='visible'
        textAlign='center'
        initialPose='hidden'
        width={[230, 300, 400]}
        fontSize={[14, 18, 24]}
        color={themeGet('colors.white', 'white')(props)}
      >
        {H.getLocaleItem(['mainPage', 'mainSectionSecondText'], props.locale)}
      </HeadSectionSecondTextWrapper>
      <Button
        type='button'
        height={40}
        borderRadius={2}
        cursor='pointer'
        width={[200, 300, 350]}
        color={themeGet('colors.white', 'white')(props)}
        bg={themeGet('colors.mainOrange', 'orange')(props)}
        boxShadow={themeGet('shadows.button', '')(props)}
      >
        {H.getLocaleItem(['actions', 'openBookbook'], props.locale)}
      </Button>
    </Flex>
  </HeadSectionWrapper>
);

export default withTheme(HeadSection);
