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
  // Grid, no use
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

export const FooterLink = styled(Box)`
  &:hover {
    color: #FBFBFB;
    cursor: pointer;
  }
`;

export const FooterWrapper = styled(Flex)`
`;

export const SocialIconElement = styled.a`
  margin: 0 10px;
`;

export const SocialsWrapper = styled.nav`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
 `;


export const FooterSection = styled(Flex)`
  ${createMinWithMediaQuery(GC.FIRST_UI_BREAKPOINT)}
   {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
  }
`;

export const FooterBox = styled.div`
  padding-top: 15px;
  text-align: center;
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
