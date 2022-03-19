import type { NextPage } from 'next';
import Head from 'next/head';
import s from './index.module.scss';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>信号機</title>
      </Head>
      <div className={s.stage}>
        <div>
          <span />
          <span />
          <span />
        </div>
      </div>
    </>
  );
};

export default index;
