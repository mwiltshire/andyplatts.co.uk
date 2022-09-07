import Head from 'next/head';
import NextLink from 'next/link';
import { Box } from '../components/Box';
import { Container } from '../components/Container';
import { Heading } from '../components/Heading';
import { Paragraph } from '../components/Paragraph';
import { Link } from '../components/Link';

export default function NotFound() {
  return (
    <div>
      <Head>
        <title>Andy Platts</title>
        <meta
          name="description"
          content="British Songwriter for Mamas Gun, Young Gun Silver Fox, Park Hyo Shin and many others."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Heading level={1} fontSize="10vmin">
              Nein
            </Heading>
            <Paragraph>
              <NextLink href="/">
                <Link>Go home</Link>
              </NextLink>
              .
            </Paragraph>
          </Box>
        </Container>
      </main>
    </div>
  );
}
