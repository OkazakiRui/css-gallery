import type { NextPage } from 'next';
import Head from 'next/head';
import { Wrap, Effect } from './style';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>three_circle</title>
      </Head>
      <Wrap>
        {[...Array(3)].map((_, i) => (
          <Effect key={i} num={i} />
        ))}
      </Wrap>
    </>
  );
};

export default index;
