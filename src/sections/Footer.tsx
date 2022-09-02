import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { Text } from '../components/Text';

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Text>© {new Date().getFullYear()}, Andy Platts</Text>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  text-align: center;
`;
