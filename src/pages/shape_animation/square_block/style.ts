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

export const Effect = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

  ${layoutMixin.pc} {
    width: 30vw;
    height: 30vw;
  }
  ${layoutMixin.sp} {
    width: 30vh;
    height: 30vh;
  }
`;

export const Item = styled.span<{ eNum: number; sNum: number }>`
  display: block;
  width: 50%;
  height: 50%;
  background-color: #ce9740;
  transform: scale(0);

  // 2 alternate で scale(0) → scale(1) → scale(0) となる
  animation: ${scale0to1} 0.3s ease
    ${({ eNum, sNum }) => eNum * 0.3 + (sNum + 1) * 0.1}s 2 alternate forwards;
`;
