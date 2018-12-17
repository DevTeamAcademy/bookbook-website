import React, { Fragment } from 'react';
// hocs
import { withLocale } from '../hocs';
///////////////////////////////////////////////////////////////////////////////////////////////////

export const PageLayout = (props) => (
  <Fragment>
    <header>header</header>
    <nav>nav</nav>
    <div>{props.children}</div>
    <footer>footer</footer>
  </Fragment>
);

export default PageLayout;
