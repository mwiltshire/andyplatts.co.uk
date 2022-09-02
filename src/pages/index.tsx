import type { NextPage } from 'next';
import Head from 'next/head';
import { Document } from '@contentful/rich-text-types';
import { Toaster } from 'react-hot-toast';
import { About } from '../sections/About';
import { Footer } from '../sections/Footer';
import { Home } from '../sections/Home';
import { Work } from '../sections/Work';
import { Contact } from '../sections/Contact';
import { Header } from '../components/Header';
import { Box } from '../components/Box';

interface IndexProps {
  content: Content;
}

function getWorkItems(content: Content) {
  const { workMamasGun, workYoungGunSilverFox, workSongwritingProduction } =
    content;
  return [
    {
      heading: 'Mamas Gun',
      content: workMamasGun,
      imageAlt: 'Mamas Gun Cure The Jones album cover',
      imageUrl: '/cure-the-jones.jpg',
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVQImWO4cPzw///3U4PtM4rrGO7sWJjq4SzJwJARX8hwePfiIpcgTR1HBRVthrfzOyIDrd1MGAxlGABxbBPshbhkzQAAAABJRU5ErkJggg=='
    },
    {
      heading: 'Young Gun Silver Fox',
      content: workYoungGunSilverFox,
      imageAlt: 'Young Gun Silver Fox West End Coast album cover',
      imageUrl: '/young-gun-silver-fox.jpg',
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVQImQE0AMv/ADVJOTxZTG5/ag0AAAAhHg1DOySHhml2cVMAlYlmxLaO///Y7ua7AJiJYqCUceXWqsW1jNLHFx8EUI/UAAAAAElFTkSuQmCC'
    },
    {
      heading: 'Songwriting & Production',
      content: workSongwritingProduction,
      imageAlt: 'Park Hyo-Shin I Am A Dreamer album cover',
      imageUrl: '/park-hyo-shin.jpeg',
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAHUwAAB1MAHdM3LNAAAAP0lEQVQImQE0AMv/AObi2sTBu8zKxPDu5wD///XKysKGhYGOjIcA//z0QkFBMzMzeXl2AKmmowAAAB0dHZSTj3IeHCtBDj1kAAAAAElFTkSuQmCC'
    }
  ];
}

function Index({ content }: IndexProps & NextPage) {
  return (
    <div>
      <Head>
        <title>Andy Platts - Artists / Songwriter / Producer</title>
        <meta name="description" content="Andy Platts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 4000,
          success: {
            iconTheme: {
              primary: 'var(--green)',
              secondary: 'var(--white)'
            }
          },
          error: {
            iconTheme: { primary: 'var(--red)', secondary: 'var(--white)' },
            style: {
              color: 'var(--red)'
            }
          },
          style: {
            padding: '1rem',
            borderRadius: '0px',
            backgroundColor: 'var(--white)'
          }
        }}
      />
      <Header />
      <Box as="main" pt="2rem">
        <Home siteTitle={content.siteTitle} />
        <About headingText={content.aboutHeading} content={content.aboutText} />
        <Work
          headingText={content.workHeading}
          workItems={getWorkItems(content)}
        />
        <Contact headingText={content.contactHeading} />
        <Footer />
      </Box>
    </div>
  );
}

interface Content {
  siteTitle: string;
  aboutHeading: string;
  aboutText: Document;
  workHeading: string;
  workMamasGun: Document;
  workYoungGunSilverFox: Document;
  workSongwritingProduction: Document;
  releasesHeading: string;
  releasesTable: Document;
  contactHeading: string;
  nameInputLabel: string;
  emailInputLabel: string;
  messageInputLabel: string;
  submitButtonText: string;
}

interface ContentfulResponse {
  fields: Content;
}

async function fetchContent(): Promise<Content | null> {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries/R3KLtfbQ7o0QjNPXL1exg?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
    );

    if (!res.ok) {
      return null;
    }

    const json = (await res.json()) as ContentfulResponse;

    return json.fields;
  } catch (e) {
    throw new Error('Error fetching content from CMS');
  }
}

export async function getStaticProps() {
  const content = await fetchContent();

  return {
    props: {
      content
    }
  };
}

export default Index;
