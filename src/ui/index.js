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
// //////////////////////////////////////////////////////////////////////////////

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
  display: flex;
`;

export const Text = styled.div`
  ${color}
  ${space}
  ${width}
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
  ${fontSize}
  ${boxShadow}
  ${borderColor}
  ${borderRadius}
  cursor: ${({ cursor }) => or(cursor, 'initial')}
`;

export const Image = styled.img`
  ${space}
  ${width}
  ${height}
`;
