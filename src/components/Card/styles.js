import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {
    height: 0;
  }

  to {
    height: 50px;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const FlipCard = styled.div`
  background-color: transparent;
  width: 100%;
  max-width: 320px;
  height: 200px;
  perspective: 1000px;
  display: flex;
  margin: auto;
  margin-bottom: 30px;

  &:hover {
    .flip-card-inner {
      transform: rotateY(180deg);
    }
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`;

export const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  height: 200px;
  background: ${({ theme }) => theme.palette.primary};
  border-radius: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 10px;

  div {
    min-height: 70px;

    img {
      margin-top: 20px;
      margin-left: 20px;
      width: 60px;
      font-weight: 800;
      font-size: 1.4em;
      color: #ccc;
    }

    .card-flag {
      margin-top: 20px;
      margin-left: 20px;
      width: 60px;
      font-weight: 800;
      font-size: 1.4em;
      color: #fff;
    }
  }

  .card-number {
    font-weight: 400;
    font-size: 1.1em;
    margin: 10px 20px;
    margin-top: 20px;
    color: #fff;
  }

  .card-expiration {
    font-weight: 400;
    font-size: 0.9em;
    margin: 0 20px;
    color: #fff;
  }

  .card-expiration-label {
    font-weight: normal;
    font-size: 6px;
    margin: 0 20px;
    color: #fff;
  }

  .card-holder {
    font-weight: 400;
    font-size: 0.9em;
    margin: 10px 20px;
    color: #fff;
    text-transform: uppercase;
  }
`;

export const CardBack = styled.div`
  background: ${({ theme }) => theme.palette.primary};
  color: #fff;
  transform: rotateY(180deg);
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 10px;

  .logo-back-card {
    width: 60px;
  }

  .black {
    background-color: #000;
    width: 100%;
    height: 40px;
  }

  .card-cvv {
    font-size: 1.2em;
    margin-right: -150px;
    margin-top: 20px;
    background-color: #eee;
    color: #000;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

export const SelectFlags = styled.div`
  display: ${(props) => (props.flagVisible === true ? 'flex' : 'none')};
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  animation: ${animation} 0.2s;

  .separator {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    height: 100%;
  }

  @media (max-width: 350px) {
    flex-direction: column;
    height: 100px;

    .separator {
      width: 100%;
      margin-bottom: 6px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const ButtonFlags = styled.button`
  width: 50%;
  height: 100%;
  border: 1.3px solid;
  border-color: #999;
  border-radius: 5px;
  margin: 0 3px;

  img {
    width: 35px;
  }
`;
