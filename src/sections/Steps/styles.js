import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;

  position: relative;
  min-height: 100vh;
  background: #fff;
  padding: 0 30px;

  .checkered {
    position: absolute;

    @media (max-width: 1100px) {
      display: none;
    }
  }

  .checkeredLeft {
    left: -2px;
    bottom: -1px;
    width: 16%;
  }

  .checkeredRight {
    position: absolute;
    right: 0;
    top: -47px;
    width: 14%;
    transform: rotate(270deg);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1360px;
  padding: 50px 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    width: 100%;
    max-width: 820px;
    font-size: 26px;
  }

  .steps {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 100px;

    div {
      display: flex;
      flex-direction: row;

      .step-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border-radius: 5px;

        width: 300px;
        padding: 20px;

        .header {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          img {
            width: 40px;
          }

          span {
            font-family: bold;
            color: #fff;
            font-size: 30px;
          }
        }

        .title {
          text-align: center;
          color: #fff;
          font-size: 24px;
        }

        .description {
          text-align: center;
          font-size: 14px;
          color: #fff;
        }
      }

      .t01 {
        position: relative;
        z-index: 99999999999;

        &:after {
          content: '';
          border-left: 17px solid transparent;
          border-right: 17px solid transparent;
          border-bottom: 25px solid ${({ theme }) => theme.palette.primary};
          transform: rotate(180deg);

          position: absolute;
          bottom: -25px;
        }
      }

      .t02 {
        position: relative;

        &:after {
          content: '';
          border-left: 17px solid transparent;
          border-right: 17px solid transparent;
          border-bottom: 25px solid #a8cf45;

          position: absolute;
          top: -25px;
        }
      }

      .t03 {
        position: relative;

        &:after {
          content: '';
          border-left: 17px solid transparent;
          border-right: 17px solid transparent;
          border-bottom: 25px solid #d72a87;
          transform: rotate(180deg);

          position: absolute;
          bottom: -25px;
        }
      }

      .art-img {
        height: 230px;
        width: 300px;
        border-radius: 5px;
      }
    }

    .first {
      margin-bottom: 15px;
    }
  }

  .steps-responsive {
    .step {
      display: flex;
      flex-direction: row;
      justify-content: center;

      margin-bottom: 15px;
    }

    div {
      display: flex;
      flex-direction: row;

      .step-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border-radius: 5px;

        width: 300px;
        padding: 20px;

        .header {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          img {
            width: 40px;
          }

          span {
            font-family: bold;
            color: #fff;
            font-size: 30px;
          }
        }

        .title {
          text-align: center;
          color: #fff;
          font-size: 24px;
        }

        .description {
          text-align: center;
          font-size: 14px;
          color: #fff;
        }
      }

      .t01 {
        position: relative;
        margin-right: 15px;

        &:after {
          content: '';
          border-left: 17px solid transparent;
          border-right: 17px solid transparent;
          border-bottom: 25px solid ${({ theme }) => theme.palette.primary};
          transform: rotate(90deg);

          position: absolute;
          right: -132px;
          top: 0;
          bottom: 0;
        }
      }

      .t02 {
        position: relative;
        margin-left: 15px;

        &:after {
          content: '';
          border-left: 17px solid transparent;
          border-right: 17px solid transparent;
          border-bottom: 25px solid #a8cf45;
          transform: rotate(270deg);

          position: absolute;
          left: -132px;
          top: 0;
          bottom: 0;
        }
      }

      .t03 {
        position: relative;
        margin-right: 15px;

        &:after {
          content: '';
          border-left: 17px solid transparent;
          border-right: 17px solid transparent;
          border-bottom: 25px solid #d72a87;
          transform: rotate(90deg);

          position: absolute;
          right: -132px;
          top: 0;
          bottom: 0;
        }
      }

      .art-img {
        height: 230px;
        width: 300px;
        border-radius: 5px;
      }
    }
  }

  .button {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 30px;
  }

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 80px 0;

    > h1 {
      text-align: center !important;
      margin-bottom: 50px;
    }

    .button {
      justify-content: center;
    }
  }

  @media (max-width: 700px) {
    .step-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      width: 300px;
      height: 220px;
      padding: 20px;
      border-radius: 5px;

      margin-bottom: 15px;

      .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        img {
          width: 40px;
        }

        span {
          font-family: bold;
          color: #fff;
          font-size: 30px;
        }
      }

      .title {
        text-align: center;
        color: #fff;
        font-size: 24px;
      }

      .description {
        text-align: center;
        font-size: 14px;
        color: #fff;
      }
    }
  }
`;
