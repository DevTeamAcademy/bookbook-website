import styled from 'styled-components';
import { themeGet } from 'styled-system';
import posed from 'react-pose';
// helpers
import { ifElse } from '../helpers';
// ui
import { Box, Flex } from '../ui';
// //////////////////////////////////////////////////////////////////////////////

export const HeaderWrapper = styled(Flex)`
  & > a {
    flex: 0 1 auto;
    height: 35px;
  }

  & > nav {
    display: none;
    flex: 1 1 auto;
    @media only screen and (min-width: 640px) {
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
  @media only screen and (min-width: 640px) {
    display: block;
  } 
`;

export const FooterWrapper = styled(Flex)`
  & > nav > a {
    padding: 0px 20px;
    text-decoration: none;
    color: ${themeGet('colors.mainOrange', 'white')}; 
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

  @media only screen and (max-width: 640px) {
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
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media only screen and (max-width: 640px) {
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
  opened: { y: '0px' },
  closed: { y: '-100%' },
});
