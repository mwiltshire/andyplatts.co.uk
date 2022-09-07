import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import toast from 'react-hot-toast';
import { Document, BLOCKS, INLINES, Node } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container } from '../components/Container';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { Label } from '../components/Label';
import { Link } from '../components/Link';
import { Paragraph } from '../components/Paragraph';
import { Section } from '../components/Section';
import { Stack } from '../components/Stack';
import { SubmitButton } from '../components/SubmitButton';
import { TextArea } from '../components/Textarea';

const schema = object().shape({
  name: string().required('Required field!'),
  email: string().email('Invalid email address!').required('Required field!'),
  message: string().required('Required field!')
});

async function handleSubmit() {
  await new Promise((res) => setTimeout(res, 2000));
  toast.success('Got it! Thanks for getting in touch!');
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

interface FormLabels {
  name: string;
  email: string;
  message: string;
}

interface ContactProps {
  headingText: string;
  content: Document;
  labels: FormLabels;
}

export function Contact({ headingText, content, labels }: ContactProps) {
  return (
    <Section id="contact">
      <Container maxWidth="55rem">
        <Heading level={2} fontSize="13vmin" marginBottom="10vmin" underline>
          {headingText}
        </Heading>
      </Container>
      <Container maxWidth="45rem">
        <Stack gap="2rem">
          {documentToReactComponents(content, options)}
          <Formik
            validationSchema={schema}
            initialValues={{
              name: '',
              email: '',
              message: ''
            }}
            onSubmit={handleSubmit}
          >
            <Form noValidate>
              <Stack gap="2rem">
                <Stack gap="0.5rem">
                  <Label htmlFor="name">{labels.name}</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                  />
                </Stack>
                <Stack gap="0.5rem">
                  <Label htmlFor="email">{labels.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane.smith@gmail.com"
                  />
                </Stack>
                <Stack gap="0.5rem">
                  <Label htmlFor="message">{labels.message}</Label>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="Enter your message here..."
                  />
                </Stack>
                <SubmitButton>Submit</SubmitButton>
              </Stack>
            </Form>
          </Formik>
        </Stack>
      </Container>
    </Section>
  );
}
