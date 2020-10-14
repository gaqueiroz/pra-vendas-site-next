import React from 'react';

import { Container, Content } from './styles';

function ShippingWays() {
  return (
    <Container>
      <div className="line" />
      <Content>
        <strong>
          MEIOS DE ENVIO.
          <br />O que você precisa saber está aqui.
        </strong>
        <div className="shipping">
          <div className="text">
            <h1>Cálculo de frete para envio.</h1>
            <p>
              Serão seus próprios clientes que iram calcular o valor do frete ao
              digitar o CEP
            </p>
          </div>
          <img src="icon-one.png" alt="icon" />
        </div>
        <div className="shipping">
          <div className="text">
            <h1>Você dita as regras de envio.</h1>
            <p>
              Configure os prazos e custos extras para uma determinada entrega.
            </p>
          </div>
          <img src="icon-two.png" alt="icon" />
        </div>
        <div className="shipping">
          <div className="text">
            <h1>Impressão de etiquetas.</h1>
            <p>
              Imprima com facilidade o modelo padrão de etiqueta contendo o
              numero do pedido e dados do seu cliente.
            </p>
          </div>
          <img src="icon-three.png" alt="icon" />
        </div>
        <div className="shipping">
          <div className="text">
            <h1>Integração com os Correios.</h1>
            <p>
              Transmita facilmente a PLP - Pré lista de postagem, e deixe o
              resto do trabalho para os correios.
            </p>
          </div>
          <img src="icon-four.png" alt="icon" />
        </div>
      </Content>
    </Container>
  );
}

export default ShippingWays;
