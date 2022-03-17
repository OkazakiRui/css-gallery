import type { NextPage } from 'next';
import Head from 'next/head';
import { Effect, Item, Wrap } from './style';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>square_block</title>
      </Head>
      <Wrap>
        {[...Array(3)].map((_, eNum) => (
          <Effect key={eNum}>
            {[...Array(4)].map((_, sNum) => (
              <Item key={sNum} eNum={eNum} sNum={sNum} />
            ))}
          </Effect>
        ))}
      </Wrap>
    </>
  );
};

export default index;
