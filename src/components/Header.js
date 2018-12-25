import React from 'react';
import Link from 'next/link';
import { not } from 'ramda';
import { withTheme } from 'styled-components';
import { themeGet } from 'styled-system';
// components
import { ChangeLocale } from './ChangeLocale';
import { BarNavigation, HeaderNavigation } from './Navigation';
import {
  HeaderWrapper,
  HamburgerBtnWrapper,
  HeaderChangeLocaleWrapper } from './ui';
// hocs
import { withOpenedStatus } from '../hocs';
// ui
import { Box, Flex, Image } from '../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const HamburgerBtn = props => (
  <Box
    flex='1 1 auto'
  >
    <Flex justifyContent='flex-end'>
      <HamburgerBtnWrapper
        opened={props.opened}
        onClick={() => props.toggleOpenedStatus(not(props.opened))}
      >
        <span /><span /><span />
      </HamburgerBtnWrapper>
    </Flex>
  </Box>
);

export const Logo = () => (
  <Link href='./' passHref>
    <a>
      <Image
        alt='logo'
        height='100%'
        src='../../static/bookbook-logo.png'
      />
    </a>
  </Link>
);

export const Header = props => (
  <header>
    <HeaderWrapper
      zIndex='1'
      p='0px 10px'
      height='50px'
      position='sticky'
      alignItems='center'
      bg={themeGet('colors.lightBlack', 'white')(props)}
      borderBottom={`1px solid ${themeGet('colors.white', 'white')(props)}`}
    >
      <Logo {...props} />
      <HeaderNavigation {...props} />
      <HamburgerBtn {...props} />
      <HeaderChangeLocaleWrapper flex='0 1 auto'>
        <ChangeLocale {...props} />
      </HeaderChangeLocaleWrapper>
    </HeaderWrapper>
    <BarNavigation {...props} />
  </header>
);

export default withTheme(withOpenedStatus(Header));
