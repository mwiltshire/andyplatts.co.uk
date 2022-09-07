import Image from 'next/image';
import { Box } from '../components/Box';
import { Container } from '../components/Container';
import { Heading } from '../components/Heading';
import { Section } from '../components/Section';

interface HomeProps {
  siteTitle: string;
}

export function Home({ siteTitle }: HomeProps) {
  return (
    <Section id="home">
      <Container maxWidth={['55rem']}>
        <Heading level={1} fontSize="13vmin" marginBottom="1.25rem">
          {siteTitle}
        </Heading>
      </Container>
      <Container maxWidth={[1150]}>
        <Box
          display="flex"
          justifyContent="center"
          border="6px solid var(--white)"
        >
          <Image
            src="/andy-platts.jpeg"
            alt="Andy Platts"
            width={960}
            height={640}
            layout="intrinsic"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVQImWMQFRVtb2/X0tLi4eFhEBAQ+P//f3p6OhMTEwMDA8PHjx+vXr3Kzs4OAM7QDEafPSldAAAAAElFTkSuQmCC"
          />
        </Box>
      </Container>
    </Section>
  );
}
