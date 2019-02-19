import React from 'react';
import { withTheme } from 'styled-components';
import { themeGet } from 'styled-system';
// ui
import { Line, Title } from './ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const SectionTitle = withTheme((props) => (
  <Title
    pt={36}
    pb={15}
    bg={themeGet('colors.lightGrey', 'red')((props))}
  >
    {props.titleText}
    <Line />
  </Title>
  )
);

export default SectionTitle;
