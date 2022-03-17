import type { NextPage } from 'next';
import Head from 'next/head';
import s from './index.module.scss';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>岡崎流依</title>
      </Head>
      <div className={s.wrap}>
        <div className={s.word}>
          {[...Array(4)].map((_, index) => (
            <div className={s.char} key={index}>
              {[...Array(2)].map((_, index) => (
                <div key={index}>
                  {[...Array(4)].map((_, index) => (
                    <span key={index} />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
