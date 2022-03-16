import type { NextPage } from 'next';
import Head from 'next/head';
import s from './index.module.scss';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>hoge</title>
      </Head>
      <div className={s.wrap}>
        {[...Array(3)].map((_, index) => (
          <div key={index} className={s.effect} />
        ))}
      </div>
    </>
  );
};

export default index;
