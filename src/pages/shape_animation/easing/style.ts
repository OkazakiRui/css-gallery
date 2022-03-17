import styled, { keyframes } from 'styled-components';

const showBar = keyframes`
  from {
    width: 0;
    background-color: #eee;
  }
  to {
    width: 330px;
    background-color: #1b9097;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Bar = styled.div`
  width: 300px;
  height: 50px;
  margin: 10px 0;
  background-color: #ccc;

  &:nth-child(1) {
    animation: ${showBar} 1s linear 0s forwards;
  }
  &:nth-child(2) {
    animation: ${showBar} 1s ease 0s forwards;
  }
  &:nth-child(3) {
    animation: ${showBar} 1s ease-in 0s forwards;
  }
  &:nth-child(4) {
    animation: ${showBar} 1s ease-out 0s forwards;
  }
  &:nth-child(5) {
    animation: ${showBar} 1s ease-in-out 0s forwards;
  }
  &:nth-child(6) {
    animation: ${showBar} 1s cubic-bezier(1, 0, 0, 0.99) 0s forwards;
  }
`;
