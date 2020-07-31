import React, { useState, useEffect } from "react";
import "./index.less";
import axios from "axios";
import Link from "next/link";
import Footer from "../../src/conponents/Footer/index";
import Navinput from "../component/navinput/index";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  {
    id: "height",
    label: "Block",
    minWidth: 170,
    align: "center",
    format: obj => (
      <Link href={`/blocks/${obj.height}`}>
        <a>{obj.height}</a>
      </Link>
    )
  },
  { id: "timestamp", label: "Age", minWidth: 80, align: "center" },
  {
    id: "miner",
    label: "Miner",
    minWidth: 170,
    align: "center",
    format: obj => (
      <Link href={`/staking/${obj.miner}`}>
        <a>{obj.miner}</a>
      </Link>
    )
  },
  {
    id: "txns",
    label: "Txn",
    minWidth: 170,
    align: "center"
    // format: value => value.toLocaleString("en-US")
  },
  {
    id: "reward",
    label: "Reward",
    minWidth: 170,
    align: "center"
    // format: value => value.toFixed(2)
  }
];

const clcik = val => {
  // console.log("val" + val);
};
export default function Blocks() {
  const [arr, setArr] = useState([]);
  // 请求数据
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://api.fsn365.com/blocks");
      setArr(result.data.data.data);
      // console.log(result);
    };
    fetchData();
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Navinput />
      <main>
        <div className="blockscontainer">
          <div className="blockstext">Blocks</div>
          <Paper className="root">
            <TableContainer className="container">
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map(column => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {arr
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      var obj = {
                        miner: row.miner,
                        height: row.height
                      };

                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={index}
                        >
                          {columns.map(column => {
                            const value = row[column.id];
                            console.log(value);
                            return (
                              <TableCell
                                onClick={clcik(value)}
                                key={column.id}
                                align={column.align}
                              >
                                {column.format ? column.format(obj) : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50, 100]}
              component="div"
              count={arr.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </main>
      <Footer />
    </div>
  );
}
