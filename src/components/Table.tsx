import styled from 'styled-components';

export const Table = styled.table`
  color: var(--white);
  width: 100%;
  border-spacing: 0;
  text-align: left;
  font-weight: 300;
`;

export const TableHeader = styled.th`
  padding: 0.5rem;
  border-bottom: 6px solid var(--white);
`;

export const TableRow = styled.tr`
  &:hover:not(:first-child) {
    background-color: #191919;
  }
`;

export const TableCell = styled.td`
  padding: 0.5rem;
`;
