import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  font-size: 19px;
  font-family: bold;
  margin-right: 30px;
  width: ${(props) => props.width};
  border-radius: 5px;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.outline &&
    css`
      background: ${({ theme }) => theme.palette.primary};
      color: #fff;
      padding: 8px 12px;
      margin-right: 0;
    `}
`;
