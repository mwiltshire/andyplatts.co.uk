import React from 'react';
import styled from 'styled-components';
import { createScrollTo } from '../utils/scrollTo';
import { Box } from './Box';
import { Container } from './Container';

interface NavMenuProps {
  onMenuItemClick: () => void;
}

const navItems = [{ label: 'About' }, { label: 'Work' }, { label: 'Contact' }];

const scrollTo = createScrollTo({ offset: -64 });

export function NavMenu({ onMenuItemClick }: NavMenuProps) {
  return (
    <Nav id="nav-menu">
      <Container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <NavList>
            {navItems.map(({ label }) => (
              <NavListItem key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onMenuItemClick();
                    scrollTo(`#${label.toLowerCase()}`);
                  }}
                >
                  {label}
                </a>
              </NavListItem>
            ))}
          </NavList>
        </Box>
      </Container>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  inset: 0;
  z-index: -1;
  height: 100vh;
  padding: 4rem 0;
  background-color: var(--black);
  font-family: Butler, serif;
  font-size: 10vmin;
  font-weight: 700;
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavListItem = styled.li`
  margin: 0;
  padding: 0.5rem 0;
`;
