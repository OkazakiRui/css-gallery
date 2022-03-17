import styled from 'styled-components';
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
`;
