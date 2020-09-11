export default class Converter {
  constructor(convertFrom, convertTo) {
    this.convertFrom = convertFrom;
    this.convertTo = convertTo;
  }
  convertCurrency() {
    let convertedCurrency = Number.parseFloat(this.convertFrom * this.convertTo).toFixed(2);
    return convertedCurrency;
  }
}