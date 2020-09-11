export default class Converter {
  constructor(dollar, conversionFactor, convertedCurrency, convertedDollar) {
    this.dollar = dollar;
    this.conversionFactor = conversionFactor;
    this.convertedCurrency = convertedCurrency;
    this.convertedDollar = convertedDollar
  }
  convertCurrency() {
    this.convertedCurrency = Number.parseFloat(this.dollar * this.conversionFactor).toFixed(2);
  }
  convertToDollar() {
    this.convertedDollar = Number.parseFloat(this.)

  }
}