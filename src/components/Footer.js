import React from 'react';
import Link from 'next/link';
import { withTheme } from 'styled-components';
import { themeGet } from 'styled-system';
// components
import SocialNav from './SocialNav';
import { FooterSection, FooterLink, FooterNav } from './ui';
// helpers
import * as H from '../helpers';
// ui
import { Text, Flex } from '../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////
// TODO: With theme
export const FooterNavigation = ({ locale }) => (
  <FooterNav>
    <Link href='./terms' passHref>
      <FooterLink color='#59ABE3' pb='15px'>{H.getLocaleItem(['termsAndConditions'], locale)}</FooterLink>
    </Link>
    <Link href='./privacy' passHref>
      <FooterLink color='#59ABE3' pb='25px'>{H.getLocaleItem(['privacyPolicy'], locale)}</FooterLink>
    </Link>
  </FooterNav>
);

export const Footer = props => (
  <footer>
    <Flex
      p={15}
      fontSize={24}
      alignItems='center'
      flexDirection='column'
      bg={themeGet('colors.mainBlack', '#363135')(props)}
    >
      <FooterSection
        mt='35px'
        mb='10px'
        px='50px'
        width='100%'
        textAlign='center'
        justifyContent='center'
        flexWrap='wrap-reverse'
      >
        <FooterNavigation {...props} />
        <SocialNav {...props} />
      </FooterSection>
      <Text
        // color={themeGet('colors.red', 'white')(props)}
        color='rgba(255, 255, 255, 0.3)'
        mb='20px'
      >
        {H.getLocaleItem(['copyright'], props.locale)}
      </Text>
    </Flex>
  </footer>
);

export default withTheme(Footer);
