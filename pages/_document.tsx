import { Html, Head, Main, NextScript } from 'next/document';

export default function Document({ locale }: { locale: string }) {
  return (
    <Html lang={locale}>
      <Head />
      <body className="bg-ea-verde-oscuro">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
