import React, { Fragment } from 'react';
import { withTheme } from 'styled-components';
// components
import MainPage from '../src/components/MainPage';
// hocs
import {
  withPageHead,
  withGlobalStyles,
  withThemeProvider,
  withLocaleProvider } from '../src/hocs';
// ui
import { Box } from '../src/ui';
///////////////////////////////////////////////////////////////////////////////////////////////////

export const IndexPage = (props) => (
  <MainPage {...props} />
);

export default withPageHead({
  metaTitle: 'BookBook',
})(withLocaleProvider(withThemeProvider(withGlobalStyles(IndexPage))));
