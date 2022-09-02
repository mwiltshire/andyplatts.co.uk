import { Text } from './Text';

interface ParagraphProps {
  children: React.ReactNode;
}

export function Paragraph({ children }: ParagraphProps) {
  return (
    <Text fontSize={[16]} fontWeight={300} marginBottom="1rem">
      {children}
    </Text>
  );
}
