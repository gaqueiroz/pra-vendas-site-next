import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 2px solid #fff;
  border-top-color: transparent;
  animation: ${spin} 0.5s infinite linear;
`;
