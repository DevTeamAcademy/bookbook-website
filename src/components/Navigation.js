import React from 'react';
import Link from 'next/link';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const Navigation = props => (
  <nav>
    <Link href='./' passHref>
      <a>{props.locale.home}</a>
    </Link>
    <Link href='./about' passHref>
      <a>{props.locale.aboutUs}</a>
    </Link>
    <Link href='./contact' passHref>
      <a>{props.locale.contacts}</a>
    </Link>
  </nav>
);

export default Navigation;
