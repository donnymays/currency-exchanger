import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import fromDollarService from './fromDollar-service.js';
import Converter from './convert.js';



function getElements(response) {
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


$(document).ready(function () {
  $('#converToButton').click(function () {
    fromDollarService.exchangetoDollar()
      .then(function (response) {
        getElements(response);
      });
  });
});
$(document).ready(function () {
  $('#convertFromButton').click(function () {
    CurrencyService.exchangeCurrency()
      .then(function (response) {
        getElements(response);
      });
  });
});

