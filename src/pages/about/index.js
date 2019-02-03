import React from 'react';
// components
import PageHeader from '../../components/PageHeader';
import PageLayout from '../../components/PageLayout';
import { WrapperForDisplay, RightBg } from '../../components/ui';
//bottom
import  { FooterLink } from '../../components/ui';
import { Flex, Text } from '../../ui/index';
// helpers
import * as H from '../../helpers';
// hocs
import { withLocale } from '../../hocs';
//  /////////////////////////////////////////////////////////////////////////////////////////////////
export const AboutUsWrapper = () => (
  <WrapperForDisplay>
  <Flex 
    px='45px'
    bg='#4A4549'
    height='100%'
   
    alignItems='center'
    flexDirection='column'
    justifyContent='center'
  > 

    <Text
      py='30px'
      color='#FBFBFB'
      fontSize='36px'
    > About Us
    </Text>

    <Text
      color='#FBFBFB'
      fontSize='22px'
      maxWidth='500px'
    >   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>

    <FooterLink
      mt='44px'
      mb='97px'
      bg='#9D8C70'
      width='200px'
      height='40px'
      color='#FBFBFB'
      fontSize='24px'
      textAlign='center'
      borderRadius='5px'
    > Contact!
    </FooterLink>
  </Flex>
  <RightBg />
  </WrapperForDisplay>
);
export const AboutPage = props => (
  <PageLayout locale={props.locale}>
  {/* <PageHeader text={H.getLocaleItem(['aboutUs'], props.locale)} /> */}
    <AboutUsWrapper />
  </PageLayout>
);

export default withLocale(AboutPage);
