import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.less";
import Navinput from "../component/navinput/index";
import Footer from "../../src/conponents/Footer/index";
export default function height() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const query = window.location.pathname.substring(8);
    console.log(query);
    const getData = async () => {
      const res = await axios.get(`https://api.fsn365.com/blocks/${query}`);
      setData(res.data.data);
      // console.log(res.data.data);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <Navinput />
      <div className="blockscontainer">
        <h2 className="blockstext">Blocks</h2>
        <div className="bl-box">
          {data && (
            <div className="blockson">
              <div className="blockson-box ">
                <p>
                  Height:
                  <span>{data.height}</span>
                </p>
                <hr size="1"></hr>
              </div>
              <div className="blockson-box ">
                <p>
                  Age:
                  <span>{data.age}</span>
                </p>
                <hr size="1"></hr>
              </div>
              <div className="blockson-box ">
                <p>
                  Transactions:
                  <span></span>
                </p>
                <hr size="1"></hr>
              </div>
              <div className="blockson-box ">
                <p>
                  Block Miner:
                  <span>{data.miner}</span>
                </p>
                <hr size="1"></hr>
              </div>
              <div className="blockson-box ">
                <p>
                  Block Rewards:
                  <span>{data.reward}</span>
                </p>
                <hr size="1"></hr>
              </div>
              <div className="blockson-box ">
                <p>
                  Difficulty:
                  <span>{data.difficulty}</span>
                </p>
                <hr size="1"></hr>
              </div>
              <div className="blockson-box ">
                <p>
                  Total Difficulty:
                  <span>{data.totalDifficulty}</span>
                </p>
                <hr size="1"></hr>
              </div>

              <div className="blockson-box ">
                <p>
                  Size:
                  <span>{data.size}</span>
                </p>
                <hr size="1"></hr>
              </div>
              <div className="blockson-box ">
                <p>
                  Gas Limit:
                  <span>{data.gasLimit}</span>
                </p>
                <hr size="1"></hr>
              </div>
              <div className="blockson-box ">
                <p>
                  Hash:
                  <span>{data.hash}</span>
                </p>
                <hr size="1"></hr>
              </div>
              <div className="blockson-box ">
                <p>
                  Parent Hash:
                  <span>{data.parentHash}</span>
                </p>
                <hr size="1"></hr>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
