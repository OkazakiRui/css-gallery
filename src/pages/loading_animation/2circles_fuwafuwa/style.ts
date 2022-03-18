import styled, { keyframes } from 'styled-components';
import { layoutMixin } from 'styles/mixin';

export const Wrap = styled.div`
  position: absolute;
  inset: 0;

  ${layoutMixin.pc} {
    flex-wrap: wrap;
  }
  ${layoutMixin.sp} {
    flex-direction: column;
  }

  background: #a18ab1;
`;

const fuwafuwa = keyframes`
0% {
  opacity:0.7;
  transform: scale(0);
}
100% {
  opacity:0.3;
  transform: scale(1);
}
`;

export const Item = styled.span<{ num: number }>`
  width: 80px;
  height: 80px;
  background-color: #faffe2;
  border-radius: 50%;
  position: absolute;
  opacity: 0.7;
  transform: scale(0);
  top: calc(50% - 40px);
  left: calc(50% - 40px);
  animation: ${fuwafuwa} 1s ease-in-out infinite alternate;
  animation-delay: ${({ num }) => num * -1}s;
`;
