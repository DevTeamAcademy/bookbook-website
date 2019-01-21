import React from 'react';
// TODO: Delete comments if it not used
// ui
import {
  Line,
  Title,
} from './ui';
// import styled from 'styled-components';

//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const SectionTitle = (props) => (
  <Title>
    {props.titleText}
    <Line />
  </Title>
);

export default SectionTitle;
