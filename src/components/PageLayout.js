import React, { Fragment } from 'react';
// components
import Footer from './Footer';
import Header from './Header';
import VideoSection from './VideoSection';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const PageLayout = props => (
  <Fragment>
    <Header {...props} />
    <div>{props.children}</div>
    <VideoSection {...props} />
    <Footer {...props} />
  </Fragment>
);

export default PageLayout;
