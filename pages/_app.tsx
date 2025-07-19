import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';
import { bricolage, roboto } from '@/utils/fonts';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-input-2/lib/style.css';
import '@/styles/main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ModalProvider, useModal } from '@/hooks/useModal';
import { DefaultModalContent } from '@/components/Templates/Modal/DefaultModalContent';

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM as string,
};

const AppContent = ({ Component, pageProps }: AppProps) => {
  const { setCustomModalContent } = useModal();

  useEffect(() => {
    setCustomModalContent(<DefaultModalContent />);
  }, []);

  return <Component {...pageProps} />;
};

export default function App(props: AppProps) {
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
      <ModalProvider>
        <AppContent {...props} />
      </ModalProvider>
    </>
  );
}
