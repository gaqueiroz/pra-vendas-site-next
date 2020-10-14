import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import useMedia from 'use-media';

import { useFormProps } from '../../hooks/formProps';

import {
  Container,
  Content,
  Title,
  PlansContainer,
  PlanSilver,
  PlanBronze,
  PlanGold,
  PlanDiamond,
  Price,
  Description,
} from './styles';

function Plans() {
  const { formProps, setFormProps } = useFormProps();

  const maxWidth1250 = useMedia({ maxWidth: '1250px' });

  const planBronzeText = {
    one: '300 Produtos',
    two: '25.000 visitas',
    three: 'Suporte via email',
    four: '+ R$ 0,05 por visita adicional',
  };

  const planSilverText = {
    one: '500 Produtos',
    two: '50.000 visitas',
    three: 'Suporte via email',
    four: 'Suporte via chat em tempo real',
    five: '+ R$ 0,03 por visita adicional',
  };

  const planGoldText = {
    one: '2.000 Produtos',
    two: '100.000 visitas',
    three: 'Suporte via email',
    four: 'Suporte via chat em tempo real',
    five: '+ R$ 0,03 por visita adicional',
  };

  const planDiamondText = {
    one: 'Cadastro ilimitado',
    two: 'Visitas ilimitadas',
    three: 'Suporte via email',
    four: 'Suporte via chat em tempo real',
    five: 'Suporte por telefone',
  };

  return (
    <Container id="plans">
      <Content>
        <Title>NÃO CAIA EM JOGADA!</Title>
        <span>
          PRA VENDAS É A CERTEZA DO MELHOR NEGÓCIO FAÇA PARTE DESSA PARCERIA DE
          PONTA
        </span>
        <PlansContainer>
          {maxWidth1250 ? (
            <>
              <div className="separator">
                <PlanBronze>
                  <div className="header">
                    <strong>BRONZE</strong>
                    <span>
                      Use Grátis para conhecer a plataforma (30 DIAS).
                    </span>
                  </div>
                  <Price>
                    <div>
                      <strong>R$</strong>
                      <strong className="big">89</strong>
                      <strong>,00 /mês</strong>
                    </div>
                    <div className="relative">
                      <span className="best-selling">Teste grátis 30 dias</span>
                    </div>
                  </Price>
                  <Description>
                    <div className="item">
                      <span>{planBronzeText.one}</span>
                    </div>
                    <div className="item">
                      <span>{planBronzeText.two}</span>
                    </div>
                    <div className="item">
                      <span>{planBronzeText.three}</span>
                    </div>
                    <div className="item">
                      <span>{planBronzeText.four}</span>
                    </div>
                  </Description>
                  <button
                    type="button"
                    onClick={() =>
                      setFormProps({
                        ...formProps,
                        form: true,
                        planBronze: true,
                        planSilver: false,
                        planGold: false,
                        planDiamond: false,
                      })
                    }
                  >
                    <FaShoppingCart
                      size={20}
                      style={{ marginRight: '10px', color: '#fff' }}
                      fill="#fff"
                    />
                    Contratar
                  </button>
                </PlanBronze>

                <PlanSilver>
                  <div className="header">
                    <strong>PRATA</strong>
                    <span>Tudo o que você precisa para começar</span>
                  </div>
                  <Price>
                    <div>
                      <strong>R$</strong>
                      <strong className="big">139</strong>
                      <strong>,00 /mês</strong>
                    </div>
                    <div className="relative" />
                  </Price>
                  <Description>
                    <div className="item">
                      <span>{planSilverText.one}</span>
                    </div>
                    <div className="item">
                      <span>{planSilverText.two}</span>
                    </div>
                    <div className="item">
                      <span>{planSilverText.three}</span>
                    </div>
                    <div className="item">
                      <span>{planSilverText.four}</span>
                    </div>
                    <div className="item">
                      <span>{planSilverText.five}</span>
                    </div>
                  </Description>
                  <button
                    type="button"
                    onClick={() =>
                      setFormProps({
                        ...formProps,
                        form: true,
                        planBronze: false,
                        planSilver: true,
                        planGold: false,
                        planDiamond: false,
                      })
                    }
                  >
                    <FaShoppingCart
                      size={20}
                      style={{ marginRight: '10px' }}
                      fill="#fff"
                    />
                    Contratar
                  </button>
                </PlanSilver>
              </div>

              <div className="separator">
                <PlanGold>
                  <div className="header">
                    <strong>OURO</strong>
                    <span>Ideal para todas as empresas</span>
                  </div>
                  <Price>
                    <div>
                      <strong>R$</strong>
                      <strong className="big">239</strong>
                      <strong>,00 /mês</strong>
                    </div>
                    <div className="relative">
                      <span className="best-selling">O mais vendido</span>
                    </div>
                  </Price>
                  <Description>
                    <div className="item">
                      <span>{planGoldText.one}</span>
                    </div>
                    <div className="item">
                      <span>{planGoldText.two}</span>
                    </div>
                    <div className="item">
                      <span>{planGoldText.three}</span>
                    </div>
                    <div className="item">
                      <span>{planGoldText.four}</span>
                    </div>
                    <div className="item">
                      <span>{planGoldText.five}</span>
                    </div>
                  </Description>
                  <button
                    type="button"
                    onClick={() =>
                      setFormProps({
                        ...formProps,
                        form: true,
                        planBronze: false,
                        planSilver: false,
                        planGold: true,
                        planDiamond: false,
                      })
                    }
                  >
                    <FaShoppingCart
                      size={20}
                      style={{ marginRight: '10px' }}
                      fill="#fff"
                    />
                    Contratar
                  </button>
                </PlanGold>

                <PlanDiamond>
                  <div className="header">
                    <strong>DIAMANTE</strong>
                    <span>O céu é o limite</span>
                  </div>
                  <Price>
                    <div>
                      <strong>R$</strong>
                      <strong className="big">449</strong>
                      <strong>,00 /mês</strong>
                    </div>
                    <div className="relative" />
                  </Price>
                  <Description>
                    <div className="item">
                      <span>{planDiamondText.one}</span>
                    </div>
                    <div className="item">
                      <span>{planDiamondText.two}</span>
                    </div>
                    <div className="item">
                      <span>{planDiamondText.three}</span>
                    </div>
                    <div className="item">
                      <span>{planDiamondText.four}</span>
                    </div>
                    <div className="item">
                      <span>{planDiamondText.five}</span>
                    </div>
                  </Description>
                  <button
                    type="button"
                    onClick={() =>
                      setFormProps({
                        ...formProps,
                        form: true,
                        planBronze: false,
                        planSilver: false,
                        planGold: false,
                        planDiamond: true,
                      })
                    }
                  >
                    <FaShoppingCart
                      size={20}
                      style={{ marginRight: '10px' }}
                      fill="#fff"
                    />
                    Contratar
                  </button>
                </PlanDiamond>
              </div>
            </>
          ) : (
            <>
              <PlanBronze>
                <div className="header">
                  <strong>BRONZE</strong>
                  <span>Use Grátis para conhecer a plataforma (30 DIAS).</span>
                </div>
                <Price>
                  <div>
                    <strong>R$</strong>
                    <strong className="big">89</strong>
                    <strong>,00 /mês</strong>
                  </div>
                  <div className="relative">
                    <span className="best-selling">Teste grátis 30 dias</span>
                  </div>
                </Price>
                <Description>
                  <div className="item">
                    <span>{planBronzeText.one}</span>
                  </div>
                  <div className="item">
                    <span>{planBronzeText.two}</span>
                  </div>
                  <div className="item">
                    <span>{planBronzeText.three}</span>
                  </div>
                  <div className="item">
                    <span>{planBronzeText.four}</span>
                  </div>
                </Description>
                <button
                  type="button"
                  onClick={() =>
                    setFormProps({
                      ...formProps,
                      form: true,
                      planBronze: true,
                      planSilver: false,
                      planGold: false,
                      planDiamond: false,
                    })
                  }
                >
                  <FaShoppingCart
                    size={20}
                    style={{ marginRight: '10px' }}
                    fill="#fff"
                  />
                  Contratar
                </button>
              </PlanBronze>

              <PlanSilver>
                <div className="header">
                  <strong>PRATA</strong>
                  <span>Tudo o que você precisa para começar</span>
                </div>
                <Price>
                  <div>
                    <strong>R$</strong>
                    <strong className="big">139</strong>
                    <strong>,00 /mês</strong>
                  </div>
                  <div className="relative" />
                </Price>
                <Description>
                  <div className="item">
                    <span>{planSilverText.one}</span>
                  </div>
                  <div className="item">
                    <span>{planSilverText.two}</span>
                  </div>
                  <div className="item">
                    <span>{planSilverText.three}</span>
                  </div>
                  <div className="item">
                    <span>{planSilverText.four}</span>
                  </div>
                  <div className="item">
                    <span>{planSilverText.five}</span>
                  </div>
                </Description>
                <button
                  type="button"
                  onClick={() =>
                    setFormProps({
                      ...formProps,
                      form: true,
                      planBronze: false,
                      planSilver: true,
                      planGold: false,
                      planDiamond: false,
                    })
                  }
                >
                  <FaShoppingCart
                    size={20}
                    style={{ marginRight: '10px' }}
                    fill="#fff"
                  />
                  Contratar
                </button>
              </PlanSilver>
              <PlanGold>
                <div className="header">
                  <strong>OURO</strong>
                  <span>Ideal para todas as empresas</span>
                </div>
                <Price>
                  <div>
                    <strong>R$</strong>
                    <strong className="big">239</strong>
                    <strong>,00 /mês</strong>
                  </div>
                  <div className="relative">
                    <span className="best-selling">O mais vendido</span>
                  </div>
                </Price>
                <Description>
                  <div className="item">
                    <span>{planGoldText.one}</span>
                  </div>
                  <div className="item">
                    <span>{planGoldText.two}</span>
                  </div>
                  <div className="item">
                    <span>{planGoldText.three}</span>
                  </div>
                  <div className="item">
                    <span>{planGoldText.four}</span>
                  </div>
                  <div className="item">
                    <span>{planGoldText.five}</span>
                  </div>
                </Description>
                <button
                  type="button"
                  onClick={() =>
                    setFormProps({
                      ...formProps,
                      form: true,
                      planBronze: false,
                      planSilver: false,
                      planGold: true,
                      planDiamond: false,
                    })
                  }
                >
                  <FaShoppingCart
                    size={20}
                    style={{ marginRight: '10px' }}
                    fill="#fff"
                  />
                  Contratar
                </button>
              </PlanGold>

              <PlanDiamond>
                <div className="header">
                  <strong>DIAMANTE</strong>
                  <span>O céu é o limite</span>
                </div>
                <Price>
                  <div>
                    <strong>R$</strong>
                    <strong className="big">449</strong>
                    <strong>,00 /mês</strong>
                  </div>
                  <div className="relative" />
                </Price>
                <Description>
                  <div className="item">
                    <span>{planDiamondText.one}</span>
                  </div>
                  <div className="item">
                    <span>{planDiamondText.two}</span>
                  </div>
                  <div className="item">
                    <span>{planDiamondText.three}</span>
                  </div>
                  <div className="item">
                    <span>{planDiamondText.four}</span>
                  </div>
                  <div className="item">
                    <span>{planDiamondText.five}</span>
                  </div>
                </Description>
                <button
                  type="button"
                  onClick={() =>
                    setFormProps({
                      ...formProps,
                      form: true,
                      planBronze: false,
                      planSilver: false,
                      planGold: false,
                      planDiamond: true,
                    })
                  }
                >
                  <FaShoppingCart
                    size={20}
                    style={{ marginRight: '10px' }}
                    fill="#fff"
                  />
                  Contratar
                </button>
              </PlanDiamond>
            </>
          )}
        </PlansContainer>
      </Content>
    </Container>
  );
}

export default Plans;
