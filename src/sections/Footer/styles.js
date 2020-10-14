import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {
    height: 0;
    opacity: 0;
  }

  to {
    height: 100px;
    opacity: 1;
  }
`;

export const Container = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: #fff;

  .line {
    position: absolute;
    bottom: 0;

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
  flex-direction: column;

  .navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    .column {
      display: flex;
      flex-direction: column;

      button {
        font-size: 14px;
        width: 100%;
        text-align: left;
        margin-bottom: 5px;
      }

      .principal-button {
        font-size: 15px;
        font-family: bold;
      }
    }
  }

  .navbar-responsive {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;

    .column {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;

      .animation {
        animation: ${animation} 1s;

        button {
          font-size: 14px;
          width: 100%;
          text-align: center;
          margin-bottom: 5px;
        }
      }

      .principal-button {
        font-size: 15px;
        font-family: bold;

        display: flex;

        flex-direction: row;
        align-items: center;
        justify-content: center;

        svg {
          margin-left: 5px;
        }
      }
    }
  }

  .logos {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    .pravendas {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      img {
        width: 150px;
      }

      span {
        font-size: 13px;
      }
    }

    .aquisi {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 115px;
      }
    }
  }

  @media (max-width: 800px) {
    .logos {
      flex-direction: column;
      align-items: center;

      .pravendas {
        margin-bottom: 20px;
        align-items: center;
      }
    }
  }
`;
