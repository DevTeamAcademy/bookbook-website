import React, { Fragment } from 'react';
import { withTheme } from 'styled-components';
// components
import ContactsPage from '../src/pages/contacts';
// hocs
import {
  withPageHead,
  withGlobalStyles,
  withThemeProvider,
  withLocaleProvider } from '../src/hocs';
// ui
import { Box } from '../src/ui';
///////////////////////////////////////////////////////////////////////////////////////////////////

export const Page = (props) => (
  <ContactsPage {...props} />
);

export default withPageHead({
  metaTitle: 'BookBook',
})(withLocaleProvider(withThemeProvider(withGlobalStyles(Page))));
