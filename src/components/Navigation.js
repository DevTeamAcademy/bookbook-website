import React from 'react';
import { equals } from 'ramda';
import Link from 'next/link';
import { themeGet } from 'styled-system';
// components
import { ChangeLocale } from './ChangeLocale';
import {
  BarNavigationWrapper,
  BarNavigationItemWrapper,
  HeaderNavigationItemWrapper } from './ui';
// constants
import * as GC from '../constants';
// helpers
import * as H from '../helpers';
// ui
import { Box, Flex } from '../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const getHeaderNavSettings = (locale) => ([
  {
    routePath: GC.ROUTE_HOME,
    routeName: H.getLocaleItem(['home'], locale),
  },
  {
    routePath: GC.ROUTE_ABOUT,
    routeName: H.getLocaleItem(['aboutUs'], locale),
  },
  {
    routePath: GC.ROUTE_CONTACTS,
    routeName: H.getLocaleItem(['contacts'], locale),
  },
]);

export const getBarNavSettings = (locale) => ([
  ...getHeaderNavSettings(locale),
  {
    routePath: GC.ROUTE_PRIVACY,
    routeName: H.getLocaleItem(['privacyPolicy'], locale),
  },
  {
    routePath: GC.ROUTE_TERMS,
    routeName: H.getLocaleItem(['termsAndConditions'], locale),
  },
]);

export const HeaderNavigation = props => (
  <nav>
    {
      getHeaderNavSettings(props.locale).map(item => (
        <Link
          passHref
          key={item.routePath}
          href={item.routePath}
        >
          <a>
            <HeaderNavigationItemWrapper
              active={equals(H.getLocationPathname(), item.routePath)}
            >
              {item.routeName}
            </HeaderNavigationItemWrapper>
          </a>
        </Link>
      ))
    }
  </nav>
);

export const BarContent = props => (
  <Flex
    p={20}
    flexDirection='column'
  >
    {
      getBarNavSettings(props.locale).map(item => (
        <Link
          passHref
          key={item.routePath}
          href={item.routePath}
        >
          <a>
            <BarNavigationItemWrapper
              active={equals(H.getLocationPathname(), item.routePath)}
            >
              {item.routeName}
            </BarNavigationItemWrapper>
          </a>
        </Link>
      ))
    }
    <ChangeLocale
      p={20}
      popperInline
      popperTop='25px'
      popperRight='-80px'
      width='max-content'
      theme={props.theme}
      locale={props.locale}
    />
  </Flex>
);

export const BarNavigation = props => (
  <Box zIndex='1' position='relative'>
    <BarNavigationWrapper
      width='100%'
      position='absolute'
      bg={themeGet('colors.lightGrey', 'grey')(props)}
      pose={H.ifElse(props.opened, 'opened', 'closed')}
      border={`1px solid ${themeGet('colors.middleGrey', 'orange')(props)}`}
    >
      <BarContent {...props} />
    </BarNavigationWrapper>
  </Box>
);
