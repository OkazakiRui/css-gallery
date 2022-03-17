import styled, { keyframes } from 'styled-components';
import { layoutMixin } from 'styles/mixin';

const show = keyframes`
from {
  transform: translateY(100vh);
}
to {
  transform: translateY(0vh);
}
`;
const sway = keyframes`
0% {
  transform: rotate(0deg);
}
30% {
  transform: rotate(-15deg);
}
70% {
  transform: rotate(15deg);
}
100% {
  transform: rotate(0deg);
}
`;

export const Wrap = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;

  ${layoutMixin.pc} {
    flex-wrap: wrap;
  }
  ${layoutMixin.sp} {
    flex-direction: column;
  }
`;

export const Item = styled.div<{ num: number }>`
  position: absolute;
  top: 0;
  left: -50%;
  width: 200%;
  height: 200%;
  transform: translateY(100vh);

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
  }
  &:nth-child(1)::after {
    background-color: #df708e;
  }
  &:nth-child(2)::after {
    background-color: #e1c96a;
  }
  &:nth-child(3)::after {
    background-color: #4dadad;
  }
  &:nth-child(4)::after {
    background-color: #fff;
  }

  animation: ${show} 0.6s cubic-bezier(0.85, 0.01, 0.17, 1)
    ${({ num }) => num * 0.2 + 1}s forwards;
  &::after {
    animation: ${sway} 0.6s ease-in-out ${({ num }) => num * 0.2 + 1}s forwards;
  }
`;
