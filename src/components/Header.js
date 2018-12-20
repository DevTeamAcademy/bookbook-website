import React from 'react';
import Link from 'next/link';
import { compose, withState } from 'recompose';
import { withTheme } from 'styled-components';
// components
import Navigation from './Navigation';
import { StyledHeader } from './ui';
// hocs
import { withChangeLocale } from '../hocs';
// ui
import { Box, Flex, Text, Image } from '../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const enhanceHeaderLanguagesPopover = compose(withTheme, withChangeLocale);

export const HeaderLanguagesPopover = enhanceHeaderLanguagesPopover(props => (
  <Flex
    p='5px'
    top='20px'
    right='0px'
    border='1px solid'
    position='absolute'
    borderRadius='3px'
    flexDirection='column'
    bg={props.theme.colors.popupBg}
    borderColor={props.theme.colors.link}
  >
    {props.locale.languages.map((item) => (
      <Text
        m='5px'
        key={item.localeName}
        cursor='pointer'
        color={props.theme.colors.link}
        onClick={() => props.changeLocale(item.localeName)}
      >
        {item.value}
      </Text>
    ))}
  </Flex>
));

export const enhanceHeaderLanguages = withState('languagesHovered', 'setLanguagesHovered', false);

export const HeaderLanguages = enhanceHeaderLanguages(props => (
  <Box
    flex='0 1 auto'
    position='relative'
    onMouseEnter={() => props.setLanguagesHovered(true)}
    onMouseLeave={() => props.setLanguagesHovered(false)}
  >
    <Flex alignItems='center'>
      <Image src='../../static/language-icon.svg' alt='language' />
      <Image src='../../static/arrow-down-icon.svg' alt='language' />
      {
        props.languagesHovered && <HeaderLanguagesPopover {...props} />
      }
    </Flex>
  </Box>
));

export const Header = props => (
  <StyledHeader
    bg='black'
    p='0px 10px'
    height='50px'
    alignItems='center'
  >
    <Link href='./' passHref>
      <a>
        <Image
          alt='logo'
          height='100%'
          src='../../static/bookbook-logo.png'
        />
      </a>
    </Link>
    <Navigation {...props} />
    <HeaderLanguages {...props} />
  </StyledHeader>
);

export default Header;
