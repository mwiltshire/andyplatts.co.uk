import React, { RefObject } from 'react';
import styled from 'styled-components';
import { useField } from 'formik';
import { Box } from './Box';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  // Make `name` a required prop.
  name: string;
  // Make `ref` work with styled component.
  ref?:
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>
    | null;
}

export function Input(props: InputProps) {
  const [field, meta] = useField(props.name);
  const hasError = typeof meta.error === 'string' && meta.touched;
  return (
    <Box position="relative">
      <StyledInput {...field} {...props} hasError={hasError} />
      {hasError && <Error>{meta.error}</Error>}
    </Box>
  );
}

const StyledInput = styled.input<{ hasError: boolean }>`
  border: none;
  border-bottom: 6px solid
    ${({ hasError }) => (hasError ? 'var(--red)' : 'var(--gray)')};
  background: var(--white);
  outline: none;
  padding: 1rem;
  width: 100%;
  font-size: inherit;
  color: var(--black);
  font-family: inherit;
  border-radius: 0;
  &:focus-within {
    outline: 2px solid var(--focus);
    outline-offset: 2px;
  }
`;

const Error = styled.span`
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 0.5rem;
  padding: 0.25rem 0.5rem;
  background-color: var(--red);
  color: inherit;
`;
