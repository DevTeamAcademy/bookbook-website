import React from 'react';
import styled from 'styled-components';
import * as GC from '../../constants/index';
import { createMinWithMediaQuery } from '../../ui/index';

// wrapper for display over 1080px
export const WrapperForDisplay = styled.div`
  ${createMinWithMediaQuery(GC.DISPLAY_UI_BREAKPOINT)} {
    display: grid;
    font-size: 24px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const RightBg = styled.div`
  background: rgba(54, 49, 53, 0.85) url(../../../static/main-library-picture.png);
  background-blend-mode: darken;
  background-size: cover;
`;
