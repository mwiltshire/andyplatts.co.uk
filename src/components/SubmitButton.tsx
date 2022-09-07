import styled from 'styled-components';
import { useFormikContext } from 'formik';
import { Spinner } from './Spinner';
import { Box } from './Box';

interface SubmitButtonProps {
  children: React.ReactNode;
}

export function SubmitButton({ children }: SubmitButtonProps) {
  const { isSubmitting } = useFormikContext();
  return (
    <StyledButton type="submit" isSubmitting={isSubmitting}>
      {isSubmitting && (
        <Box
          as="span"
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          top={0}
          left={0}
          height="100%"
          width="100%"
          padding="0.75rem"
        >
          <Spinner />
        </Box>
      )}
      <TextWrapper isSubmitting={isSubmitting}>{children}</TextWrapper>
    </StyledButton>
  );
}

const StyledButton = styled.button<{ isSubmitting: boolean }>`
  position: relative;
  width: fit-content;
  border: 6px solid var(--white);
  background: ${({ isSubmitting }) => (isSubmitting ? 'var(--white)' : 'none')};
  outline: none;
  padding: 1rem 3rem;
  color: inherit;
  cursor: pointer;
  font-weight: 500;
  font-size: inherit;
  transition: color 250ms ease-in, background-color 250ms ease-in;
  &:hover {
    color: var(--black);
    background-color: var(--white);
  }
  &:focus-visible {
    outline: 2px solid var(--focus);
    outline-offset: 2px;
  }
`;

const TextWrapper = styled.span<{ isSubmitting: boolean }>`
  visibility: ${({ isSubmitting }) => (isSubmitting ? 'hidden' : null)};
`;
