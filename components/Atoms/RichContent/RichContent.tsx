import { FC } from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';

// Hygraph rich-text AST — trusted CMS blob, typed loosely on purpose.
// ponytail: `any` blob, tighten to RichTextContent if a stricter shape is ever needed.
type RichTextValue = any;

type Props = {
  content?: RichTextValue | { raw: RichTextValue } | null;
};

const RichContent: FC<Props> = ({ content }) => {
  if (!content) return null;

  // Hygraph returns either the raw AST or a `{ raw }` wrapper depending on the query.
  const value = content && typeof content === 'object' && 'raw' in content ? content.raw : content;

  return (
    <RichText
      content={value}
      renderers={{
        h1: ({ children }) => (
          <h1 className='mb-5 text-4xl font-medium display-font text-ea-verde-900'>{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className='mb-5 text-3xl font-medium display-font text-ea-verde-900'>{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className='mb-5 text-2xl font-medium display-font text-ea-verde-900'>{children}</h3>
        ),
        bold: ({ children }) => <strong className='font-semibold'>{children}</strong>,
        p: ({ children }) => <p className='mb-5 font-light text-pretty'>{children}</p>,
        ul: ({ children }) => <ul className='mb-5 ml-5 list-disc'>{children}</ul>,
        ol: ({ children }) => <ol className='mb-5 ml-5 list-decimal'>{children}</ol>,
        li: ({ children }) => <li className='mb-2'>{children}</li>,
        a: ({ children, href }) => (
          <a href={href} className='font-semibold underline text-ea-verde-500'>
            {children}
          </a>
        ),
      }}
    />
  );
};

export default RichContent;
