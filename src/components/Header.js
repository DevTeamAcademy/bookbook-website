import React from 'react';
import Link from 'next/link';
import { withState } from 'recompose';
import { withTheme } from 'styled-components';
// components
import Navigation from './Navigation';
import { HeaderWrapper, HeaderLangWrapper } from './ui';
// hocs
import { withChangeLocale } from '../hocs';
// ui
import { Flex, Text, Image } from '../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const HeaderLanguagesPopover = withChangeLocale(props => (
  <Flex
    p='5px'
    top='20px'
    right='0px'
    border='1px solid'
    position='absolute'
    borderRadius='3px'
    flexDirection='column'
    bg={props.theme.colors.lightGrey}
    borderColor={props.theme.colors.mainOrange}
  >
    {props.locale.languages.map((item) => (
      <Text
        m='5px'
        key={item.localeName}
        cursor='pointer'
        color={props.theme.colors.mainOrange}
        onClick={() => props.changeLocale(item.localeName)}
      >
        {item.value}
      </Text>
    ))}
  </Flex>
));

export const enhanceHeaderLanguages = withState('languagesHovered', 'setLanguagesHovered', false);

export const HeaderLanguages = enhanceHeaderLanguages(props => (
  <HeaderLangWrapper
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
  </HeaderLangWrapper>
));

export const Header = props => (
  <header>
    <HeaderWrapper
      zIndex='1'
      p='0px 10px'
      height='50px'
      position='sticky'
      alignItems='center'
      bg={props.theme.colors.lightBlack}
      borderBottom={`1px solid ${props.theme.colors.white}`}
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
    </HeaderWrapper>
  </header>
);

export default withTheme(Header);
