import posed from 'react-pose';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
// ui
import { Box, Flex, Text } from '../../ui';
// //////////////////////////////////////////////////////////////////////////////

export const HeadSectionWrapper = styled('section')`
  width: 100%;
  height: calc(100vh - 50px);
  background: url('../../static/main-library-picture.png');
`;

export const HeadSectionMainTextWrapper = posed(Text)({
  exit: {
    x: '-100%'
  },
  enter: {
    x: '0%',
    beforeChildren: true,
    staggerChildren: 50,
  }
});

export const HeadSectionSecondTextWrapper = posed(Text)({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 4000,
    },
  },
});
