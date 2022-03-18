import type { NextPage } from 'next';
import Head from 'next/head';
import s from './index.module.scss';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>square_roring</title>
      </Head>
      <div className={s.wrap}>
        <span />
      </div>
    </>
  );
};

export default index;
