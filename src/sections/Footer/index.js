import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

import { useMedia } from 'use-media';

import { Container, Content } from './styles';

function Footer() {
  const [open, setOpen] = useState({
    pravendas: false,
    plans: false,
    attendance: false,
    resources: false,
  });

  const maxWidth800 = useMedia({ maxWidth: '800px' });

  return (
    <Container>
      <div className="line" />
      <Content>
        {maxWidth800 ? (
          <div className="navbar-responsive">
            <div className="column">
              <button
                className="principal-button"
                onClick={() => setOpen({ ...open, pravendas: !open.pravendas })}
              >
                PRAVENDAS
                {open.pravendas ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </button>
              {open.pravendas && (
                <div className="animation">
                  <button>Sobre</button>
                  <button>Blog</button>
                  <button>Vagas</button>
                  <button>Investidores</button>
                </div>
              )}
            </div>
            <div className="column">
              <button
                className="principal-button"
                onClick={() => setOpen({ ...open, plans: !open.plans })}
              >
                PLANOS
                {open.plans ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </button>
              {open.plans && (
                <div className="animation">
                  <button>Planos</button>
                  <button>Licença</button>
                  <button>Produtos</button>
                  <button>Integrações</button>
                </div>
              )}
            </div>
            <div className="column">
              <button
                className="principal-button"
                onClick={() =>
                  setOpen({ ...open, attendance: !open.attendance })
                }
              >
                ATENDIMENTO
                {open.attendance ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </button>
              {open.attendance && (
                <div className="animation">
                  <button>Quero ser cliente</button>
                  <button>Sou cliente</button>
                  <button>Ouvidoria</button>
                  <button>Central de ajuda</button>
                </div>
              )}
            </div>
            <div className="column">
              <button
                className="principal-button"
                onClick={() => setOpen({ ...open, resources: !open.resources })}
              >
                RECURSOS
                {open.resources ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </button>
              {open.resources && (
                <div className="animation">
                  <button>Contrato</button>
                  <button>Desenvolvedores</button>
                  <button>Relatórios Ouvidoria</button>
                  <button>Segurança</button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="navbar">
            <div className="column">
              <button className="principal-button">PRAVENDAS</button>
              <button>Sobre</button>
              <button>Blog</button>
              <button>Vagas</button>
              <button>Investidores</button>
            </div>
            <div className="column">
              <button className="principal-button">PLANOS</button>
              <button>Planos</button>
              <button>Licença</button>
              <button>Produtos</button>
              <button>Integrações</button>
            </div>
            <div className="column">
              <button className="principal-button">ATENDIMENTO</button>
              <button>Quero ser cliente</button>
              <button>Sou cliente</button>
              <button>Ouvidoria</button>
              <button>Central de ajuda</button>
            </div>
            <div className="column">
              <button className="principal-button">RECURSOS</button>
              <button>Contrato</button>
              <button>Desenvolvedores</button>
              <button>Relatórios Ouvidoria</button>
              <button>Segurança</button>
            </div>
          </div>
        )}
        <div className="logos">
          <div className="pravendas">
            <img src="logo.png" alt="Pra Vendas" />
          </div>
          <div className="aquisi">
            <img src="aquisi-logo.png" alt="Aquisi" />
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Footer;
