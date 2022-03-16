import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>css gallery</title>
      </Head>
      <h3>作品集</h3>
      <ul>
        <li>
          <Link href="/">hoge</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
