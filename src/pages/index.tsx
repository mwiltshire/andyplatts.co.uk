import { NextPage } from 'next';
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
      imageAlt: 'Take That This Life single cover',
      imageUrl: '/take-that.jpg',
      blurDataURL:
        'data:image/webp;base64,UklGRtICAABXRUJQVlA4WAoAAAAgAAAAbwAAbwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg5AAAAPAIAJ0BKnAAcAA+7WqsUTo2JKKp1mtLQB2JZwcFgTINSf7jFQxdBR57yrYl25MciTrRTF3YnndqQPIJl0n1UlakzMffT1TijQIwsW7qjDWMAP7NhhMzEYa3VUUUXQW51WCG25aRnc3SdWAx5sx2T/KxIkh0qEy9X1GG9Gl1PEBhGLe/3xB1BY//5Qv7AImsAFllLzv8/jlPbQxXQh/IcIzu+RK+HQ9jObXckwGJMhpMk0E02G+tyIpXclQ4C6sutwWOlOgYJmPIt6I4Yveo4M3XJtKaTTPG/lDTJm2QVQJXdJc8AA=='
    }
  ];
}

function Index({ content }: IndexProps & NextPage) {
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
        <Contact
          headingText={content.contactHeading}
          content={content.contactContent}
          labels={{
            name: content.nameInputLabel,
            email: content.emailInputLabel,
            message: content.messageInputLabel,
            submit: content.submitButtonText
          }}
        />
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
  contactContent: Document;
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
