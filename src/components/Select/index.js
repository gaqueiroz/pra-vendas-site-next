import React, { useState } from 'react';

import { Container, Label, Content } from './styles';

function Select({ label, value, children, selectDisabled, width, ...rest }) {
  const [focus, setFocus] = useState(false);

  return (
    <Container selectDisabled={selectDisabled} width={width}>
      <Label focus={focus}>{label}</Label>
      <Content
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={value}
        focus={focus}
        {...rest}
      >
        {children}
      </Content>
    </Container>
  );
}

export default Select;
