import React from 'react';
import styled from 'styled-components';
import {
  typography,
  TypographyProps,
  margin,
  MarginProps
} from 'styled-system';
import { Box } from './Box';

interface HeadingProps extends TypographyProps, MarginProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  underline?: boolean;
}

const headings: Array<keyof JSX.IntrinsicElements> = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6'
];

export function Heading({ children, level, ...rest }: HeadingProps) {
  return (
    <StyledHeading as={headings[level - 1]} {...rest}>
      {children}
    </StyledHeading>
  );
}

const StyledHeading = styled(Box)<Pick<HeadingProps, 'underline'>>`
  position: relative;
  margin: 0;
  color: var(--white);
  font-family: Butler, serif;
  line-height: 1.2;
  ${typography}
  ${margin}
  ${({ underline = false }) =>
    underline &&
    `::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 6px;
    width: 100%;
    max-width: 700px;
    background-color: var(--white);}`}
`;
