export default class CurrencyService {  
  static async exchangeCurrency(country) {
    try {
      const response = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${country}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
 }
  
