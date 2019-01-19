import styled from 'styled-components';
import { themeGet } from 'styled-system';
import posed from 'react-pose';
// constants
import * as GC from '../constants';
// helpers
import { ifElse } from '../helpers';
// ui
import {
  Box,
  Flex,
  Text,
  createMinWithMediaQuery,
  createMaxWithMediaQuery } from '../ui';
// //////////////////////////////////////////////////////////////////////////////

export const HeaderWrapper = styled(Flex)`
  & > a {
    flex: 0 1 auto;
    height: 35px;
  }

  & > nav {
    display: none;
    flex: 1 1 auto;
    ${createMinWithMediaQuery(GC.FIRST_UI_BREAKPOINT)} {
      display: block;
    }
  }

  & > nav > a {
    padding: 0px 20px;
    text-decoration: none;
    text-transform: uppercase;
    color: ${themeGet('colors.mainOrange', 'white')}; 
  }
`;

export const HeaderChangeLocaleWrapper = styled(Box)`
  display: none;
  ${createMinWithMediaQuery(GC.FIRST_UI_BREAKPOINT)} {
    display: block;
  }
`;

export const FooterWrapper = styled(Flex)`
  & > nav > a {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 0px 20px;
    text-decoration: none;
    color: ${themeGet('colors.white', 'white')}; 
  }
`;


export const FooterToo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
`;

// //////////////////////// tag for 2 links in footer
export const LinkSergii = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
text-align: center;
&::a {
  color: white;
  text-decoration: none;
};
`;
export const FooterLink = styled(Text)`
display: none;
  &::hover {
    cursor: pointer;
    opacity: 0.1;
  }
`;

export const MarginB = styled.div`
margin-bottom: 40px;
`;
export const PrivatP = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 24px;
  color: #59ABE3;
  padding: 15px;
  padding-top: 0px;

&:hover {
  cursor: pointer;
  opacity: 0.7;
}
`;


export const HamburgerBtnWrapper = styled('div')`
  width: 40px;
  height: 35px;
  display: none;
  cursor: pointer;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;

  ${createMaxWithMediaQuery(GC.FIRST_UI_BREAKPOINT)} {
    display: block;
  }
  
  & > span {
    left: 0;
    opacity: 1;
    height: 5px;
    width: 100%;
    display: block;
    position: absolute;
    border-radius: 9px;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    background: ${themeGet('colors.white', 'white')};
  }

  & > span:nth-child(1) {
    top: ${({ opened }) => ifElse(opened, '15px', '0px')};
    transform: ${({ opened }) => ifElse(opened, 'rotate(135deg)', 'rotate(0deg)')};
  }

  & > span:nth-child(2) {
    opacity: ${({ opened }) => ifElse(opened, 0, 1)};
    left: ${({ opened }) => ifElse(opened, '-40px', '0')};
    top: ${({ opened }) => ifElse(opened, '15px', '15px')};
  }

  & > span:nth-child(3) {
    top: ${({ opened }) => ifElse(opened, '15px', '30px')};
    transform: ${({ opened }) => ifElse(opened, 'rotate(-135deg)', 'rotate(0deg)')};
  }
`;

export const BarNavigationWrapper = posed(styled(Box)`
  display: none;
  opacity: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  ${createMaxWithMediaQuery(GC.FIRST_UI_BREAKPOINT)} {
    display: block;
  }

  & > div > a {
    font-size: 14px;
    padding: 5px 20px;
    text-decoration: none;
    text-transform: uppercase;
    color: ${themeGet('colors.mainOrange', 'white')}; 
  }
`)({
  opened: {
    opacity: 1,
    y: '0px',
  },
  closed: {
    opacity: 0,
    y: '-100%',
    transition: {
      ease: 'linear',
      duration: 100,
    },
  },
});
