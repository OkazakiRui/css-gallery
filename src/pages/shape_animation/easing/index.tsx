import type { NextPage } from 'next';
import Head from 'next/head';
import s from './index.module.scss';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>easing</title>
      </Head>
      <div className={s.wrap}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={s.bar}></div>
        ))}
      </div>
    </>
  );
};

export default index;
