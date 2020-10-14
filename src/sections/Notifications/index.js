import React from 'react';

import { Container, Content } from './styles';

function Notifications() {
  return (
    <Container>
      <Content>
        <h1>Breaking News!</h1>
        <p>
          71% dos brasileiros aumentaram compra online após Covid-19, aponta
          pesquisa
        </p>
        <div className="nav-buttons">
          <button className="nav-button" />
          <button className="nav-button" />
          <button className="nav-button" />
        </div>
      </Content>
    </Container>
  );
}

export default Notifications;
