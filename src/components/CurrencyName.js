import React  from 'react'

const CurrencyName = ({data}) => {
    let exchangeData = data.rates;
    let items = [];
    let i = 0;
    for(let key in exchangeData) { 
        items[i] = {
            curName : key,
            value : exchangeData[key].toFixed(5) 
        };
        i++;
    }

    return (
       
            <tbody>
                {
                    items.map((element, index) => (
                        <tr key={element.curName}>
                            {index %2 !== 0 ? 
                            <td className="border py-2 px-5 text-center">{element.curName}</td> 
                            : 
                            <td className="border py-2 px-2 text-center">{element.curName}</td> 
                            }
                        </tr>
                   
                   ))
                }
            </tbody>
        
    )
}

export default CurrencyName;