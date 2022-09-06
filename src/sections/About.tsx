import { Document, BLOCKS, INLINES, Node } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container } from '../components/Container';
import { Heading } from '../components/Heading';
import { Paragraph } from '../components/Paragraph';
import { Section } from '../components/Section';
import { Link } from '../components/Link';

interface AboutProps {
  headingText: string;
  content: Document;
}

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: unknown, children: React.ReactNode) => (
      <Paragraph>{children}</Paragraph>
    ),
    [INLINES.HYPERLINK]: ({ data }: Node, children: React.ReactNode) => (
      <Link href={data.uri}>{children}</Link>
    )
  }
};

export function About({ headingText, content }: AboutProps) {
  return (
    <Section id="about">
      <Container maxWidth="55rem">
        <Heading level={2} fontSize="13vmin" marginBottom="10vmin" underline>
          {headingText}
        </Heading>
      </Container>
      <Container maxWidth="45rem">
        {documentToReactComponents(content, options)}
      </Container>
    </Section>
  );
}
