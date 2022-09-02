import styled from 'styled-components';
import {
  gridGap,
  GridGapProps,
  gridRowGap,
  GridRowGapProps,
  gridTemplateColumns,
  GridTemplateColumnsProps,
  gridColumn,
  GridColumnProps
} from 'styled-system';

export const Grid = styled.div<
  GridGapProps & GridRowGapProps & GridTemplateColumnsProps
>`
  display: grid;
  ${gridGap}
  ${gridRowGap}
  ${gridTemplateColumns}
`;

export const Column = styled.div<GridColumnProps>`
  ${gridColumn}
`;
