import type { NextPage } from 'next';
import Head from 'next/head';
import s from './index.module.scss';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>軌道回転</title>
      </Head>
      <div className={s.stage}>
        <div className={s.contents}>
          <span />
        </div>
      </div>
    </>
  );
};

export default index;
