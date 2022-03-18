import type { NextPage } from 'next';
import Head from 'next/head';
import { Item, Wrap } from './style';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>2circles_fuwafuwa</title>
      </Head>
      <Wrap>
        {[...Array(2)].map((_, index) => (
          <Item key={index} num={index} />
        ))}
      </Wrap>
    </>
  );
};

export default index;
