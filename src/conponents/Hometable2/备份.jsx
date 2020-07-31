import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './index.less'
 const index = () => {
    const [data, setData] = useState({ hits: [] });
    // const [query, setQuery] = useState('redux');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.fsn365.com/latest`,
      );
        console.log(result.data.data)
      setData(result.data);
    };
    fetchData();
  }, []);
    return (
        <div>
            <div className='table2box'>

                <div className='tableleft'>
                    <div className='leftheader'>
                        <strong>Latest Txns</strong>
                        <span>View All</span>
                    </div>

                    <div className='leftlist'>
                        <div className='listyuan'>
                            <strong>Txn</strong>
                        </div>
                        <div className='list4text'>
                            <div><a href="#">0xb85318388f363a3517d7</a></div>
                            <div>From <a href='#'>WeDeFi</a></div>
                            <div>1 day ago</div>
                            <div>To <a href='#'>To0x9d3505d85c1a9a007a4f</a></div>
                        </div>
                        <div className='list-left-float-right-text'>TimeLock</div>
                    </div>
                    
                </div>

                <div className='tableright'>
                    <div className='rightheader'>
                        <strong>Latest Blocks</strong>
                        <span>View All</span>
                    </div>

                    <div className='rightlist'>
                        <div className='listfang'>
                            <strong>Bk</strong>
                        </div>
                        <div className='list4text'>
                            <div><a href="#">2589472</a></div>
                            <div>Miner <a href='#'>GoFsn</a></div>
                            <div>1 day ago</div>
                            <div>To <a href='#'>To0x9d3505d85c1a9a007a4f</a></div>
                        </div>
                        <div className='list-right-float-right-text'>2.50FSN</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default index