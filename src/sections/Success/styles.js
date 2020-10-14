import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  position: relative;

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
  padding: 50px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    max-width: 400px;
    font-size: 39px;
    margin-bottom: 100px;
    color: ${({ theme }) => theme.palette.primary};
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p {
      text-align: right;
      max-width: 520px;
      margin-bottom: 40px;
      font-size: 17px;
    }

    button {
      z-index: 1;
    }

    .images {
      margin-top: -25px;

      img {
        &:first-child {
          width: 450px;
          height: 300px;
          margin-right: -60px;
        }

        &:last-child {
          width: 300px;
          height: 225px;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
      max-width: 700px;
      margin-bottom: 50px;
    }

    .content {
      align-items: center;

      p {
        text-align: center;
      }

      button {
        margin-bottom: 50px;
      }
    }
  }

  @media (max-width: 770px) {
    .images {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    }

    img {
      &:first-child {
        width: 60% !important;
        height: 100%;
        margin-right: 0 !important;
      }

      &:last-child {
        width: 45% !important;
        height: 100%;
      }
    }
  }

  @media (max-width: 600px) {
    .images {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    }

    img {
      &:first-child {
        height: 90% !important;
      }

      &:last-child {
        height: 85% !important;
      }
    }
  }
`;
