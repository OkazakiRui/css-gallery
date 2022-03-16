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
        <li>
          <Link href="/three_square">three_square</Link>
        </li>
        <li>
          <Link href="/three_square2">three_square2</Link>
        </li>
        <li>
          <Link href="/square_block">square_block</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
