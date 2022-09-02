import React from 'react';
import { MaxWidthProps } from 'styled-system';
import { Box } from './Box';

interface ContainerProps extends MaxWidthProps {
  children: React.ReactNode;
}

export function Container({ children, maxWidth }: ContainerProps) {
  return (
    <Box position="relative" px={3} width="100%" mx="auto" maxWidth={maxWidth}>
      {children}
    </Box>
  );
}
