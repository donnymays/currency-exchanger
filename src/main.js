import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service.js';
import Converter from './convert.js';



$(document).ready(function() {
  $(#exchangeButton).click(function() {
    
    let convertFromInput = parseInt($('#amount').val());
    let selectedCurrency = currencySelect.val();

    let convertToInput = `response.conversion_rates.${selectedCurrency}`;
    
    let converter = new Converter(convertFromInput, convertToInput);

    async function makeApiCall(country) {
      const response = await CurrencyService.exchangeService(country);
      getElements(response);
    }

 


  });
});
