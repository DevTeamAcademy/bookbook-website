import React, { Fragment } from 'react';
import Link from 'next/link';
// components
import Navigation from './Navigation';
import { StyledHeader } from './ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const Header = props => (
  <Fragment>
    <StyledHeader bg='black'>
      <Link href='./' passHref>
        <a>
          <img src='../../static/bookbook-logo.png' alt='logo' />
        </a>
      </Link>
      <Navigation {...props} />
    </StyledHeader>
  </Fragment>
);

export default Header;
