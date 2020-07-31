import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './index.less'
 const index = () => {
    const [data, setData] = useState();
    // const [query, setQuery] = useState('redux');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.fsn365.com/latest`,
      );
    //   console.log(result.data.data,'1')
      setData(result.data.data);
    };
    fetchData();
   let aa=new Date().getTime();
//    console.log(aa);
  }, []);

    return (
        <div>
            <div className='table2box'>

                <div className='tableleft'>
                    <div className='leftheader'>
                        <strong>Latest Txns</strong>
                        <span>View All</span>
                    </div>

                    {
                        data &&
                    data.txs.map((item,id)=>{
                        return(
                        <div className='leftlist' key={id}>
                                <div className='listyuan'>
                                    <strong>Txn</strong>
                                </div>
                                <div className='list4text'>
                        <div><a href="#">{item.from}</a></div>
                                    <div>From <a href='#'>WeDeFi</a></div>
                        {/* <div>time{new Date().getTime()-item.timestamp}</div> */}
                        <div>1 day ago</div>
                        <div>To<a href='#'>{item.to}</a></div>
                                </div>
                        <div className='list-left-float-right-text'>{item.type}</div>
                        </div>)
                    })}
                    
                </div>

                <div className='tableright'>
                    <div className='rightheader'>
                        <strong>Latest Blocks</strong>
                        <span>View All</span>
                    </div>

                   {    data&&
                   data.bks.map((item,id)=>{
                       return(
                        <div className='rightlist' key={id}>
                        <div className='listfang'>
                            <strong>Bk</strong>
                        </div>
                        <div className='list4text'>
                       <div><a href="#">{item.height}</a></div>
                       <div><b>Miner</b> <a href='#'>{item.miner}</a></div>
                       <div>{item.timestamp}</div>
                            <div>{item.txns} in Blocks</div>
                        </div>
                       <div className='list-right-float-right-text'>{item.reward}FSN</div>
                    </div>
                       )
                   })}
                    
                </div>
            </div>
        </div>
    )
}
export default index