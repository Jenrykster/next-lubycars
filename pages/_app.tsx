import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Fragment, useState, useEffect } from 'react';
import { ErrorView, Header } from '@components';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isPageLoading, setIsPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setIsPageLoading(true);
    };
    const handleComplete = () => {
      setIsPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
  });
  return (
    <Fragment>
      <Header />
      {isPageLoading ? (
        <ErrorView title='Loading' subtitle='Just a sec !' />
      ) : (
        <Component {...pageProps} />
      )}
    </Fragment>
  );
}

export default MyApp;
