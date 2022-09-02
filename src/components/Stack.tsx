import styled from 'styled-components';

interface StackProps {
  direction?: 'row' | 'column';
  gap?: string;
}

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
  flex-wrap: ${({ direction }) => (direction === 'row' ? 'wrap' : null)};
  & > * + * {
    margin-top: ${({ direction = 'column', gap }) =>
      direction === 'column' ? gap : null};
    margin-left: ${({ direction, gap }) => (direction === 'row' ? gap : null)};
  }
`;
