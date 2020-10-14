import React, { useState } from 'react';

import { StyledInput, Label, Content } from './styles';

function Input({ label, width, onBlur, onFocus, ...rest }) {
  const [focus, setFocus] = useState();

  function handleBlur() {
    setFocus(false);
    if (onBlur) {
      onBlur();
    }
  }

  function handleFocus() {
    setFocus(true);
    if (onFocus) {
      onFocus();
    }
  }

  return (
    <StyledInput width={width}>
      <Label focus={focus}>{label}</Label>
      <Content
        focus={focus}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </StyledInput>
  );
}

export default Input;
