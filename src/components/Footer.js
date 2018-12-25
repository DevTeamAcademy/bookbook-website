import React from 'react';
import Link from 'next/link';
import { withTheme } from 'styled-components';
import { themeGet } from 'styled-system';
// components
import SocialNav from './SocialNav';
import { FooterWrapper } from './ui';
// helpers
import * as H from '../helpers';
// ui
import { Text } from '../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const FooterNavigation = ({ locale }) => (
  <nav>
    <Link href='./terms' passHref>
      <a>{H.getLocaleItem(['termsAndConditions'], locale)}</a>
    </Link>
    <Link href='./privacy' passHref>
      <a>{H.getLocaleItem(['privacyPolicy'], locale)}</a>
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
      bg={themeGet('colors.darkGrey', 'grey')(props)}
    >
      <SocialNav {...props} />
      <Text
        color={themeGet('colors.white', 'white')(props)}
      >
        {H.getLocaleItem(['copyright'], props.locale)}
      </Text>
      <FooterNavigation {...props} />
    </FooterWrapper>
  </footer>
);

export default withTheme(Footer);
