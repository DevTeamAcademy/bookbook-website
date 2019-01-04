import React, { Fragment } from 'react';
// ui
// import { Text, Input, TextArea } from '../ui';
// import styled from 'styled-components';
import { Title, Line } from './ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const SectionTitle = (props) => (
  <Fragment>
    <Title>{props.titleText}
      <Line />
    </Title>
  </Fragment>
);

export default SectionTitle;
