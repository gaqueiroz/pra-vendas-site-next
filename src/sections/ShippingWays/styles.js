import styled from 'styled-components';

export const Container = styled.section`
  background: url("shipping-ways-background.png") no-repeat;
  background-position: bottom;
  background-size: cover;

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
  padding: 80px 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > strong {
    color: #fff;
    margin-bottom: 80px;
    font-size: 30px;
    text-align: right;
  }

  .shipping {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 40px;
    width: 100%;
    max-width: 550px;

    img {
      width: 50px;
      margin-left: 20px;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      h1 {
        color: #fff;
        font-size: 20px;
        white-space: nowrap;
      }

      p {
        color: #fff;
        font-size: 14px;
        text-align: right;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 430px) {
    .shipping {
      .text {
        h1 {
          font-size: 18px;
        }
      }
    }
  }
`;
