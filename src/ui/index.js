import styled from 'styled-components';
import { color, space, width, fontSize } from 'styled-system';
// //////////////////////////////////////////////////////////////////////////////

export const Box = styled.div`
  ${(color, space, width, fontSize)};

  color: ${props => props.theme.colors.blue};
`;
