import React from 'react';
import Link from 'next/link';
import { withTheme } from 'styled-components';
import { themeGet } from 'styled-system';
// components
import SocialNav from './SocialNav';
import { FooterWrapper, FooterSection, FooterLink } from './ui';
// helpers
import * as H from '../helpers';
// ui
import { Text } from '../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const FooterNavigation = ({ locale }) => (
  <nav>
    <Link href='./terms' passHref>
      <FooterLink color='#59ABE3'>{H.getLocaleItem(['termsAndConditions'], locale)}</FooterLink>
    </Link>
    <Link href='./privacy' passHref>
      <FooterLink color='#59ABE3'>{H.getLocaleItem(['privacyPolicy'], locale)}</FooterLink>
    </Link>
  </nav>
);

export const Footer = props => (
  <footer>
    <FooterWrapper
      p={15}
      fontSize={24}
      alignItems='center'
      flexDirection='column'
      bg={themeGet('colors.mainBlack', '#363135')(props)}
    >
      <FooterSection
        gridTemplateColumns='1fr'
      >
        <SocialNav {...props} />
        <FooterNavigation {...props} />
      </FooterSection>
      <Text
        // color={themeGet('colors.red', 'white')(props)}
        color='rgba(255, 255, 255, 0.3)'
        my='20px'
      >
        {H.getLocaleItem(['copyright'], props.locale)}
      </Text>
    </FooterWrapper>
  </footer>
);

export default withTheme(Footer);
