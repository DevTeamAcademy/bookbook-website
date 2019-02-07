import React from 'react';
// ui
import { Line, Title } from './ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const SectionTitle = (props) => (
  <Title
    bg='#4A4549'
  >
    {props.titleText}
    <Line />
  </Title>
);

export default SectionTitle;
