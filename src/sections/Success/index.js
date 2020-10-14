import React from 'react';

import Button from '../../components/Button';

import { goTo } from '../../utils/goTo';

import { Container, Content } from './styles';

function Success() {
  return (
    <Container>
      <div className="line" />
      <Content>
        <h1>SOMOS PARA TODOS E DE TODOS OS TAMANHOS</h1>
        <div className="content">
          <p>
            Não importa se você é pequeno ou ainda engatinha para obter o
            sucesso. Vem com a gente e descubra como é fácil alcançar os
            resultados desejados.
          </p>
          <Button outline width="250px" onClick={() => goTo('#plans')}>
            TESTAR GRATIS 30 DIAS
          </Button>
          <div className="images">
            <img src="baby.png" alt="baby" />
            <img src="computer.png" alt="computer" />
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Success;
