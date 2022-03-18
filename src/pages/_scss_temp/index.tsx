import type { NextPage } from 'next';
import Head from 'next/head';
import s from './index.module.scss';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>untitled</title>
      </Head>
      <div className={s.wrap}>
        {[...Array(3)].map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </>
  );
};

export default index;
