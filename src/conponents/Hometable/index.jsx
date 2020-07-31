import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './index.less'
 const index = () => {
    const [data, setData] = useState();
    // const [query, setQuery] = useState('redux');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.fsn365.com/stats`,
      );
      setData(result.data.data);

    };
    fetchData();
  }, []);

  console.log(data)
    return (
        <div>
            <div>
                {
                    data && 
                    <div className='listbox'>
                <div>
                    <strong>Price($)</strong>
                    <p>{data.priceData.price}$</p>
                </div>
                <div>
                    <strong>Addresses</strong>
                <p>{data.address}</p>
                </div>
                <div>
                    <strong>Swaps</strong>
                    <p>{data.swaps}</p>
                </div>
                <div>
                    <strong>Online Miners</strong>
                <p>{data.miners}</p>
                </div>
                <div>
                    <strong>MarketCap</strong>
                <p>{data.priceData.mcap}</p>
                </div>
                <div>
                    <strong>Block Height</strong>
                <p>{data.height}</p>
                </div>
                <div>
                    <strong>Tokens</strong>
                <p>{data.assets}</p>
                </div>
                <div>
                    <strong>Tickets</strong>
                <p>{data.activeTickets}</p>
                </div>
            </div>  
                }

            </div>
        </div>
    )
}

export default index