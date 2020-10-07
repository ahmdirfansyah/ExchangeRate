import axios from 'axios';

const getDataExchangeAction = () => {
  return (dispatch) => {
    axios.get("https://api.exchangeratesapi.io/latest?base=IDR&symbols=IDR,USD,CAD,JPY,EUR,CHF")
    .then((response) => {
      return dispatch ({
        type: 'GET_EXCHANGE_RATE',
        rates: response.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export default getDataExchangeAction;