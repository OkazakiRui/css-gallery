import { keyframes } from 'styled-components';

export const scale0to1 = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeout = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const turn1 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
`;
