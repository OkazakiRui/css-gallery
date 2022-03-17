import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import LinkItem from 'components/LinkItem';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>css gallery</title>
      </Head>
      <h2>practice</h2>
      <h3>shapeAnimation</h3>
      <ul>
        <LinkItem genre="shape_animation" pageName="easing" />
        <LinkItem genre="shape_animation" pageName="three_scales" />
        <LinkItem genre="shape_animation" pageName="three_square" />
        <LinkItem genre="shape_animation" pageName="three_square2" />
        <LinkItem genre="shape_animation" pageName="square_block" />
      </ul>
      <h3>screenTransitionAnimation</h3>
      <ul>
        <LinkItem genre="screen_transition_animation" pageName="four_square" />
        <LinkItem genre="screen_transition_animation" pageName="three_arrow" />
      </ul>
    </>
  );
};

export default Home;
