import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service.js';
import Converter from './convert.js';


  
function getElements(response) {
  if (response.conversion_rates) {
    let userCurrency = parseFloat($('#amount').val());
    let selectedCurrency = $(".currencySelect").val();
    let convertToInput = `${response.conversion_rates[selectedCurrency]}`
    let converter = new Converter(userCurrency, convertToInput);
    converter.convertCurrency();
    $('.showResults').text(`${userCurrency} in USD is worth ${converter.convertedCurrency}`);
  } else {
    $('.showErrors').text(`There was an error processing your request: ${response.result}`);
  }
}



$(document).ready(function () {
  $('#exchangeButton').click(function () {  
    CurrencyService.exchangeCurrency()
    .then(function(response) {
      getElements(response);
    });
    });   
  });

