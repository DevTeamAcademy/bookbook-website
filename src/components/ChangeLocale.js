import React from 'react';
import { or } from 'ramda';
import { themeGet } from 'styled-system';
// hocs
import {
  withChangeLocale,
  withHoveredStatus } from '../hocs';
// ui
import { Box, Flex, Text, Image } from '../ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const ChangeLocalePopover = withChangeLocale(props => (
  <Flex
    p='5px'
    border='1px solid'
    position='absolute'
    borderRadius='3px'
    flexDirection='column'
    top={or(props.popperTop, '30px')}
    right={or(props.popperRight, '0px')}
    onMouseLeave={() => props.setHoveredStatus(false)}
    bg={themeGet('colors.lightGrey', 'grey')(props)}
    borderColor={themeGet('colors.mainOrange', 'orange')(props)}
  >
    {props.locale.languages.map((item) => (
      <Text
        m='5px'
        cursor='pointer'
        key={item.localeName}
        onClick={() => props.changeLocale(item.localeName)}
        color={themeGet('colors.mainOrange', 'orange')(props)}
      >
        {item.value}
      </Text>
    ))}
  </Flex>
));

export const ChangeLocale = withHoveredStatus(props => (
  <Box
    {...props}
    onMouseEnter={() => props.setHoveredStatus(true)}
  >
    <Flex
      position='relative'
      alignItems='center'
      inline={props.popperInline}
    >
      <Image src='../../static/language-icon.svg' alt='language' />
      <Image src='../../static/arrow-down-icon.svg' alt='language' />
      {
        props.hovered && <ChangeLocalePopover {...props} />
      }
    </Flex>
  </Box>
));
