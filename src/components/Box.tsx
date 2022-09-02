import styled from 'styled-components';
import {
  position,
  PositionProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  flex,
  FlexProps,
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
  flexDirection,
  FlexDirectionProps,
  background,
  BackgroundProps,
  border,
  BorderProps
} from 'styled-system';

type BoxProps = PositionProps &
  SpaceProps &
  LayoutProps &
  FlexProps &
  AlignItemsProps &
  JustifyContentProps &
  FlexDirectionProps &
  BackgroundProps &
  BorderProps;

export const Box = styled.div<BoxProps>`
  ${position}
  ${space}
  ${layout}
  ${flex}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${background}
  ${border}
`;
