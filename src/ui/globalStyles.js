import { createGlobalStyle } from 'styled-components';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans');
  body {
    font-family: 'Noto Sans';
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
`;
