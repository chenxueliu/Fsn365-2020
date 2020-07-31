import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../component/navinput";
import Footer from "../../src/conponents/Footer/index";
import "./index.less";

const aa = date => {
  var d = new Date(date);
  var yue = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
  var re = d.getDate() > 9 ? d.getDate() : "0" + d.getDate();
  var youWant = d.getFullYear() + "." + yue + "." + re;
  return youWant;
};
export default function index() {
  const [newdata, setData] = useState(null);
  useEffect(() => {
    const query = window.location.pathname.substring(14);
    const fetch = async () => {
      const res = await axios.get(`https://api.fsn365.com/txn/${query}`);
      //   console.log(res.data);
      setData(res.data.data);
    };
    fetch();
  }, []);
  // console.log(newdata);
  return (
    <div className="outbox">
      <Nav />
      <div className="midbox">
        <h3 style={{ marginTop: "20px", lineHeight: "50px" }}>Tx# TimeLock</h3>
        {newdata === null ? (
          ""
        ) : (
          <ul className="mid">
            <li>
              <div style={{ marginLeft: "15px" }}>
                hash:
                <span style={{ color: "#349ADC", marginLeft: "5px" }}>
                  {newdata.hash}
                </span>
              </div>
            </li>
            {}
            <li>
              <div style={{ marginLeft: "15px" }}>
                Lock Type:
                <span style={{ marginLeft: "5px" }}>
                  {newdata.info.lockType == null
                    ? "SmartTransfer"
                    : `${newdata.info.lockType}`}
                </span>
              </div>
            </li>
            <li>
              <div style={{ marginLeft: "15px" }}>
                value:{newdata.info.value}
                <span style={{ color: "#349ADC", marginLeft: "5px" }}>
                  {newdata.info.symbol}
                </span>
              </div>
            </li>
            {newdata.info.duration == null ? (
              ""
            ) : (
              <li>
                <div style={{ marginLeft: "15px" }}>
                  Duration
                  <span style={{ color: "#349ADC", marginLeft: "5px" }}>
                    {`${aa(newdata.info.duration.startTime * 1000)} ~ ${aa(
                      newdata.info.duration.endTime * 1000
                    )} `}
                  </span>
                </div>
              </li>
            )}

            <li>
              <div style={{ marginLeft: "15px" }}>
                Tx Status:
                <span
                  style={{
                    color: "#4CAF55",
                    marginLeft: "5px",
                    fontWeight: "500"
                  }}
                >
                  Success
                </span>
              </div>
            </li>
            <li>
              <div style={{ marginLeft: "15px" }}>
                Block:
                <span style={{ color: "#349ADC", marginLeft: "5px" }}>
                  {newdata.bk}
                </span>
              </div>
            </li>
            <li>
              <div style={{ marginLeft: "15px" }}>
                From:
                <span style={{ color: "#349ADC", marginLeft: "5px" }}>
                  {newdata.from}
                </span>
              </div>
            </li>
            <li>
              <div style={{ marginLeft: "15px" }}>
                To:
                <span style={{ color: "#349ADC", marginLeft: "5px" }}>
                  {newdata.to}
                </span>
              </div>
            </li>
            <li>
              <div style={{ marginLeft: "15px" }}>
                Time:
                <span style={{ color: "#349ADC", marginLeft: "5px" }}>
                  {`${aa(newdata.timestamp * 1000)}`}
                </span>
              </div>
            </li>
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
}
