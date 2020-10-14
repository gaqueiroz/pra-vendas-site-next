import React from 'react';

import { useMedia } from 'use-media';

import Button from '../../components/Button';

import theme from '../../styles/theme';
import { goTo } from '../../utils/goTo';

import { Container, Content } from './styles';

function Steps() {
  const maxWidth1100 = useMedia({ maxWidth: '1100px' });
  const maxWidth700 = useMedia({ maxWidth: '700px' });

  return (
    <Container id="steps">
      <Content>
        <h1>
          SABEMOS QUE VOCÊ NÃO PODE ERRAR, E POR ISSO, CRIAMOS A PLATAFORMA MAIS
          SIMPLES E DINAMICA PARA VOCÊ COMEÇAR A VENDER O SEUS PRODUTOS AGORA
          MESMO.
        </h1>
        {maxWidth1100 ? (
          maxWidth700 ? (
            <>
              <div
                className="step-text t01"
                style={{
                  background: `${theme.palette.primary}`,
                }}
              >
                <div className="header">
                  <img src="step-icon-one.png" alt="img" />
                  <span>01</span>
                </div>
                <h1 className="title">Primeiros passos</h1>
                <p className="description">
                  Veja como é fácil, escolha o melhor plano,faça o cadastro da
                  sua empresa e informe o seu domínio de sucesso.
                </p>
              </div>
              <div className="middle-step step">
                <div
                  className="step-text t02"
                  style={{ background: '#A8CF45' }}
                >
                  <div className="header">
                    <img src="step-icon-two.png" alt="img" />
                    <span>02</span>
                  </div>
                  <h1 className="title">Cadastro de produtos</h1>
                  <p className="description">
                    Depois de criar sua loja tenha acesso a plataforma de
                    cadastro de produtos, uma ferramenta muito intuitiva e
                    dinâmica para o seu dia a dia.
                  </p>
                </div>
              </div>
              <div className="last-step step">
                <div
                  className="step-text t03"
                  style={{ background: '#D72A87' }}
                >
                  <div className="header">
                    <img src="step-icon-three.png" alt="img" />
                    <span>03</span>
                  </div>
                  <h1 className="title">Começe a Vender</h1>
                  <p className="description">
                    Defina as integrações que mais se encaixam como
                    transportadores e os meios de pagamentos. E pronto, seus
                    produtos estão em evidência para todo brasil.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="steps-responsive">
              <div className="first-step step">
                <div
                  className="step-text t01"
                  style={{
                    background: `${theme.palette.primary}`,
                  }}
                >
                  <div className="header">
                    <img src="step-icon-one.png" alt="img" />
                    <span>01</span>
                  </div>
                  <h1 className="title">Primeiros passos</h1>
                  <p className="description">
                    Veja como é fácil, escolha o melhor plano,faça o cadastro da
                    sua empresa e informe o seu domínio de sucesso.
                  </p>
                </div>
                <img src="art-one.png" className="art-img" alt="img" />
              </div>

              <div className="middle-step step">
                <img src="art-two.png" className="art-img" alt="img" />
                <div
                  className="step-text t02"
                  style={{ background: '#A8CF45' }}
                >
                  <div className="header">
                    <img src="step-icon-two.png" alt="img" />
                    <span>02</span>
                  </div>
                  <h1 className="title">Cadastro de produtos</h1>
                  <p className="description">
                    Depois de criar sua loja tenha acesso a plataforma de
                    cadastro de produtos, uma ferramenta muito intuitiva e
                    dinâmica para o seu dia a dia.
                  </p>
                </div>
              </div>

              <div className="last-step step">
                <div
                  className="step-text t03"
                  style={{ background: '#D72A87' }}
                >
                  <div className="header">
                    <img src="step-icon-three.png" alt="img" />
                    <span>03</span>
                  </div>
                  <h1 className="title">Começe a Vender</h1>
                  <p className="description">
                    Defina as integrações que mais se encaixam como
                    transportadores e os meios de pagamentos. E pronto, seus
                    produtos estão em evidência para todo brasil.
                  </p>
                </div>
                <img src="art-three.png" className="art-img" alt="img" />
              </div>
            </div>
          )
        ) : (
          <div className="steps">
            <div className="first">
              <div
                className="step-text t01"
                style={{
                  background: `${theme.palette.primary}`,
                }}
              >
                <div className="header">
                  <img src="step-icon-one.png" alt="img" />
                  <span>01</span>
                </div>
                <h1 className="title">Primeiros passos</h1>
                <p className="description">
                  Veja como é fácil, escolha o melhor plano,faça o cadastro da
                  sua empresa e informe o seu domínio de sucesso.
                </p>
              </div>

              <img
                src="art-two.png"
                className="art-img"
                alt="img"
                style={{ margin: '0 15px' }}
              />

              <div className="step-text t03" style={{ background: '#D72A87' }}>
                <div className="header">
                  <img src="step-icon-three.png" alt="img" />
                  <span>03</span>
                </div>
                <h1 className="title">Começe a Vender</h1>
                <p className="description">
                  Defina as integrações que mais se encaixam como
                  transportadores e os meios de pagamentos. E pronto, seus
                  produtos estão em evidência para todo brasil.
                </p>
              </div>
            </div>

            <div className="last">
              <img src="art-one.png" className="art-img" alt="img" />

              <div
                className="step-text t02"
                style={{ background: '#A8CF45', margin: '0 15px' }}
              >
                <div className="header">
                  <img src="step-icon-two.png" alt="img" />
                  <span>02</span>
                </div>
                <h1 className="title">Cadastro de produtos</h1>
                <p className="description">
                  Depois de criar sua loja tenha acesso a plataforma de cadastro
                  de produtos, uma ferramenta muito intuitiva e dinâmica para o
                  seu dia a dia.
                </p>
              </div>

              <img src="art-three.png" className="art-img" alt="img" />
            </div>
          </div>
        )}
        <div className="button">
          <Button outline width="200px" onClick={() => goTo('#plans')}>
            CRIAR SUA LOJA
          </Button>
        </div>
      </Content>
    </Container>
  );
}

export default Steps;
