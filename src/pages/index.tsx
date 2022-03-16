import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>css gallery</title>
      </Head>
      <h3>練習</h3>
      <ul>
        <li>
          <Link href="/easing">easing</Link>
        </li>
        <li>
          <Link href="/three_scales">three_scales</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
