import styled from 'styled-components';
import { color, space, width } from 'styled-system';
// //////////////////////////////////////////////////////////////////////////////

export const Box = styled.div`
  ${color};
  ${space};
  ${width};
`;

export const StyledHeader = styled(Box)`
  height: 50px;
  display: flex;
  align-items: center;
`;
