import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import CurrencyService from './currency-service.js';
import Converter from './convert.js';





$(document).ready(function () {
  $('#exchangeButton').click(function () {

    let userCurrency = parseFloat($('#amount').val());
    let selectedCurrency = $(".currencySelect").val();

  
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      const body = JSON.parse(response);
      let convertToInput = `${body.conversion_rates[selectedCurrency]}`
      let converter = new Converter(userCurrency, convertToInput);
      converter.convertCurrency();
      $('.showResults').text(`${userCurrency} in USD is worth ${converter.convertedCurrency}`);
      $('.showErrors').text("");
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
      $('.showResults').text("");
    });   
  });
});
