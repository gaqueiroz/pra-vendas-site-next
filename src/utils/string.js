export const stringUtil = {
  replaceAll(str, from, to) {
    let pos = str.indexOf(from);
    while (pos > -1) {
      str = str.replace(from, to);
      pos = str.indexOf(from);
    }
    return str;
  },
  isNumeric(str) {
    const er = /^[0-9]+$/;
    return er.test(str);
  },
  extractDigits(str) {
    return str.replace(/[^\d]+/g, '');
  },
};

export const { extractDigits } = stringUtil;
export const { replaceAll } = stringUtil;
export const { isNumeric } = stringUtil;
export default stringUtil;
