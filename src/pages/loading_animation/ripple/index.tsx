import type { NextPage } from 'next';
import Head from 'next/head';
import s from './index.module.scss';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>波紋</title>
      </Head>
      <div className={s.stage}>
        <span />
      </div>
    </>
  );
};

export default index;
