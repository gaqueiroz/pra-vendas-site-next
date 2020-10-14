import styled from 'styled-components';

export const Container = styled.label`
  width: ${({ width }) => width};
  display: ${(props) => (props.selectDisabled ? 'none' : 'flex')};
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.span`
  width: 100%;
  margin-bottom: 5px !important;
  font-size: 18px;
  color: ${(props) =>
    props.focus ? `${props.theme.palette.primary}` : '#666'};
`;

export const Content = styled.select`
  width: 100%;
  padding: 15px;
  border-radius: 50px;
  -webkit-appearance: none;
  font-size: 18px;
  color: #444;
  border: ${(props) => (props.focus ? '2px solid' : '1px solid')};
  border-color: ${(props) =>
    props.focus ? `${props.theme.palette.primary}` : '#999'};
  height: 55px;

  option {
    font-size: 18px;
    padding: 10px !important;
    margin-bottom: 10px;
    border-radius: 50px;
    color: #444;
  }
`;
