import { or } from 'ramda';
import styled from 'styled-components';
import {
  top,
  left,
  flex,
  size,
  ratio,
  color,
  space,
  width,
  right,
  height,
  bottom,
  border,
  zIndex,
  opacity,
  display,
  position,
  fontSize,
  flexWrap,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  textAlign,
  boxShadow,
  borderTop,
  alignItems,
  lineHeight,
  fontWeight,
  borderLeft,
  borderColor,
  borderRight,
  borderBottom,
  borderRadius,
  letterSpacing,
  flexDirection,
  justifyContent } from 'styled-system';
// helpers
import * as H from '../helpers';
// //////////////////////////////////////////////////////////////////////////////

export const createMinWithMediaQuery = n => `
  @media screen and (min-width: ${n}px)
`;

export const createMaxWithMediaQuery = n => `
  @media screen and (max-width: ${n}px)
`;

export const Box = styled.div`
  ${top}
  ${left}
  ${flex}
  ${size}
  ${ratio}
  ${color}
  ${space}
  ${width}
  ${right}
  ${height}
  ${bottom}
  ${border}
  ${zIndex}
  ${opacity}
  ${display}
  ${fontSize}
  ${position}
  ${maxWidth}
  ${minWidth}
  ${maxHeight}
  ${minHeight}
  ${boxShadow}
  ${borderTop}
  ${borderLeft}
  ${borderRight}
  ${borderColor}
  ${borderBottom}
  ${borderRadius}
`;

export const Flex = styled.div`
  ${top}
  ${left}
  ${color}
  ${space}
  ${width}
  ${right}
  ${height}
  ${bottom}
  ${border}
  ${zIndex}
  ${opacity}
  ${fontSize}
  ${flexWrap}
  ${position}
  ${boxShadow}
  ${borderTop}
  ${borderLeft}
  ${alignItems}
  ${borderRight}
  ${borderColor}
  ${borderBottom}
  ${borderRadius}
  ${flexDirection}
  ${justifyContent}
  display: ${({ inline }) => H.ifElse(inline, 'inline-flex', 'flex')};
`;

export const Text = styled.div`
  ${color}
  ${space}
  ${width}
  ${opacity}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
  cursor: ${({ cursor }) => or(cursor, 'initial')}
`;

export const Button = styled.button`
  ${color}
  ${space}
  ${width}
  ${height}
  ${border}
  ${zIndex}
  ${opacity}
  ${fontSize}
  ${boxShadow}
  ${borderColor}
  ${borderRadius}
  cursor: ${({ cursor }) => or(cursor, 'initial')};
  &::before {
    margin-left: ${({ ml }) => ml || ''}px;
    content: ${({ content }) => content || ''};
    transform: ${({ transform }) => transform || ''}; 
  }
`;

export const Input = styled.input`
  ${space}
  ${width}
  ${border}
  ${height}
`;

export const TextArea = styled.textarea`
  ${space}
  ${width}
  ${border}
  ${height}
`;

export const LinkButton = styled.a`
  ${color}
  ${space}
  ${width}
  ${height}
  ${border}
  ${zIndex}
  ${opacity}
  ${display}
  ${fontSize}
  ${position}
  ${boxShadow}
  ${alignItems}
  ${borderColor}
  ${borderRadius}
  ${justifyContent}
  cursor: ${({ cursor }) => or(cursor, 'initial')}
`;

/* NOTE: don't remove 'position' from start for work animation */
export const LinkButtonAnimated = styled(LinkButton)`
  position: relative;
  &::before {
    top: 0;
    left: 0;
    width: 0;
    content: '';
    height: 100%;
    position: absolute;
    transition: width 0.2s;
    background-color: rgba(255,255,255,0.5);
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }
`;

export const Image = styled.img`
  ${space}
  ${width}
  ${height}
`;
