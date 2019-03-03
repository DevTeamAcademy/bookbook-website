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
  Text,
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

export const FooterLink = styled(Box)`
  &:hover {
    color: #FBFBFB;
    cursor: pointer;
  }
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
  ${createMinWithMediaQuery(GC.FIRST_UI_BREAKPOINT)} {
    flex-wrap: wrap-reverse;
    justify-content: space-between;
  }
`;

export const FooterNav = styled(Box)`
  padding-top: 15px;
  text-align: center;
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
  height: 55px;
  color: #FBFBFB;  
  font-size: 24px;
  font-weight: bold; 
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Line = styled.div`
  bottom: 0; 
  width: 47.5px; 
  height: 4.5px; 
  position: absolute; 
  border-radius: 10px; 
  background-color: #9D8C70;
`;

export const FormInput = styled(Input)`
  border: 0;
  width: 100%;  
  color: #FBFBFB;
  font-size: 12px;
  background: none;
  border-radius: 0;
  margin-bottom: 15px;
  border-bottom: 1.5px solid #9D8C70; 
  border-color: ${({ invalid }) => invalid && 'red'};
`;

export const FormContainer = styled(Flex)`
  height: 350px;
  position: relative;
  align-items: center;
  padding: 70px 8% 0 8%;
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
      bottom: 30px;
      display: block;
      position: absolute;
      right: calc(25% - 45px);
    }

    & div:not(:nth-child(4)) {
      width: 25%;
    }

    & div:nth-child(4) {
      left: 12%;
      width: 39%;
      bottom: 50px;
      position: absolute;
    }
  }
`;

export const FormFieldContainer = styled.div`
  position: relative;

  &::after {
    left: 0;
    top: 22px;
    color: red;
    font-size: 10px;
    position: absolute;
    white-space: nowrap;
    content: '${({ text }) => text}';
  }
`;

export const FormTextArea = styled(TextArea)`
  width: 100%;
  resize: none;
  color: #FBFBFB;
  height: 133.5px;
  font-size: 12px;
  background: none;
  border-bottom: 1.5px solid #9D8C70;
`;

export const ResultWindow = styled.div`
  color: green;
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

export const TextLocale = styled(Box)`
  width: 140px;
  color: #FDE3A7;
  cursor: pointer;
  margin-left: 15px; 
  position: relative;
  border-bottom: 1.5px solid #9D8C70;
    
    &::after {
      width: 0;
      top: 9px;
      height: 0;
      right: 0px;
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 8px 7.5px 0 7.5px;
      border-color: #FDE3A7 transparent transparent transparent;
    }
`;

export const LocalCompDisplay = styled.div`
  ${createMinWithMediaQuery(GC.FIRST_UI_BREAKPOINT)} {
    margin-right: 20px;
  }
`;

export const TextLocaleCompomemt = styled(Text)`
  &:hover {
    color: white;
  };
`;
