import React, { Fragment } from 'react';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const PageLayout = props => (
  <Fragment>
    <header>header</header>
    <nav>nav</nav>
    <div>{props.children}</div>
    <footer>footer</footer>
  </Fragment>
);

export default PageLayout;
