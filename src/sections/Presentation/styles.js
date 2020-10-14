import styled from 'styled-components';

export const Container = styled.section`
  padding: 108px 30px 0 30px;
  position: relative;

  display: flex;
  justify-content: center;
  min-height: 100vh;

  background: #fff;

  .line {
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 8px;
    background: ${({ theme }) => theme.palette.primary};
  }

  .checkered {
    position: absolute;
    bottom: 6.5px;
  }

  .checkeredLeft {
    left: -2px;
    width: 13%;
  }

  .checkeredRight {
    right: 0;
    width: 11%;
  }

  @media (max-width: 1100px) {
    .checkered {
      display: none;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  height: calc(100vh - 200px);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  z-index: 1;

  .content {
    h1 {
      font-size: 50px;
      text-transform: uppercase;
      white-space: nowrap;
    }

    strong {
      font-size: 85px;
      text-transform: uppercase;
      line-height: 70px;
    }

    p {
      width: 100%;
      max-width: 560px;
      margin: 20px 0;
      font-size: 18px;
      line-height: 22px;
    }
  }

  .rocket {
    height: 500px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    height: auto;
    padding: 30px 0 80px 0;

    .content {
      margin-bottom: 50px;
      text-align: center;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 630px) {
    .content {
      h1 {
        font-size: 40px;
      }

      strong {
        font-size: 70px;
      }
    }
  }

  @media (max-width: 510px) {
    .content {
      strong {
        font-size: 50px;
        line-height: 60px;
      }
    }
  }

  @media (max-width: 420px) {
    .content {
      h1 {
        font-size: 35px;
      }

      strong {
        font-size: 40px;
        line-height: 50px;
      }

      p {
        font-size: 16px;
      }
    }
  }
`;
