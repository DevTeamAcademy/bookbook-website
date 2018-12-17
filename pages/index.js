import React, { Fragment } from 'react';
import { withTheme } from 'styled-components';
// components
import MainPage from '../components/MainPage';
// hocs
import {
  withPageHead,
  withGlobalStyles,
  withThemeProvider,
  withLocaleProvider } from '../hocs';
// ui
import { Box } from '../ui';
///////////////////////////////////////////////////////////////////////////////////////////////////

export const IndexPage = (props) => (
  <MainPage {...props} />
);

export default withPageHead({
  metaTitle: 'BookBook',
})(withLocaleProvider(withThemeProvider(withGlobalStyles(IndexPage))));
