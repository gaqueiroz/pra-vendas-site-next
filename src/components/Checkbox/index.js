import React from 'react';
import { FaCheck } from 'react-icons/fa';

import { StyledCheckbox } from './styles';

function Checkbox({ filled, setFilled }) {
  return (
    <StyledCheckbox filled={filled} onClick={() => setFilled(!filled)}>
      <FaCheck />
    </StyledCheckbox>
  );
}

export default Checkbox;
