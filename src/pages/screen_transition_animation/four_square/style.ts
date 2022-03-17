import styled from 'styled-components';
import { fadein, fadeout } from 'styles/keyframes';
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

  animation: ${fadeout} 0.1s linear 0.6s 5 alternate forwards;
`;

export const Item = styled.div<{ num: number }>`
  background-color: #283c5f;
  opacity: 0;

  ${layoutMixin.pc} {
    width: 25%;
    height: 100%;
  }
  ${layoutMixin.sp} {
    width: 100%;
    height: 25%;
  }
  animation: ${fadein} 0.05s linear ${({ num }) => num * 0.1}s 3 alternate
    forwards;
`;
