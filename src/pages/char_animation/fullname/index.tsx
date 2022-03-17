import type { NextPage } from 'next';
import Head from 'next/head';
import { Char, Word, Wrap, CharItem, CharParts } from './style';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>岡崎流依</title>
      </Head>
      <Wrap>
        <Word>
          {[...Array(4)].map((_, cNum) => (
            <Char key={cNum}>
              {[...Array(2)].map((_, dNum) => (
                <CharItem key={dNum}>
                  {[...Array(4)].map((_, sNum) => (
                    <CharParts key={sNum} cNum={cNum} dNum={dNum} sNum={sNum} />
                  ))}
                </CharItem>
              ))}
            </Char>
          ))}
        </Word>
      </Wrap>
    </>
  );
};

export default index;
