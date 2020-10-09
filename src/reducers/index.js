// Import combineReducer untuk menggabungkan semua file reducer
import { combineReducers } from 'redux';

// Import all reducer
import GetExchangeReducer from './GetExchangeReducer';

const rootReducer = combineReducers({
  dataExchange: GetExchangeReducer,
})

export default rootReducer;
