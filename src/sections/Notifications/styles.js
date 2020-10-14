import styled from 'styled-components';

export const Container = styled.section`
  background-image: url("notifications-background.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  padding: 100px 0;

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1360px;
  padding: 0 30px;

  h1 {
    color: #fff;
    font-size: 40px;
    text-align: center;
  }

  p {
    color: #fff;
    font-size: 26px;
    max-width: 580px;
    text-align: center;
    margin: 60px 0;
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
`;
