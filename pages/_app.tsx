import '../styles/globals.css';
import '../styles/prism-dark.css';

import { DefaultSeo } from 'next-seo';
import Layout from '@modules/layout/components/Layout';
import { useEffect } from 'react';
import useTheme from '@store/useTheme';

function MyApp({ Component, pageProps }) {
  const theme = useTheme((state: any) => state.active);

  useEffect(() => {
    if (theme === 'light') {
      document.querySelector('html').className = 'light';
    } else {
      document.querySelector('html').className = 'dark';
    }
  }, [theme]);
  return (
    <>
      <DefaultSeo titleTemplate={'%s - Nick Wallentin'} />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
