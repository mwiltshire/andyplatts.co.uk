import { useState } from 'react';
import styled from 'styled-components';
import FocusTrap from 'focus-trap-react';
import { Box } from './Box';
import { Container } from './Container';
import { NavMenu } from './NavMenu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <FocusTrap
      active={isMenuOpen}
      focusTrapOptions={{ initialFocus: '#nav-menu-button' }}
    >
      <StyledHeader>
        <Container>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            height="5rem"
          >
            <MenuButton
              id="nav-menu-button"
              aria-haspopup="true"
              aria-controls="nav-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </MenuButton>
            {isMenuOpen && (
              <NavMenu onMenuItemClick={() => setIsMenuOpen(false)} />
            )}
          </Box>
        </Container>
      </StyledHeader>
    </FocusTrap>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background: linear-gradient(to bottom, var(--black), rgba(0, 0, 0, 0));
  color: inherit;
  text-transform: uppercase;
`;

const MenuButton = styled.button`
  font-family: Butler, serif;
  border: none;
  background: none;
  outline: none;
  color: inherit;
  font-size: 2.5vmax;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0;
  padding-top: 0.5rem;
  &:focus-visible {
    outline: 2px solid var(--focus);
    outline-offset: 2px;
  }
`;
