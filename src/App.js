import React from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

import './App.css';
import getDataExchangeAction from './actions/getDataExchangeAction';
import RowExchange from './components/RowExchange/RowExchange';
import RowBuy from './components/RowBuy/RowBuy';
import RowCurName from './components/RowCurName/RowCurName';
import RowSell from './components/RowSell/RowSell';

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



// useEffect(() => {

//     props.getDataRate();
//   //   let dataRate = props.getDataRate();

//   },[]);

 console.log(exchangeRate);

 
  return (
    <div className="App">
      
      <div className="container2 mx-auto  h-screen ">

        <table id="tableCur" className="table-auto mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2">We Buy</th>
              <th className="px-4 py-2">Exchange Rate</th>
              <th className="px-4 py-2">We Sell</th>
            </tr>
          </thead>
          <tbody>

        
              
              <tr>
                 <td className=" px-4 py-2"><RowCurName data={props.rates}/></td> 
                 <td className=" px-4 py-2"><RowBuy data={props.rates}/></td>
                 <td className=" px-4 py-2"><RowExchange data={props.rates}/></td>
                 <td className=" px-4 py-2"><RowSell data={props.rates}/></td>
                  
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
    getDataRate : () => dispatch(getDataExchangeAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
