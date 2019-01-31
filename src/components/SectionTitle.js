import React, { Fragment } from 'react';
// ui
import { Text } from '../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const SectionTitle = (props) => (
  <Fragment>
    <Text>{props.titleText}</Text>
  </Fragment>
);

export default SectionTitle;
