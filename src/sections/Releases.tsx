import { Document, BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container } from '../components/Container';
import { Heading } from '../components/Heading';
import { Section } from '../components/Section';
import React from 'react';
import { ShowMore } from '../components/ShowMore';
import { Table, TableCell, TableHeader, TableRow } from '../components/Table';

interface ReleasesProps {
  headingText: string;
  releasesTable: Document;
}

const options = {
  renderNode: {
    [BLOCKS.TABLE]: (_: unknown, children: React.ReactNode) => (
      <Table>
        <tbody>{children}</tbody>
      </Table>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (_: unknown, children: React.ReactNode) => (
      <TableHeader>{children}</TableHeader>
    ),
    [BLOCKS.TABLE_ROW]: (_: unknown, children: React.ReactNode) => (
      <TableRow>{children}</TableRow>
    ),
    [BLOCKS.TABLE_CELL]: (_: unknown, children: React.ReactNode) => (
      <TableCell>{children}</TableCell>
    ),
    // Contenful wants to render text inside td elements as p elements...
    [BLOCKS.PARAGRAPH]: (_: unknown, children: React.ReactNode) => (
      <span>{children}</span>
    )
  }
};

export function Releases({ headingText, releasesTable }: ReleasesProps) {
  return (
    <Section id="releases">
      <Container maxWidth="55rem">
        <Heading level={2} fontSize="13vmin" marginBottom="10vmin" underline>
          {headingText}
        </Heading>
      </Container>
      <Container>
        <ShowMore maxHeight={700}>
          <div style={{ overflow: 'auto' }}>
            {documentToReactComponents(releasesTable, options)}
          </div>
        </ShowMore>
      </Container>
    </Section>
  );
}
