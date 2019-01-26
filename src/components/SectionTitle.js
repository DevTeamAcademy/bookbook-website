import React from 'react';
// ui
import { Line, Title } from './ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const SectionTitle = (props) => (
  <Title>
    {props.titleText}
    <Line />
  </Title>
);

export default SectionTitle;
