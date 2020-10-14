import styled from 'styled-components';

export const Container = styled.section`
  background: ${({ theme }) => theme.palette.primary};

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1360px;
  padding: 0 30px;

  display: flex;
  flex-direction: row;

  img {
    width: 450px;
    margin-bottom: -100px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 50px;

    h1 {
      color: #fff;
      font-size: 30px;
    }

    p {
      color: #fff;
      font-size: 15px;
      max-width: 480px;
    }

    span {
      color: #fff;
      font-size: 17px;
      font-family: bold;
    }

    .nav-buttons {
      width: 100%;

      display: flex;
      justify-content: center;

      .nav-button {
        height: 10.5px;
        width: 10.5px;
        border-radius: 50%;
        background: #eee;
        margin-right: 12px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    justify-content: center;

    img {
      display: none;
    }

    .content {
      padding: 80px 0;
      align-items: center;
      margin-left: 0;

      h1 {
        margin-bottom: 20px;
        text-align: center;
      }

      p {
        margin-bottom: 20px;
      }

      span {
        margin-bottom: 20px;
      }
    }
  }
`;
