import React from 'react';

import './index.less';
import Footer from "../component/footer/index";
import Navinput from "../component/navinput/index";

export default function Address() {
  return (
    <div>
      <div>
        <Navinput/>
      </div>
      <main className="address-container">
        <div className="address-con">
          <header>
            <h2 className="title">Address Detail</h2>
          </header>
           
          <div className="add-overview">
           <header>
               <p>
                   <strong>Overview</strong>
               </p>
           </header>
           
          </div>
          <div className='add-bottom'>

          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
