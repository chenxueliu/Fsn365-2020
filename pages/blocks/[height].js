import React, { useState, useEffect } from "react";
import axios from "axios";
import Navinput from "../component/navinput/index";
export default function height() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const query = window.location.pathname.substring(8);
    console.log(query);
    const getData = async () => {
      const res = await axios.get(`https://api.fsn365.com/blocks/${query}`);
      setData(res.data.data);
      console.log(res.data.data);
    };
    getData();
  }, []);
  //   console.log(data);
  return (
    <div>
      <Navinput />
      <div>
        <h2>Blocks</h2>
      </div>
      {data && (
        <div>
          hhh
          {data.miner}
        </div>
      )}
    </div>
  );
}
