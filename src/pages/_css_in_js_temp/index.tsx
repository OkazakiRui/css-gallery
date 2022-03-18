import type { NextPage } from 'next';
import Head from 'next/head';
import { Wrap } from './style';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>hoge</title>
      </Head>
      <Wrap>
        {[...Array(3)].map((_, index) => (
          <div key={index} />
        ))}
      </Wrap>
    </>
  );
};

export default index;
