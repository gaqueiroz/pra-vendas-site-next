import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #e6e7e8;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 100px 0;
  max-width: 1300px;

  > span {
    display: flex;
    width: 100%;
    max-width: 1000px;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.palette.secondary.contrastText};
    text-align: center;
    font-size: 30px;
    margin-bottom: 100px;
    font-weight: bold;
  }

  @media (max-width: 1250px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.strong`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.palette.secondary.contrastText};
  text-align: center;
  font-size: 50px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 40px;
  }

  @media (max-width: 500px) {
    font-size: 35px;
  }

  @media (max-width: 420px) {
    font-size: 30px;
  }

  @media (max-width: 360px) {
    font-size: 26px;
  }
`;

export const PlansContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .header {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #fff;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
    padding: 30px;
    border-radius: 5px 5px 0 0;

    strong {
      font-size: 30px;
      color: #fff;
    }

    span {
      font-size: 18px;
      color: #fff;
    }
  }

  button {
    width: 100%;
    color: #fff;
    height: 15%;
    border-radius: 0 0 5px 5px;
    font-size: 25px;
    transition: 0.2s all;

    &:hover {
      padding-bottom: 5px;
      opacity: 1;
    }
  }

  @media (max-width: 1250px) {
    width: 80%;
    flex-direction: column;

    .separator {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      &:first-child {
        margin-bottom: 100px;
      }
    }
  }

  @media (max-width: 900px) {
    .separator {
      flex-direction: column;
    }
  }
`;

export const PlanBronze = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22%;
  height: 500px;
  min-width: 250px;

  .header,
  button {
    background: #8dd8f7;
  }

  @media (max-width: 1250px) {
    width: 45%;
  }

  @media (max-width: 900px) {
    margin-bottom: 60px;
    width: 60%;
    min-width: 330px;
  }

  @media (max-width: 500px) {
    min-width: 300px;
  }

  @media (max-width: 360px) {
    min-width: 250px;
  }
`;

export const PlanSilver = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22%;
  height: 500px;
  min-width: 250px;

  .header,
  button {
    background: #4788bc;
  }

  button {
    width: 100%;
    color: #fff;
  }

  @media (max-width: 1250px) {
    width: 45%;
  }

  @media (max-width: 900px) {
    width: 60%;
    min-width: 330px;
  }

  @media (max-width: 500px) {
    min-width: 300px;
  }

  @media (max-width: 360px) {
    min-width: 250px;
  }
`;

export const PlanGold = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22%;
  height: 500px;
  min-width: 250px;

  .header,
  button {
    background: #015089;
  }

  button {
    width: 100%;
    color: #fff;
  }

  @media (max-width: 1250px) {
    width: 45%;
  }

  @media (max-width: 900px) {
    margin-bottom: 60px;
    width: 60%;
    min-width: 330px;
  }

  @media (max-width: 500px) {
    min-width: 300px;
  }

  @media (max-width: 360px) {
    min-width: 250px;
  }
`;

export const PlanDiamond = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22%;
  height: 500px;
  min-width: 250px;

  .header,
  button {
    background: #072750;
  }

  button {
    width: 100%;
    color: #fff;
  }

  @media (max-width: 1250px) {
    width: 45%;
  }

  @media (max-width: 900px) {
    width: 60%;
    min-width: 330px;
  }

  @media (max-width: 500px) {
    min-width: 300px;
  }

  @media (max-width: 360px) {
    min-width: 250px;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 20%;
  padding: 10px 0;

  div {
    height: 70%;

    strong {
      font-size: 20px;
    }

    .big {
      font-size: 45px;
      margin: 0 1px;
    }
  }

  .relative {
    display: flex;
    width: 100%;
    height: 30%;
    position: relative;

    .best-selling {
      color: #fff;
      padding: 6px 15px;
      font-size: 16px;
      border-radius: 5px;
      border-bottom-right-radius: 0;
      position: absolute;
      right: -15px;
      bottom: -8px;
      background: ${({ theme }) => theme.palette.primary};

      &::after {
        content: '';
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #000;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        position: absolute;
        bottom: -8px;
        right: 1px;
      }
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 45%;

  .item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;

    &:last-child {
      margin-bottom: 40px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
    }

    span {
      margin: 10px;
      color: #717173;
    }
  }
`;
