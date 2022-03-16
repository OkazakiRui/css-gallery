import type { NextPage } from 'next';
import Head from 'next/head';
import s from './index.module.scss';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>four_square</title>
      </Head>
      <div className={s.wrap}>
        {[...Array(4)].map((_, index) => (
          <div key={index} />
        ))}
      </div>
    </>
  );
};

export default index;
