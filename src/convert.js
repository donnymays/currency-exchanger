export default class Converter {
  constructor(convertFrom, convertTo, convertedCurrency) {
    this.convertFrom = convertFrom;
    this.convertTo = convertTo;
    this.convertCurrency = convertedCurrency;
  }
  convertCurrency() {
    this.convertedCurrency = Number.parseFloat(this.convertFrom * this.convertTo).toFixed(2);
 
  }
}