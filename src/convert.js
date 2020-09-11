export default class Converter {
  constructor(moneyAmount, conversionFactor, convertedCurrency, convertedDollar) {
    this.moneyAmount = moneyAmount;
    this.conversionFactor = conversionFactor;
    this.convertedCurrency = convertedCurrency;
    this.convertedDollar = convertedDollar
  }
  convertCurrency() {
    this.convertedCurrency = Number.parseFloat(this.moneyAmount * this.conversionFactor).toFixed(2);
  }
  convertToDollar() {
    this.convertedDollar = Number.parseFloat((1 / this.conversionFactor) * this.moneyAmount).toFixed(2);
  }
}
