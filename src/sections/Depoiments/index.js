import React from 'react';

import { Container, Content } from './styles';

function Depoiments() {
  return (
    <Container>
      <Content>
        <img src="depoiments-art.png" alt="img" />
        <div className="content">
          <h1>Inspirações que vieram de resultados!</h1>
          <p>
            No primeiro ano da minha empresa usando o PRA VENDAS só tive bons
            resultados, o crescimento atribuído as boas práticas de utilização
            fizeram com que aumentássemos em 70% o faturamento do nosso negócio.
          </p>
          <span>Tiburcia, Loja de tecidos</span>
          <div className="nav-buttons">
            <button className="nav-button" />
            <button className="nav-button" />
            <button className="nav-button" />
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Depoiments;
