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
  createMaxWithMediaQuery,
} from '../ui';
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
    color: ${themeGet('colors.mainOrange', 'white')}; 
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

  &::before {
    left: 50%;
    top: 17px;
    content: '^';
    font-weight: 700;
    position: absolute;
    opacity: ${({ active }) => ifElse(active, 1, 0)};
    color: ${themeGet('colors.mainOrange', 'white')}; 
  }
`;

export const BarNavigationItemWrapper = posed(styled('div')`
  position: relative;

  &::before {
    top: 0px;
    left: -15px;
    content: '>';
    font-weight: 700;
    position: absolute;
    opacity: ${({ active }) => ifElse(active, 1, 0)};
    color: ${themeGet('colors.mainOrange', 'white')}; 
  }
`)({
  opened: { opacity: 1 },
  closed: { opacity: 0 },
});

// Contacts form styles
export const Title = styled(Flex)`
  height:55px;
  color: #1e1b18;  
  font-size: 24px;
  font-weight: bold; 
  position: relative;
  align-items: center;
  font-family:'Roboto';  /*TODO: connect this font*/
  flex-direction: column;
  justify-content: center;
`;

export const Line = styled.div`
  bottom: 0; 
  width: 47.5px; 
  height: 4.5px; 
  position: absolute; 
  border-radius: 10px; 
  background-color: #f18701;
`;

export const FormContainer = styled.div`
  display: flex;
  margin-top: 22px;
  align-items: center;
  flex-direction: column;  
`;

export const FormInput = styled(Input)`
  border: 0;
  width: 262px;
  font-size: 12px;
  border-radius: 0;
  margin-bottom: 15px;
  font-family: "Roboto";
  border-bottom: 1.5px solid #f18701; 
  border-color: ${({ invalid }) => invalid && 'red'};
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
  width: 262px;
  resize: none;
  height: 133.5px;
  font-size: 12px;
  font-family: "Roboto";
  border-bottom: 1.5px solid #f18701;
`;

export const ContactSection = styled(Flex)`
  height: 205px;
  position: relative;
  background-color: #f1f1f1;
`;

export const ContactsInfo = styled.div`
  font-size: 15px;
  margin-top: 19px;
  line-height: 1.5;
  margin-left: 31px;
  position: absolute;
  font-family: "Roboto"; 
`;

export const FadeContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.3);
`;

export const Loader = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 8px solid #f3f3f3;
  border-top: 8px solid #f18701;
  border-bottom: 8px solid #f18701;
  animation: spin 2s linear infinite;
  -webkit-animation: spin 2s linear infinite;
  
  @-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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
