import React from 'react';
// components
import PageHeader from '../../components/PageHeader';
import PageLayout from '../../components/PageLayout';
//ui
import  { FooterLink } from '../../components/ui';
import { Flex, Text } from '../../ui/index';
// helpers
import * as H from '../../helpers';
// hocs
import { withLocale } from '../../hocs';
// page about
import { WrapperForDisplay, RightBg } from './ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////
export const AboutUsWrapper = (props) => (
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
      >
        {H.getLocaleItem(['aboutUs'], props.locale)}
      </Text>
      <Text
        color='#FBFBFB'
        fontSize='18px'
        maxWidth='500px'
      >   
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
      > 
        Contact!
      </FooterLink>
    </Flex>
    <RightBg />
  </WrapperForDisplay>
);

export const AboutPage = props => (
  <PageLayout locale={props.locale}>
    <AboutUsWrapper {...props} />
  </PageLayout>
);

export default withLocale(AboutPage);
