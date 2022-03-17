import styled, { keyframes } from 'styled-components';

const show = keyframes`
from {
  transform: translateY(calc(100% + 25.5vw));
}
to {
  transform: translateY(0);
}
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const Item = styled.div<{ num: number }>`
  position: absolute;
  inset: 0;
  transform: translateY(calc(100% + 25.5vw));

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -25.5vw;
    left: 0;
    width: 0;
    height: 0;
    border-bottom: solid 25.5vw transparent;
    border-left: solid 50vw transparent;
    border-right: solid 50vw transparent;
  }

  &:nth-child(1) {
    background-color: #c3ce5f;
    &::after {
      border-bottom-color: #c3ce5f;
    }
  }
  &:nth-child(2) {
    background-color: #c45c66;
    &::after {
      border-bottom-color: #c45c66;
    }
  }
  &:nth-child(3) {
    background-color: #283c5f;
    &::after {
      border-bottom-color: #283c5f;
    }
  }
  &:nth-child(4) {
    background-color: #fff;
    &::after {
      border-bottom-color: #fff;
    }
  }

  animation: ${show} 0.7s cubic-bezier(0.97, 0.01, 0, 0.97)
    ${({ num }) => num * 0.2}s forwards;
`;
