import type { NextPage } from 'next';
import Head from 'next/head';
import { Effect, Wrap } from './style';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>three_square2</title>
      </Head>
      <Wrap>
        {[...Array(3)].map((_, index) => (
          <Effect key={index} num={index} />
        ))}
      </Wrap>
    </>
  );
};

export default index;
