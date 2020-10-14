import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  position: absolute;

  z-index: 1;

  .line {
    width: 100%;
    height: 8px;
    background: ${({ theme }) => theme.palette.primary};
  }
`;

export const Content = styled.div`
  width: 100%; 
  max-width: 1360px; 
  padding: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    width: 200px;
  }

  .navbar {
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      display: flex;
      align-items: center;

      svg {
        color: ${({ theme }) => theme.palette.secondary};
        font-size: 30px;
      }
    }
  }
`;
