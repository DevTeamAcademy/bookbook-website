import React, { Fragment } from 'react';
// components
import { SectionTitle } from './SectionTitle';
// helpers
import * as H from '../helpers';
// ui
import { Input, Button } from '../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const Contacts = (props) => (
  <Fragment>
    <SectionTitle
      titleText={H.getLocaleItem(['contacts'], props.locale)}
    />
    <Input border='1px solid red' />
    <Button>Contact</Button>
  </Fragment>
);

export default Contacts;
