import styled from 'styled-components';
import { themeGet } from 'styled-system';
// ui
import { Flex } from '../ui';
// //////////////////////////////////////////////////////////////////////////////

export const StyledHeader = styled(Flex)`
  & > a {
    flex: 0 1 auto;
    height: 35px;
  }

  & > nav {
    flex: 1 1 auto;
  }

  & > nav > a {
    padding: 0px 20px;
    text-decoration: none;
    text-transform: uppercase;
    color: ${themeGet('colors.link', 'white')}; 
  }
`;
