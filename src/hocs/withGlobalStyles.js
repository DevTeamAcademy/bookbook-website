import React, { Fragment } from 'react';
// ui
import GlobalStyles from '../ui/globalStyles';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const withGlobalStyles = BaseComponent => props => (
  <Fragment>
    <GlobalStyles />
    <BaseComponent {...props} />
  </Fragment>
);
