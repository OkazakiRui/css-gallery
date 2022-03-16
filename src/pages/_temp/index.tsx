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
        <p>hoge</p>
      </div>
    </>
  );
};

export default index;
