// Import combineReducer untuk menggabungkan semua file reducer
import { combineReducers } from 'redux';

// Import all reducer
import getDataExchangeReducer from './getDataExchangeReducer';

const rootReducer = combineReducers({
  dataExchange: getDataExchangeReducer,
})

export default rootReducer;
