import React from 'react';
import { withTheme } from 'styled-components';
import { themeGet } from 'styled-system';
import SplitText from 'react-pose-text';
// components
import {
  HeadSectionWrapper,
  HeadSectionMainTextWrapper,
  HeadSectionSecondTextWrapper } from './ui';
// helpers
import * as H from '../../helpers';
// ui
import { Flex, Text, LinkButton, LinkButtonAnimated } from '../../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: check and fix SplitText on change locale

const charPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1 }
};

export const HeadSection = props => (
  <HeadSectionWrapper>
    <Flex
      height='100%'
      alignItems='center'
      flexDirection='column'
      justifyContent='center'
      bg={themeGet('bgs.mainPageHeadSection', '')(props)}
    >
      <HeadSectionMainTextWrapper
        mb={10}
        pose='enter'
        initialPose='exit'
        textAlign='center'
        width={[230, 300, 400]}
        fontSize={[24, 32, 36]}
        color={themeGet('colors.mainWhite', 'white')(props)}
      >
        <SplitText charPoses={charPoses}>
          {H.getLocaleItem(['mainPage', 'mainSectionFirstText'], props.locale)}
        </SplitText>
      </HeadSectionMainTextWrapper>
      <HeadSectionSecondTextWrapper
        mb={80}
        opacity={0}
        pose='visible'
        textAlign='center'
        initialPose='hidden'
        width={[230, 300, 400]}
        fontSize={[18, 24, 32]}
        color={themeGet('colors.mainBlue', 'white')(props)}
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
        color={themeGet('colors.mainWhite', 'white')(props)}
        boxShadow={themeGet('shadows.button', '')(props)}
        bg={themeGet('colors.middleGrey', 'orange')(props)}
      >
        {H.getLocaleItem(['actions', 'openBookbook'], props.locale)}
      </LinkButtonAnimated>
    </Flex>
  </HeadSectionWrapper>
);

export default withTheme(HeadSection);
