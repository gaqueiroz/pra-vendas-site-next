import React from 'react';

import Button from '../../components/Button';

import { goTo } from '../../utils/goTo';

import { Container, Content } from './styles';

function Presentation() {
  return (
    <Container>
      <Content>
        <div className="content">
          <h1>Decole com seu</h1>
          <strong>Ecommerce!</strong>
          <p>
            Comece a vender seus produtos de forma rápida e segura usando o PRA
            VENDAS. Aqui você faz sua conta, cadastra seus produtos e sai
            vendendo. Escolha seu plano agora e tenha praticidade nas vendas
            aumentando seu lucro agora mesmo.
          </p>
          <Button outline onClick={() => goTo('#plans')}>
            CRIAR AGORA
          </Button>
        </div>
        <img src="rocket.png" className="rocket" alt="foguete" />
      </Content>
      <div className="line" />
      <img src="checkered-left.png" className="checkeredLeft checkered" alt="left" />
      <img
        src="checkered-right.png"
        className="checkeredRight checkered"
        alt="right"
      />
    </Container>
  );
}

export default Presentation;
