import React, { useEffect } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import { goTo } from '../../utils/goTo';

import { Container } from './styles';

function Menu({ open, setOpen }) {
  useEffect(() => {
    if (open) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }
  }, [open]);

  function handleGoTo(id) {
    goTo(id);
    setOpen(false);
  }

  return (
    <Container open={open}>
      <button
        className="close-button"
        type="button"
        onClick={() => setOpen(false)}
      >
        <RiCloseLine />
      </button>
      <div>
        <button
          className="nav-button"
          type="button"
          onClick={() => handleGoTo('#integrations')}
        >
          INTEGRAÇÕES
        </button>
        <button
          className="nav-button"
          type="button"
          onClick={() => handleGoTo('#steps')}
        >
          COMO FUNCIONA
        </button>
        <button
          className="nav-button"
          type="button"
          onClick={() => handleGoTo('#plans')}
        >
          PLANOS
        </button>
        <button className="nav-button" type="button">
          FALE CONOSCO
        </button>
      </div>
    </Container>
  );
}

export default Menu;
