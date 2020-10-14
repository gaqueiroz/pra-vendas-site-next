import React from 'react';

import { StyledButton } from './styles';

function Button({ outline = false, children, width, ...rest }) {
  return (
    <StyledButton outline={outline} width={width} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
