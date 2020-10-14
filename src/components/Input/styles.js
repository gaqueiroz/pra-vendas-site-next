import styled from 'styled-components';

export const StyledInput = styled.label`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 5px;
  font-size: 18px;
  color: ${(props) =>
    props.focus ? `${props.theme.palette.primary}` : '#666'};
`;

export const Content = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 30px;
  transition: border 0.1s;
  color: #444;
  font-size: 18px;
  height: 55px;

  border: ${(props) => (props.focus ? '2px solid' : '1px solid')};
  border-color: ${(props) =>
    props.focus ? `${props.theme.palette.primary}` : '#999'};
`;
