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
  Input,
  TextArea,
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
    padding: 0px 20px;
    text-decoration: none;
    color: ${themeGet('colors.mainOrange', 'white')}; 
  }
`;

export const HamburgerBtnWrapper = styled('div')`
  width: 40px;
  height: 25px;
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
    border-radius: 1px;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    background: ${themeGet('colors.middleGrey', 'white')};
  }

  & > span:nth-child(1) {
    top: ${({ opened }) => ifElse(opened, '10px', '0px')};
    transform: ${({ opened }) => ifElse(opened, 'rotate(135deg)', 'rotate(0deg)')};
  }

  & > span:nth-child(2) {
    opacity: ${({ opened }) => ifElse(opened, 0, 1)};
    left: ${({ opened }) => ifElse(opened, '-40px', '0')};
    top: ${({ opened }) => ifElse(opened, '20px', '10px')};
  }

  & > span:nth-child(3) {
    top: ${({ opened }) => ifElse(opened, '10px', '20px')};
    transform: ${({ opened }) => ifElse(opened, 'rotate(-135deg)', 'rotate(0deg)')};
  }
`;

export const BarNavigationWrapper = posed(styled(Box)`
  opacity: 0;
  display: none;
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
  }
`)({
  opened: {
    y: '0px',
    opacity: 1,
    staggerChildren: 100,
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

export const HeaderNavigationItemWrapper = styled('span')`
  position: relative;
  color: ${({ active }) => ifElse(
    active,
    themeGet('colors.mainYellow', 'white'),
    themeGet('colors.middleGrey', 'white'),
  )}; 

  &::before {
    left: 50%;
    top: 17px;
    content: '^';
    font-weight: 700;
    position: absolute;
    opacity: ${({ active }) => ifElse(active, 1, 0)};
  }
`;

export const BarNavigationItemWrapper = posed(styled('div')`
  position: relative;
  color: ${({ active }) => ifElse(
    active,
    themeGet('colors.mainYellow', 'white'),
    themeGet('colors.middleGrey', 'white'),
  )}; 

  &::before {
    top: 0px;
    left: -15px;
    content: '>';
    font-weight: 700;
    position: absolute;
    opacity: ${({ active }) => ifElse(active, 1, 0)}; 
  }
`)({
  opened: { opacity: 1 },
  closed: { opacity: 0 },
});

// Contacts form styles
export const Title = styled(Flex)`
  font-size: 48px;
  font-weight: bold; 
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${themeGet('colors.mainWhite', 'white')}; 
`;

export const Line = styled.div`
  bottom: 0; 
  width: 95px; 
  height: 9px; 
  position: absolute; 
  border-radius: 20px; 
  background-color: ${themeGet('colors.middleGrey', 'grey')};
`;

export const FormInput = styled(Input)`
  border: 0;
  width: 100%;  
  font-size: 24px;
  background: none;
  border-radius: 0;
  margin-bottom: 15px;
  color: ${themeGet('colors.mainWhite', 'white')};
  border-color: ${({ invalid }) => invalid && 'red'}; // TODO change to themeGet...
  border-bottom: 2px solid ${themeGet('colors.middleGrey', 'grey')}; 
`;

export const FormContainer = styled(Flex)`
  height: 650px;
  position: relative;
  align-items: center;
  padding: 80px 8% 0 8%;
  flex-direction: column;
  background-color: ${themeGet('colors.lightGrey', 'grey')}; 
  
  & > div {
    width: 70%;
  }

  & svg[name="two-guys-svg"] {
    display: none;
  }

  ${createMinWithMediaQuery(GC.FIRST_UI_BREAKPOINT)} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    
    & svg[name="two-guys-svg"] {
      width: 194px;
      bottom: 150px;
      display: block;
      position: absolute;
      right: calc(25% - 45px);
    }

    & div:not(:nth-child(4)) {
      width: 25%;
    }

    & div:nth-child(4) {
      left: 12%;
      width: 38%;
      bottom: 140px;
      position: absolute;
    }
  }
`;

export const FormFieldContainer = styled.div`
  position: relative;

  &::after {
    left: 0;
    top: 35px;
    color: red; // TODO change to themeGet...
    font-size: 16px;
    position: absolute;
    white-space: nowrap;
    content: '${({ text }) => text}';
  }
`;

export const FormTextArea = styled(TextArea)`
  width: 100%;
  resize: none;
  height: 134px;
  font-size: 26px;
  background: none;
  color: ${themeGet('colors.mainWhite', 'white')};
  border-bottom: 2px solid ${themeGet('colors.middleGrey', 'grey')};
`;

export const ResultWindow = styled.div`
  color: green; // TODO change to themeGet...
  width: 300px;
  height: 200px;
  display: flex;
  position: fixed;
  align-items: center;
  top: calc(50% - 100px);
  left: calc(50% - 150px);
  justify-content: center;
  background-color: rgba(250, 250, 250, 0.8);
`;
