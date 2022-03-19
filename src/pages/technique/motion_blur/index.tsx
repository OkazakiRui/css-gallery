import type { NextPage } from 'next';
import Head from 'next/head';
import s from './index.module.scss';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>モーションブラー</title>
      </Head>
      <div className={s.stage}>
        <div className={s.contents}>
          <h3>hover plz!</h3>
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <span key={i} />
            ))}
        </div>
      </div>
    </>
  );
};

export default index;
