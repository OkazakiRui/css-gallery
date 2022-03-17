import styled, { keyframes } from 'styled-components';

const show = keyframes`
from {
  transform: scale(10) rotateY(0) rotateX(0);
  opacity: 0;
}
to {
  transform: scale(1) rotateY(360deg) rotateX(360deg);
  opacity: 0.7;
}
`;
const hidden = keyframes`
from {
  transform: scale(1) rotateY(0) rotateX(0);
  opacity: 0.7;
}
to {
  transform: scale(10) rotateY(360deg) rotateX(360deg);
  opacity: 0;
}
`;

export const Wrap = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  background-color: #4ead4e;
`;

export const Word = styled.div`
  position: absolute;
  top: calc(50% - 40vmin - 30px);
  left: calc(50% - 10vmin);
`;

export const Char = styled.div`
  position: relative;
  width: 20vmin;
  height: 20vmin;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  &:nth-child(1) div span {
    background-image: url('/fullname/svg/oka.svg');
  }
  &:nth-child(2) div span {
    background-image: url('/fullname/svg/zaki.svg');
  }
  &:nth-child(3) div span {
    background-image: url('/fullname/svg/ru.svg');
  }
  &:nth-child(4) div span {
    background-image: url('/fullname/svg/i.svg');
  }
  &:first-child {
    margin-top: 0;
  }
`;

export const CharItem = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-wrap: wrap;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

export const CharParts = styled.span<{
  cNum: number;
  dNum: number;
  sNum: number;
}>`
  display: block;
  width: 50%;
  height: 50%;
  background-size: 200% 200%;
  opacity: 0;

  &:nth-child(1) {
    background-position: left top;
  }
  &:nth-child(2) {
    background-position: right top;
  }
  &:nth-child(3) {
    background-position: left bottom;
  }
  &:nth-child(4) {
    background-position: right bottom;
  }

  animation: ${show} 1s cubic-bezier(0.01, 0.24, 0, 1)
      ${({ cNum, dNum, sNum }) =>
        (cNum - 3) * -0.4 + (dNum - 1) * -0.4 + (sNum - 3) * -0.1}s
      forwards,
    ${hidden} 1s cubic-bezier(0.93, 0.01, 0.99, 0.62)
      ${({ dNum, sNum }) => (dNum - 1) * -0.4 + (sNum - 3) * -0.1 + 3.6}s
      forwards;
`;
