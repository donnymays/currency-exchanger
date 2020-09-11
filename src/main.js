import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service.js';
import Converter from './convert.js';

function clearFields() {
  $('#dollarAmount').val("");
  $('#currencyAmount').val("");
  $('#.currencySelect').val("");
}

function getElementsFromUSD(response) {
  if (response.conversion_rates) {
    let userDollar = parseFloat($('#dollarAmount').val());
    let selectedCurrency = $(".currencySelect").val();
    clearFields();
    let conversionFactorInput = `${response.conversion_rates[selectedCurrency]}`
    let converter = new Converter(userDollar, conversionFactorInput);
    converter.convertCurrency();
    $('.showResults1').text(`${userDollar} in USD is worth ${converter.convertedCurrency} in ${selectedCurrency}`);
  } else {
    $('.showErrors').text(`There was an error processing your request: ${response.error}`);
  }
}

function getElementsToUSD(response) {
  if (response.conversion_rates) {
    let userAmount = parseFloat($('#currencyAmount').val());
    let selectedCurrency2 = $(".currencyFromSelect").val();
    clearFields();
    let conversionFactorInput = `${response.conversion_rates[selectedCurrency2]}`
    let converter = new Converter(userAmount, conversionFactorInput);
    converter.convertToDollar();
    $('.showResults2').text(`${userAmount} in ${selectedCurrency2} is worth ${converter.convertedDollar} in USD`);
  } else {
    $('.showErrors').text(`There was an error processing your request: ${response.error}`);
  }
}


$(document).ready(function () {
  $('#convertToButton').click(function () {
    CurrencyService.exchangeCurrency()
      .then(function (response) {
        getElementsFromUSD(response);
      });
  
  });
});

$(document).ready(function () {
  $('#convertFromButton').click(function () {
    CurrencyService.exchangeCurrency()
      .then(function (response) {
        getElementsToUSD(response);
      });
    
  });
});

