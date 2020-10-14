import React, { useState, useEffect } from 'react';

import theme from '../styles/theme';

import { maskCardNumber, maskCardDate } from '../../utils/masks';
import amex from './images/amex.png';
import elo from './images/elo.png';
import mastercard from './images/mastercard.png';
import visa from './images/visa.png';
import {
  Container,
  FlipCard,
  CardFront,
  CardBack,
  SelectFlags,
  ButtonFlags,
} from './styles';

function Card({
  cardNumber,
  cardValidity,
  cardName,
  cardCvv,
  setFormData,
  formData,
}) {
  const [flagImg, setFlagImg] = useState();
  const [flagVisible, setFlagVisible] = useState(false);

  function handleCardFlag(flagName) {
    if (flagName === 'visa') {
      setFormData({ ...formData, flag: 'visa' });
      setFlagImg(visa);
    } else if (flagName === 'mastercard') {
      setFormData({ ...formData, flag: 'mastercard' });
      setFlagImg(mastercard);
    } else if (flagName === 'amex') {
      setFormData({ ...formData, flag: 'amex' });
      setFlagImg(amex);
    } else if (flagName === 'elo') {
      setFormData({ ...formData, flag: 'elo' });
      setFlagImg(elo);
    }
  }

  useEffect(() => {
    if (formData.flag === 'visa') {
      setFlagImg(visa);
    }
    if (formData.flag === 'mastercard') {
      setFlagImg(mastercard);
    }
    if (formData.flag === 'amex') {
      setFlagImg(amex);
    }
    if (formData.flag === 'elo') {
      setFlagImg(elo);
    }
  }, [formData.flag]);

  useEffect(() => {
    if (cardNumber.length === 16) {
      setFlagVisible(true);
    } else {
      setFlagVisible(false);
    }
  }, [cardNumber]);

  return (
    <Container>
      <FlipCard>
        <div className="flip-card-inner">
          <CardFront>
            <div>
                <p className="card-flag">FLAG</p>
            </div>
            <span className="card-number">
              {maskCardNumber(cardNumber) || '0000 0000 0000 0000'}
            </span>
            <span className="card-expiration">
              {maskCardDate(cardValidity) || '00/00'}
            </span>
            <span className="card-expiration-label">VALID THRU</span>
            <span className="card-holder">{cardName || 'NOME COMPLETO'}</span>
          </CardFront>
          <CardBack>
            <div className="black" />
            <span className="card-cvv">{cardCvv || '000'}</span>
          </CardBack>
        </div>
      </FlipCard>
      <SelectFlags flagVisible={flagVisible}>
        <div className="separator">
          <ButtonFlags
            type="button"
            onClick={() => handleCardFlag('visa')}
            style={{
              borderColor:
                formData.flag === 'visa' ? `${theme.palette.primary}` : '#999',
              borderWidth: formData.flag === 'visa' ? '2.3px' : '1.3px',
            }}
          >
          </ButtonFlags>
          <ButtonFlags
            type="button"
            className="mastercard"
            onClick={() => handleCardFlag('mastercard')}
            style={{
              borderColor:
                formData.flag === 'mastercard'
                  ? `${theme.palette.primary}`
                  : '#999',
              borderWidth: formData.flag === 'mastercard' ? '2.3px' : '1.3px',
            }}
          >
          </ButtonFlags>
        </div>

        <div className="separator">
          <ButtonFlags
            type="button"
            className="amex"
            onClick={() => handleCardFlag('amex')}
            style={{
              borderColor:
                formData.flag === 'amex' ? `${theme.palette.primary}` : '#999',
              borderWidth: formData.flag === 'amex' ? '2.3px' : '1.3px',
            }}
          >
          </ButtonFlags>
          <ButtonFlags
            type="button"
            className="elo"
            onClick={() => handleCardFlag('elo')}
            style={{
              borderColor:
                formData.flag === 'elo' ? `${theme.palette.primary}` : '#999',
              borderWidth: formData.flag === 'elo' ? '2.3px' : '1.3px',
            }}
          >
          </ButtonFlags>
        </div>
      </SelectFlags>
    </Container>
  );
}

export default Card;
