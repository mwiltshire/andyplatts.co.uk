import styled from 'styled-components';
import {
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  textAlign,
  TextAlignProps,
  margin,
  MarginProps,
  lineHeight,
  LineHeightProps
} from 'styled-system';

export const Text = styled.p<
  FontSizeProps &
    FontWeightProps &
    TextAlignProps &
    MarginProps &
    LineHeightProps & { color?: string }
>`
  margin: 0;
  color: ${({ color = 'var(--white)' }) => color};
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${margin}
  ${lineHeight}
`;
