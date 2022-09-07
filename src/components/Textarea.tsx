import React, { RefObject } from 'react';
import styled from 'styled-components';
import { useField } from 'formik';
import { Box } from './Box';

interface TextAreaProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  // Make `name` a required prop.
  name: string;
  // Make `ref` work with styled component.
  ref?:
    | ((instance: HTMLTextAreaElement | null) => void)
    | RefObject<HTMLTextAreaElement>
    | null;
}

export function TextArea(props: TextAreaProps) {
  const [field, meta] = useField(props.name);
  const hasError = typeof meta.error === 'string' && meta.touched;
  return (
    <Box position="relative">
      <StyledTextarea {...field} {...props} hasError={hasError} />
      {hasError && <Error>{meta.error}</Error>}
    </Box>
  );
}

const StyledTextarea = styled.textarea<{ hasError: boolean }>`
  display: block;
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
  resize: none;
  min-height: 15rem;
  margin: 0;
  border-radius: 0;
  &:focus-visible {
    outline: 2px solid var(--focus);
    outline-offset: 2px;
  }
`;

const Error = styled.span`
  position: absolute;
  right: 0;
  top: 100%;
  padding: 0.25rem 0.5rem;
  background-color: var(--red);
  color: inherit;
`;
