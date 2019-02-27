import React from 'react';
import { or } from 'ramda';
import { themeGet } from 'styled-system';
// hocs
import {
  withChangeLocale,
  withHoveredStatus
} from '../hocs';
// ui
import { Box, Flex, Text, Image } from '../ui';
import { TextLocale, LocalCompDisplay, TextLocaleCompomemt } from './ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const ChangeLocalePopover = withChangeLocale(props => (
  <LocalCompDisplay>
    <Flex
      // border='1px solid #9D8C70'
      borderRadius='0px'
      position='absolute'
      flexDirection='column'
      top={or(props.popperTop, '20px')}
      right={or(props.popperRight, '0px')}
      bg={themeGet('colors.lightGrey', '#292929')(props)}
    // borderColor={themeGet('colors.mainOrange', '#9D8C70')(props)}
    >
      {props.hovered && props.locale.languages.map((item) => (
        <TextLocaleCompomemt
          m='5px'
          width='170px'
          cursor='pointer'
          key={item.localeName}
          onClick={() => props.changeLocale(item.localeName)}
          color={themeGet('colors.mainOrange', '#9D8C70')(props)}
         >
          {item.value}
        </TextLocaleCompomemt>
      ))}

    </Flex>
    <TextLocale
      > name name
    </TextLocale>
  </LocalCompDisplay>
));

export const ChangeLocale = withHoveredStatus(props => (
  <Box
    {...props}
    onMouseEnter={() => props.setHoveredStatus(true)}
    onMouseLeave={() => props.setHoveredStatus(false)}
  >
    <Flex
      position='relative'
      alignItems='center'
      inline={props.popperInline}
    >
      <Image src='../../static/language-icon.svg' alt='language' />
      <Image src='../../static/arrow-down-icon.svg' alt='language' />

      <ChangeLocalePopover {...props} />

    </Flex>
  </Box>
));


