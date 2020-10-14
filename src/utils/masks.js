export const unmask = (str) => str.replace(/[-)./(+ ]/g, '');

export const mask = (str, ...masks) => {
  const auxMask =
    masks.find((it) => unmask(it).length >= unmask(str).length) ||
    masks.sort((a, b) => unmask(a).length - unmask(b).length).pop();

  if (!auxMask) return str;

  let auxStr = unmask(str);
  const maskLength = unmask(auxMask).length;
  if (auxStr.length > maskLength) {
    auxStr = str.substring(0, maskLength);
  }
  let maskedStr = '';
  let j = 0;
  for (let i = 0; i < auxStr.length; i++) {
    try {
      while (auxMask[j] && auxMask[j] !== '#') maskedStr += auxMask[j++];
      maskedStr += auxStr[i];
      j++;
    } catch (e) {
      break;
    }
  }
  return maskedStr;
};

export const maskCpf = (document) =>
  mask(document.replace(/\D/g, ''), '###.###.###-##');

export const maskCnpj = (document) =>
  mask(document.replace(/\D/g, ''), '##.###.###/####-##');

export const maskPhone = (phone) =>
  mask(phone.replace(/\D/g, ''), '(##) ####-####', '(##) # ####-####');

export const maskDate = (date) => mask(date.replace(/\D/g, ''), '##/##/####');

export const maskCEP = (document) =>
  mask(document.replace(/\D/g, ''), '#####-###');

export const maskCardNumber = (cardNumber) =>
  mask(cardNumber.replace(/\D/g, ''), '#### #### #### ####');

export const maskCardDate = (date) => mask(date.replace(/\D/g, ''), '##/##');

export const maskCardCvv = (date) => mask(date.replace(/\D/g, ''), '###');

export const maskAgency = (document) =>
  mask(document.replace(/\D/g, ''), '####');

export const maskDigit = (document) => mask(document.replace(/\D/g, ''), '#');
