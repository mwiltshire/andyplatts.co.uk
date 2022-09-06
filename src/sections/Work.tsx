import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document, BLOCKS, INLINES, Node } from '@contentful/rich-text-types';
import { Box } from '../components/Box';
import { Container } from '../components/Container';
import { Column, Grid } from '../components/Grid';
import { Heading } from '../components/Heading';
import { Paragraph } from '../components/Paragraph';
import { Section } from '../components/Section';
import { Stack } from '../components/Stack';
import { ShowMore } from '../components/ShowMore';
import { Link } from '../components/Link';

interface WorkItem {
  imageUrl: string;
  imageAlt: string;
  blurDataURL?: string;
  heading: string;
  content: Document;
}

interface WorkProps {
  headingText: string;
  workItems: WorkItem[];
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

export function Work({ headingText, workItems }: WorkProps) {
  return (
    <Section id="work">
      <Container maxWidth="55rem">
        <Heading level={2} fontSize="13vmin" marginBottom="10vmin" underline>
          {headingText}
        </Heading>
      </Container>
      <Container>
        <Grid
          gridGap={5}
          gridTemplateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(3, 1fr)'
          ]}
        >
          {workItems.map((item) => (
            <Column key={item.imageUrl}>
              <Stack gap="2rem">
                <Box border="6px solid var(--white)">
                  <Image
                    alt={item.imageAlt}
                    src={item.imageUrl}
                    layout="responsive"
                    height={500}
                    width={500}
                    placeholder="blur"
                    blurDataURL={item.blurDataURL}
                  />
                </Box>
                <Box>
                  <Heading level={3} fontSize="1.5rem" marginBottom="0.5rem">
                    {item.heading}
                  </Heading>
                  <ShowMore maxHeight={300}>
                    {documentToReactComponents(item.content, options)}
                  </ShowMore>
                </Box>
              </Stack>
            </Column>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
