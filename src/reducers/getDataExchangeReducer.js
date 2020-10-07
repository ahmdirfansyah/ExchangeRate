// Reducer Kedua
const initialRates = {};

const getDataExchangeReducer = (state = initialRates, action) => {
  if (action.type === 'GET_EXCHANGE_RATE') {
    
      return action.rates;
    
  }
  return state;
}

export default getDataExchangeReducer;