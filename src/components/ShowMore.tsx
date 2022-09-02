import { useState } from 'react';
import styled from 'styled-components';
import { Box } from './Box';

interface ShowMoreProps {
  maxHeight: string | number;
  children: React.ReactNode;
}

export function ShowMore({ maxHeight, children }: ShowMoreProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <Box position="relative">
      <Box maxHeight={isCollapsed ? maxHeight : null} overflow="hidden">
        {children}
      </Box>
      <Box
        position={isCollapsed ? 'absolute' : 'relative'}
        display="flex"
        alignItems={isCollapsed ? 'flex-end' : 'center'}
        justifyContent="center"
        bottom={0}
        width="100%"
        height="6rem"
        background={
          isCollapsed
            ? 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(9,9,9,1) 70%)'
            : 'none'
        }
      >
        <ShowMoreButton onClick={() => setIsCollapsed((state) => !state)}>
          {isCollapsed ? 'Show more' : 'Show less'}
        </ShowMoreButton>
      </Box>
    </Box>
  );
}

const ShowMoreButton = styled.button`
  background: none;
  padding: 1rem;
  color: var(--white);
  cursor: pointer;
  box-shadow: none;
  outline: none;
  border: none;
  font-family: inherit;
  font-weight: 500;
  font-size: inherit;
  text-decoration: underline;
  text-decoration-thickness: 6px;
  text-underline-offset: 6px;
`;
