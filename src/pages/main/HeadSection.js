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
import { Flex, Text, LinkButton, LinkButtonAnimated } from '../../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const MainTitle = withTickyText((props) =>
  <Text
    mb={10}
    textAlign='center'
    width={[230, 300, 400]}
    fontSize={[24, 32, 36]}
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
        period={75}
        theme={props.theme}
        inputText={H.getLocaleItem(['mainPage', 'mainSectionFirstText'], props.locale)}
      />
      <HeadSectionSecondTextWrapper
        mb={80}
        opacity={0}
        pose='visible'
        textAlign='center'
        initialPose='hidden'
        width={[230, 300, 400]}
        fontSize={[18, 24, 32]}
        color={themeGet('colors.mainOrange', 'white')(props)}
      >
        {H.getLocaleItem(['mainPage', 'mainSectionSecondText'], props.locale)}
      </HeadSectionSecondTextWrapper>
      <LinkButtonAnimated
        height={40}
        display='flex'
        target='blank'
        borderRadius={2}
        cursor='pointer'
        position='relative'
        alignItems='center'
        justifyContent='center'
        width={[200, 300, 350]}
        href='https://starylev.com.ua/'
        color={themeGet('colors.white', 'white')(props)}
        boxShadow={themeGet('shadows.button', '')(props)}
        bg={themeGet('colors.mainOrange', 'orange')(props)}
        border={`1px solid ${themeGet('colors.white', 'white')(props)}`}
      >
        {H.getLocaleItem(['actions', 'openBookbook'], props.locale)}
      </LinkButtonAnimated>
    </Flex>
  </HeadSectionWrapper>
);

export default withTheme(HeadSection);
