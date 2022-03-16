import type { NextPage } from 'next';
import Head from 'next/head';
import s from './index.module.scss';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>three_scales</title>
      </Head>
      <div className={s.wrap}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className={s.effect} />
        ))}
      </div>
    </>
  );
};

export default index;
