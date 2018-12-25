import posed from 'react-pose';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
// ui
import { Box, Flex, Text } from '../../ui';
// //////////////////////////////////////////////////////////////////////////////

export const HeadSectionWrapper = styled('section')`
  width: 100%;
  height: calc(100vh - 50px);
  background: url('../../static/main-bg.png');
`;

export const HeadSectionSecondTextWrapper = posed(Text)({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 2000,
    },
  },
})
