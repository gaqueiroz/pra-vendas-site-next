import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useMedia } from 'use-media';

import Button from '../Button';
import Menu from '../Menu';

import { goTo } from '../../utils/goTo';

import { Container, Content } from './styles';

function Header() {
  const maxWidth1100 = useMedia({ maxWidth: '1100px' });

  const [open, setOpen] = useState(false);

  return (
    <>
      <Menu open={open} setOpen={setOpen} />
      <Container>
        <div className="line" />
        <Content>
        <img src="logo.png" alt="Pra Vendas" /> 

          <div className="navbar">
            {maxWidth1100 ? (
              <button type="button" onClick={() => setOpen(true)}>
                <GiHamburgerMenu />
              </button>
            ) : (
              <>
                <Button onClick={() => goTo('#integrations')}>
                  Integrações
                </Button>
                <Button onClick={() => goTo('#steps')}>Como funciona</Button>
                <Button onClick={() => goTo('#plans')}>Planos</Button>
                <Button>Fale Conosco</Button>
                <Button outline>Area do Cliente </Button>
              </>
            )}
          </div>
        </Content>
      </Container>
    </>
  );
}

export default Header;
