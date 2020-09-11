import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import CurrencyService from './currency-service.js';
import Converter from './convert.js';





$(document).ready(function () {
  $('#exchangeButton').click(function () {

    let userCurrency = parseInt($('#amount').val());
    let selectedCurrency = $(".currencySelect").val();
    let convertToInput = `${response.conversion_rates.selectedCurrency}`;
    console.log(convertToInput);

    let converter = new Converter(userCurrency, convertToInput);
    converter.convertCurrency();

    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();


    function getElements(response) {
      $('.showResults').text(`${userCurrency} in USD is worth ${converter.convertedCurrency}`)
      console.log(userCurrency);
      console.log(converter.convertCurrency);
    }
  });
});
