import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import GetExchangeAction from './actions/GetExchangeAction';
import Exchange from './components/Exchange';
import Buy from './components/Buy';
import CurrencyName from './components/CurrencyName';
import Sell from './components/Sell';

const App = (props) => {

let exchangeRate  =  props.getDataRate();
let rates = [];
let i = 0;

for(let key in exchangeRate){
  rates[i] = {
      cur : key,
      val : exchangeRate[key]
  }
  i++;
}



 console.log(exchangeRate);

 
  return (
    <div className="App">
      
      <div className="container mx-auto">

        <table className="table-auto">
          <thead>
            <tr>
              <th className="w-1/1 px-1 py-1"></th>
              <th className="w-1/1 px-1 py-1">We Buy</th>
              <th className="w-1/1 px-1 py-1">Exch. Rate</th>
              <th className="w-1/1 px-1 py-1">We Sell</th>
            </tr>
          </thead>
          <tbody>

        
              
              <tr class="bg-gray-100">
                 <th className="border px-2 py-2"><CurrencyName data={props.rates}/></th> 
                 <td className="border px-2 py-2 italic"><Buy data={props.rates}/></td>
                 <td className="border px-2 py-2 italic"><Exchange data={props.rates}/></td>
                 <td className="border px-2 py-2 italic"><Sell data={props.rates}/></td>
                  
            </tr>
            
          </tbody>
        </table>

      </div>

    </div>
  );
}

// Menggunakan state yang ada di Redux kedalam komponen/page App.js
const mapStateToProps = (state) => {
  console.log(state)
  return {
    rates: state.dataExchange,
  }
}

// Menggunakan state yang ada di Redux kedalam komponen/page App.js
const mapDispatchToProps = (dispatch) => {
  
  return {
    getDataRate : () => dispatch(GetExchangeAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
