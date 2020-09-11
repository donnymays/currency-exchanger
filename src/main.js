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
    let convertToInput = `response.conversion_rates.${selectedCurrency}`;
    console.log(`response.conversion_rates.CAD`);
    
    let converter = new Converter(userCurrency, convertToInput);
    converter.convertCurrency();
  

    function getElements(response) {
      if (response.converion_rates) {
        $('.showResults').text(`${userCurrency} in USD is worth ${converter.convertedCurrency}`)
      } else {
        $('.showErrors').text(`There was an error: ${response}`);
      }
    }
    
    async function makeApiCall() {
      const response = await CurrencyService.exchangeCurrency();
      getElements(response);
    }

    makeApiCall();
   

    
    
   

 


  });
});
