import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  background: #ecf4f6;

  .triangle {
    position: absolute;
    width: 23%;
  }

  .triangle-bottom {
    left: 0;
    bottom: 0;
    transform: rotate(180deg);
  }

  .triangle-top {
    right: 0;
    top: 0;
  }

  @media (max-width: 1100px) {
    .triangle {
      display: none;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1360px;
  padding: 50px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  z-index: 1;

  .header {
    width: 100%;
    margin-right: auto;

    display: flex;
    flex-direction: column;

    span {
      font-size: 23px;
      font-family: bold;
      line-height: 30px;
    }

    .text {
      > span {
        margin-right: 8px;
      }

      strong {
        font-size: 30px;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 50px 0;

    img {
      width: 22%;
      height: 100%;
      padding: 0 8px;
    }

    div {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .bottom {
      margin-top: -10%;
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: auto;

    strong {
      font-size: 40px;
    }

    span {
      font-size: 20px;
      font-family: bold;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 770px) {
    .header {
      span {
        text-align: center;
        font-size: 25px;
      }
    }

    .footer {
      margin: 0 auto;

      align-items: center;

      strong {
        text-align: center;
        font-size: 35px;
      }

      span {
        text-align: center;
      }
    }
  }
`;
