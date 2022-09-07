import styled from 'styled-components';

export const Link = styled.a`
  position: relative;
  font-weight: 700;
  padding-bottom: 0.2rem;
  background: linear-gradient(to right, var(--gray), var(--gray)),
    linear-gradient(to right, var(--white), var(--white));
  background-size: 100% 0.2rem, 0 0.2rem;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
  cursor: pointer;
  &:hover {
    background-size: 0 0.2rem, 100% 0.2rem;
  }
  &:focus-visible {
    outline: 2px solid var(--focus);
    outline-offset: 2px;
  }
`;
