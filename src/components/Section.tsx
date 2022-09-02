import React from 'react';
import { MinHeightProps, PaddingProps } from 'styled-system';
import { Box } from './Box';

interface SectionProps extends MinHeightProps, PaddingProps {
  children: React.ReactNode;
  id: string;
}

export function Section({ children, id, py = 5, ...rest }: SectionProps) {
  return (
    <Box as="section" id={id} position="relative" py={py} {...rest}>
      {children}
    </Box>
  );
}
