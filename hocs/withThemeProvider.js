import React from 'react';
import { ThemeProvider } from 'styled-components';
// theme
import theme from '../theme';
///////////////////////////////////////////////////////////////////////////////////////////////////

export const withThemeProvider = (BaseComponent) => (props) => (
  <ThemeProvider theme={theme}>
    <BaseComponent {...props} />
  </ThemeProvider>
);
