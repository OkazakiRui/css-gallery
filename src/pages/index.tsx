import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>css gallery</title>
      </Head>
      <h2>practice</h2>
      <h3>shapeAnimation</h3>
      <ul>
        <li>
          <Link href="/shape_animation/easing">easing</Link>
        </li>
        <li>
          <Link href="/shape_animation/three_scales">three_scales</Link>
        </li>
        <li>
          <Link href="/shape_animation/three_square">three_square</Link>
        </li>
        <li>
          <Link href="/shape_animation/three_square2">three_square2</Link>
        </li>
        <li>
          <Link href="/shape_animation/square_block">square_block</Link>
        </li>
      </ul>
      <h3>screenTransitionAnimation</h3>
      <ul>
        <li>
          <Link href="/screen_transition_animation/four_square">
            four_square
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
