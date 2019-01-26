import React from 'react';
// ui
import { Spinner, FadeContainer } from '../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const Loader = () => (
  <FadeContainer onClick={(e) => e.stopPropagation()}>
    <Spinner />
  </FadeContainer>
);

export default Loader;
