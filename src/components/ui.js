import styled from 'styled-components';
import { color, space, width, height, themeGet } from 'styled-system';
// //////////////////////////////////////////////////////////////////////////////

export const Box = styled.div`
  ${color};
  ${space};
  ${width};
  ${height}
`;

export const StyledHeader = styled(Box)`
  display: flex;
  align-items: center;

  & > a {
    height: 35px;
  }

  & > a > img {
    height: 100%;
  }

  & > nav > a {
    padding: 0px 20px;
    outline: none;
    text-decoration: none;
    text-transform: uppercase;
    color: ${themeGet('colors.yellow', 'white')}; 
  }
`;
