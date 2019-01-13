import React from 'react';
import Link from 'next/link';
import { withTheme } from 'styled-components';
import { themeGet } from 'styled-system';
// components
import SocialNav from './SocialNav';
import { FooterWrapper, FooterToo, LinkSergii, PrivatP, FooterLink } from './ui';
// helpers
import * as H from '../helpers';
// ui
import { Text } from '../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const FooterNavigation = ({ locale }) => (
  <nav>
    <LinkSergii>
      <Link href='./terms' passHref>
        <a>{H.getLocaleItem(['termsAndConditions'], locale)}</a>
      </Link>
      <Link href='./privacy' passHref>
        <a>{H.getLocaleItem(['privacyPolicy'], locale)}</a>
      </Link>
    </LinkSergii>
  </nav>
);

export const Footer = props => (
  <footer>
    <FooterWrapper
      p={15}
      fontSize={24}
      alignItems='center'
      flexDirection='column'
      bg={themeGet('colors.VaporSteelGray', '#363135')(props)}
    >
      <FooterToo>
        {/* <FooterNavigation {...props} /> */}
        <SocialNav {...props} />
        <FooterLink> Privaci Policy </FooterLink>
        <PrivatP> Termns and Conditions </PrivatP>
      </FooterToo>
      <Text
        // color={themeGet('colors.red', 'white')(props)}
        color='rgba(255, 255, 255, 0.3)'
        mb='40px'
      >
        {H.getLocaleItem(['copyright'], props.locale)}
      </Text>
    </FooterWrapper>
  </footer>
);

export default withTheme(Footer);
