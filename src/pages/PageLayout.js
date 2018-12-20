import React, { Fragment } from 'react';
// components
import Footer from '../components/Footer';
import Header from '../components/Header';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const PageLayout = props => (
  <Fragment>
    <Header {...props} />
    <div>{props.children}</div>
    <Footer {...props} />
  </Fragment>
);

export default PageLayout;
