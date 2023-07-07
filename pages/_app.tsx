import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tailwind.css'
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(MyApp);
