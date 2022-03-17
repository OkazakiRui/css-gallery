import styled from 'styled-components';
import { fadeout, scale0to1, turn1 } from 'styles/keyframes';
import { layoutMixin } from 'styles/mixin';

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
  background-color: black;

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
    transform: scale(0);
  }
  &::before {
    background-color: #c45c66;
  }
  &::after {
    background-color: #fff;
  }

  animation: ${turn1} 0.5s ease ${({ num }) => num * 0.2 + 0.1}s forwards,
    ${fadeout} 0.01s ease ${({ num }) => num * 0.2 + 0.6}s forwards;
  &::before {
    animation: ${scale0to1} 0.4s ease ${({ num }) => num * 0.2 + 0.1}s forwards;
  }
  &::after {
    animation: ${scale0to1} 0.4s ease ${({ num }) => num * 0.2 + 0.1}s forwards;
  }
`;
