import React from 'react';

import { useMedia } from 'use-media';

import Button from '../../components/Button';

import { goTo } from '../../utils/goTo';

import { Container, Content } from './styles';

function Marketplaces() {
  const maxWidth770 = useMedia({ maxWidth: '770px' });

  return (
    <Container id="integrations">
      <Content>
        <div className="header">
          {maxWidth770 ? (
            <>
              <span>
                COM O PRAVENDAS OS SEUS PRODUTOS SÃO VENDIDOS NAS PRINCIPAIS
                MARKETPLACES
              </span>
            </>
          ) : (
            <>
              <span>COM O PRAVENDAS OS SEUS PRODUTOS SÃO VENDIDOS</span>
              <div className="text">
                <span>NAS PRINCIPAIS</span>
                <strong>MARKETPLACES</strong>
              </div>
            </>
          )}
        </div>
        <div className="content">
        <div className="top">
            <img src="mercadolivre.png" alt="mercadolivre" />
            <img src="casasbahia.png" alt="casasbahia" />
            <img src="submarino.png" alt="submarino" />
            <img src="soubarato.png" alt="soubarato" />
          </div>
          <div className="bottom">
            <img src="americanas.png" alt="americanas" />
            <img src="extra.png" alt="extra" />
            <img src="shoptime.png" alt="shoptime" />
          </div>
        </div>
        <div className="footer">
          <strong>NÃO PERCA TEMPO</strong>
          <span>CADASTRE-SE AGORA MESMO!</span>
          <Button outline onClick={() => goTo('#plans')}>
            CRIAR SUA LOJA
          </Button>
        </div>
      </Content>
    </Container>
  );
}

export default Marketplaces;
