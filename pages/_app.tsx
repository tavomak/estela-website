import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';
import 'styles/main.scss';
import { bricolage, roboto } from '@utils/fonts';

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM as string,
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <>
      <style jsx global>
        {`
        :root {
          --font-roboto: ${roboto.style.fontFamily};
          --font-bricolage: ${bricolage.style.fontFamily};
        }
      `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
