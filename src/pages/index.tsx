import type { NextPage } from 'next';
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
        <LinkItem genre="shape_animation" pageName="three_circle" />
        <LinkItem genre="shape_animation" pageName="three_square" />
        <LinkItem genre="shape_animation" pageName="three_square2" />
        <LinkItem genre="shape_animation" pageName="square_block" />
        <LinkItem genre="shape_animation" pageName="traffic_lights">
          信号機
        </LinkItem>
      </ul>
      <h3>screenTransitionAnimation</h3>
      <ul>
        <LinkItem genre="screen_transition_animation" pageName="four_square" />
        <LinkItem genre="screen_transition_animation" pageName="three_arrow" />
        <LinkItem
          genre="screen_transition_animation"
          pageName="slide_sway_below"
        />
      </ul>
      <h3>charAnimation</h3>
      <ul>
        <LinkItem genre="char_animation" pageName="fullname">
          岡崎流依
        </LinkItem>
        <LinkItem genre="char_animation" pageName="fullname2">
          岡崎流依2
        </LinkItem>
        <LinkItem genre="char_animation" pageName="fullname3">
          岡崎流依3
        </LinkItem>
        <LinkItem genre="char_animation" pageName="paka">
          ぼとん！くる！ぱか！
        </LinkItem>
      </ul>
      <h3>loadingAnimation</h3>
      <ul>
        <LinkItem genre="loading_animation" pageName="2circles_fuwafuwa" />
        <LinkItem genre="loading_animation" pageName="square_roring" />
        <LinkItem genre="loading_animation" pageName="ripple">
          波紋
        </LinkItem>
      </ul>
      <h3>technique</h3>
      <ul>
        <LinkItem
          genre="technique"
          pageName="disney_12_principles_of_animation"
        >
          アニメーション12の基本原則
        </LinkItem>
        <LinkItem genre="technique" pageName="motion_blur">
          モーションブラー
        </LinkItem>
      </ul>
      <h3>モーション周期表</h3>
      <ul>
        <LinkItem genre="motion_periodic_table" pageName="orbit">
          軌道回転
        </LinkItem>
        <LinkItem genre="motion_periodic_table" pageName="fractal_noise">
          フラクタルノイズ
        </LinkItem>
      </ul>
    </>
  );
};

export default Home;
