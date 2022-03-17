import styled from 'styled-components';
import { scale0to1 } from 'styles/keyframes';
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
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform: scale(0);
  }
  &::before {
    background-color: #c3ce5f;
    z-index: 1;
  }
  &::after {
    background-color: #fff;
    z-index: 2;
  }
  &::before {
    animation: ${scale0to1} 0.4s ease ${({ num }) => num * 0.1}s forwards;
  }
  &::after {
    animation: ${scale0to1} 0.4s ease ${({ num }) => num * 0.1 + 0.1}s forwards;
  }
`;
