import React from 'react';
import Link from 'next/link';
import { not } from 'ramda';
// components
import { ChangeLocale } from './ChangeLocale';
import { BarNavigationWrapper } from './ui';
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
          <a>{item.routeName}</a>
        </Link>
      ))
    }
  </nav>
);

export const BarContent = props => (
  <Flex
    p={10}
    flexDirection='column'
  >
    {
      getBarNavSettings(props.locale).map(item => (
        <Link
          passHref
          key={item.routePath}
          href={item.routePath}
        >
          <a>{item.routeName}</a>
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
  <Box position='relative'>
    <BarNavigationWrapper
      width='100%'
      position='absolute'
      bg={props.theme.colors.lightGrey}
      pose={H.ifElse(props.opened, 'opened', 'closed')}
      border={`1px solid ${props.theme.colors.mainOrange}`}
    >
      <BarContent {...props} />
    </BarNavigationWrapper>
  </Box>
);
