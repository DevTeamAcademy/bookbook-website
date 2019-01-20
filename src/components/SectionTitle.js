import React, { Fragment } from 'react';
// TODO: Delete comments if it not used
// ui
// import { Text, Input, TextArea } from '../ui';
// import styled from 'styled-components';
import { Title, Line } from './ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const SectionTitle = (props) => (
  <Fragment>
    <Title>
      {props.titleText}
      <Line />
    </Title>
  </Fragment>
);

export default SectionTitle;
