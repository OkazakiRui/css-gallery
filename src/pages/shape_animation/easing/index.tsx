import type { NextPage } from 'next';
import Head from 'next/head';
import { Wrap, Bar } from './style';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>easing</title>
      </Head>
      <Wrap>
        {[...Array(6)].map((_, i) => (
          <Bar key={i} />
        ))}
      </Wrap>
    </>
  );
};

export default index;
