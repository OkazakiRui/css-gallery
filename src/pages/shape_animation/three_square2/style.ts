import styled, { keyframes } from 'styled-components';
import { layoutMixin } from 'styles/mixin';

const show = keyframes`
from {
  transform: rotate(-90deg);
}
to {
  transform: rotate(0deg);
}
`;
const hidden = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(90deg);
}
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${layoutMixin.pc} {
    flex-wrap: wrap;
  }
  ${layoutMixin.sp} {
    flex-direction: column;
  }
`;

export const Effect = styled.div<{ num: number }>`
  position: relative;
  overflow: hidden;

  ${layoutMixin.pc} {
    width: 30vw;
    height: 30vw;
  }
  ${layoutMixin.sp} {
    width: 30vh;
    height: 30vh;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: left bottom;
    transform: rotate(-90deg);
  }
  &::before {
    background-color: #4aa9a4;
  }
  &::after {
    background-color: #fff;
  }

  // show 緑 → 白
  // hidden 白 → 緑
  &::before {
    animation: ${show} 0.4s cubic-bezier(1, 0, 0, 1)
        ${({ num }) => (num + 1) * 0.2}s forwards,
      ${hidden} 0.4s cubic-bezier(1, 0, 0, 1)
        ${({ num }) => (num + 1) * 0.2 + 0.6}s forwards;
  }
  &::after {
    animation: ${show} 0.4s cubic-bezier(1, 0, 0, 1)
        ${({ num }) => (num + 1) * 0.2 + 0.1}s forwards,
      ${hidden} 0.4s cubic-bezier(1, 0, 0, 1)
        ${({ num }) => (num + 1) * 0.2 + 0.5}s forwards;
  }
`;
