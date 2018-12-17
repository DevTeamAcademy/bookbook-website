import React from 'react';
// components
import PageLayout from '../components/PageLayout';
////////////////////////////////////////////////////////////////////////////////

export const withPageHead = (configs) => (BaseComponent) => (props) => (
  <Fragment>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      {/* TODO: with favicon icon */}
      {/* <link rel='shortcut icon' href='./static/favicon.png' type='image/x-icon' /> */}
      <title>{configs.metaTitle}</title>
    </Head>
    <BaseComponent {...props} />
  </Fragment>
);
