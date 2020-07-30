import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.less";
import Footer from "../component/footer/index";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Navinput from "../component/navinput/index";
const columns = [
  { id: "name", label: "Asset", minWidth: 100, align: "center" },

  { id: "id", label: "Asset Id", minWidth: 200, align: "center" },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 170,
    align: "center",
    format: value => value.toLocaleString("en-US")
  }
];

export default function Assets() {
  const [lists, setValue] = React.useState([]);
  // 请求数据
  useEffect(() => {
    const Datares = async () => {
      const res = await axios.get("https://api.fsn365.com/asset");
      console.log(res.data.data.data);
      setValue(res.data.data.data);
    };
    Datares();
  }, []);

  // 分页函数
  const pageList = val => {
    // console.log(val);
  };
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
      <main className="tablecontainer">
        <h2 className="text">Assets</h2>
        <div className="tablebox">
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
                  {lists
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(row => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.issueBk}
                        >
                          {columns.map(column => {
                            const value = row[column.id];
                            return (
                              <TableCell
                                onClick={pageList(value)}
                                key={column.id}
                                align={column.align}
                              >
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
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
              count={lists.length}
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
