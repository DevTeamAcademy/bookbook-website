import React, { Fragment } from 'react'
import Head from 'next/head'
// ui
import { Title } from '../ui';
////////////////////////////////////////////////////////////////////////////////

export const IndexPage = (props) => (
  <Fragment>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      {/* <link rel='shortcut icon' href='./static/favicon.png' type='image/x-icon' /> */}
      <title>BookBook</title>
    </Head>
    <Title>Index page here</Title>
  </Fragment>
)

export default IndexPage;
