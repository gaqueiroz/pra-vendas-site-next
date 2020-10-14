import styled from 'styled-components';

export const StyledCheckbox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 22px;
  width: 22px;

  border-radius: 5px;
  border: 2px solid;
  border-color: ${(props) =>
    props.filled ? `${props.theme.palette.primary}` : '#999'};
  transition: 0.4s border-color;

  svg {
    opacity: ${(props) => (props.filled ? '1' : '0')};
    color: ${({ theme }) => theme.palette.primary};
    font-size: 15px;
    transition: 0.4s opacity;
  }
`;
