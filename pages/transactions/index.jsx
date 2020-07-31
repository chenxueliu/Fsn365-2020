import React, { useEffect, useState } from "react";
import "./index.less";
import axios from "axios";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import Nav from "../component/navinput";
import Footer from "../../src/conponents/Footer/index";

const columns = [
  {
    id: "hash",
    label: "Tx Hash ",
    minWidth: 150,
    format: obj => (
      <Link href={`/transactions/${obj.hash}`}>
        <a>{obj.hash}</a>
      </Link>
    )
  },
  { id: "timestamp", label: "Time", minWidth: 70 },
  {
    id: "bk",
    label: "Block",
    minWidth: 70
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "from",
    label: "From",
    minWidth: 80
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Direction",
    label: "Direction",
    minWidth: 50
    // format: (value) => value.toFixed(2),
  },
  {
    id: "to",
    label: "To",
    minWidth: 80
    // format: (value) => value.toFixed(2),
  },
  {
    id: "type",
    label: "Tx Type",
    minWidth: 120
    // format: (value) => value.toFixed(2),
  },
  {
    id: "info",
    label: "Info",
    minWidth: 90
    // format: (value) => value.toFixed(2),
  }
];
export default function Blocks() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setrow] = useState([]);
  // console.log(rows)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://api.fsn365.com/txn");
      setrow(result.data.data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="main">
      <Nav />
      <div className="txndiv">
        <h2>Transations</h2>
        <Paper className="root">
          <TableContainer className="container">
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.id}
                      align="center"
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    var obj = { hash: row.hash };
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columns.map(column => {
                          let value;
                          if (column.id == "info") {
                            value = `${row[column.id].value} FSN`;
                            // console.log(row[column.id].value);
                          } else if (column.id == "Direction") {
                            value = `→`;
                          } else {
                            value = row[column.id];
                          }
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <div className={column.id}>
                                {column.format ? column.format(obj) : value}
                              </div>
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
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
      <Footer />
    </div>
  );
}
