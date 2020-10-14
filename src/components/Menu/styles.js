import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: fixed;
  background: rgba(0, 0, 0, 0.97);
  padding: 20px;
  z-index: 100;
  justify-content: center;
  align-items: center;

  .close-button {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 15px;
    margin-top: 22px;

    svg {
      color: #fff;
      height: 45px;
      width: 45px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    height: 35%;

    .nav-button {
      color: #fff;
      margin-bottom: 10px;
      font-size: 25px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
