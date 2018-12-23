import React from 'react';
import Link from 'next/link';
import { withTheme } from 'styled-components';
// components
import SocialNav from './SocialNav';
import { FooterWrapper } from './ui';
// ui
import { Text } from '../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const FooterNavigation = props => (
  <nav>
    <Link href='./terms' passHref>
      <a>{props.locale.termsAndConditions}</a>
    </Link>
    <Link href='./privacy' passHref>
      <a>{props.locale.privacyPolicy}</a>
    </Link>
  </nav>
);

export const Footer = props => (
  <footer>
    <FooterWrapper
      p={15}
      fontSize={10}
      alignItems='center'
      flexDirection='column'
      bg={props.theme.colors.darkGrey}
    >
      <SocialNav {...props} />
      <Text color={props.theme.colors.white}>{props.locale.copyright}</Text>
      <FooterNavigation {...props} />
    </FooterWrapper>
  </footer>
);

export default withTheme(Footer);
