import type { NextPage } from 'next';
import Head from 'next/head';
import Stage from './Stage';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>アニメーション12の基本原則</title>
      </Head>
      <Stage />
    </>
  );
};

export default index;
