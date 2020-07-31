import React from 'react';

import './index.less';
import Footer from "../component/footer/index";
import Navinput from "../component/navinput/index";
import Table from './table';
export default function Address() {
  return (
    <div>
      <div>
        <Navinput/>
      </div>
      <main className="address-container">
        <div className="address-con">
          <header>
            <h2 className="title">Fusion Address</h2>
          </header>
           
          <div className="add-box">
            <p>
              <strong>Notice:</strong>We only list addresses that hold one or
              more <strong>FSN ownership</strong> at this page.
            </p>
            <div className="address-table">
              <div>
                <Table />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
