import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service.js';
import Converter from './convert.js';





$(document).ready(function() {
  $('#exchangeButton').click(function() {
    
    let userCurrency = parseInt($('#amount').val());
    let selectedCurrency = $(".currencySelect").val();
    console.log(selectedCurrency);
    let convertToInput = `response.conversion_rates.${selectedCurrency}`;
    console.log(convertToInput);
    let converter = new Converter(userCurrency, convertToInput, userConvertedCurrency);
    let country = USD
    makeApiCall(country);
    converter.convertCurrency();

    function getElements(response) {
      if (response.converion_rates) {
        $('.showResults').text(`${userCurrency} in USD is worth ${converter.userConvertedCurrency}`)
      } else {
        $('.showErrors').text(`There was an error: ${response}`);
      }
    }
    
    async function makeApiCall(country) {
      const response = await CurrencyService.exchangeService(country);
      getElements(response);
    }

 


  });
});
