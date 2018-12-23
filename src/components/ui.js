import styled from 'styled-components';
import { themeGet } from 'styled-system';
// ui
import { Box, Flex } from '../ui';
// //////////////////////////////////////////////////////////////////////////////

export const HeaderWrapper = styled(Flex)`
  & > a {
    flex: 0 1 auto;
    height: 35px;
  }

  & > nav {
    display: none;
    flex: 1 1 auto;
    @media only screen and (min-width: 640px) {
      display: block;
    } 
  }

  & > nav > a {
    padding: 0px 20px;
    text-decoration: none;
    text-transform: uppercase;
    color: ${themeGet('colors.mainOrange', 'white')}; 
  }
`;

export const HeaderLangWrapper = styled(Box)`
  display: none;
  @media only screen and (min-width: 640px) {
    display: block;
  } 
`;

export const FooterWrapper = styled(Flex)`
  & > nav > a {
    padding: 0px 20px;
    text-decoration: none;
    color: ${themeGet('colors.mainOrange', 'white')}; 
  }
`;
