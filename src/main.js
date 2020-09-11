import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service.js';
import Converter from './convert.js';



function getElementsFromUSD(response) {
  if (response.conversion_rates) {
    let userDollar = parseFloat($('#dollarAmount').val());
    let selectedCurrency = $(".currencySelect").val();
    let conversionFactorInput = `${response.conversion_rates[selectedCurrency]}`
    let converter = new Converter(userDollar, conversionFactorInput);
    converter.convertCurrency();
    $('.showResults').text(`${userDollar} in USD is worth ${converter.convertedCurrency}`);
  } else {
    $('.showErrors').text(`There was an error processing your request: ${response.error-type}`);
  }
}

function getElementsToUSD(response) {
  if (response.conversion_rates) {
    let userAmount = parseFloat($('#currencyAmount').val());
    let selectedCurrency = $(".currencySelect").val();
    let conversionFactorInput = `${response.conversion_rates[selectedCurrency]}`
    let converter = new Converter(userAmount, conversionFactorInput);
    converter.convertCurrency();
    $('.showResults').text(`${userDollar} in USD is worth ${converter.convertedCurrency}`);
  } else {
    $('.showErrors').text(`There was an error processing your request: ${response.error-type}`);
  }
}


$(document).ready(function () {
  $('#exchangeButton').click(function () {
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

