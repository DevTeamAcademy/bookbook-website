import React from 'react';
import styled from 'styled-components';
// constants
import * as GC from '../../constants/index';
// ui
import { createMinWithMediaQuery, Flex } from '../../ui/index';
// /////////////////////////////////////////////////////////////////
export const WrapperTerms = styled(Flex)`
    ${createMinWithMediaQuery(GC.FIRST_UI_BREAKPOINT)} {
        font-size: 22px;
    }

    ${createMinWithMediaQuery(GC.SECOND_UI_BREAKPOINT)} {
        font-size: 30px;
    }
`;

export default WrapperTerms;
