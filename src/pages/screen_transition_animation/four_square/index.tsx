import type { NextPage } from 'next';
import Head from 'next/head';
import { Item, Wrap } from './style';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>four_square</title>
      </Head>
      <Wrap>
        {[...Array(4)].map((_, index) => (
          <Item key={index} num={index} />
        ))}
      </Wrap>
    </>
  );
};

export default index;
