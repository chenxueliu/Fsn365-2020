import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.less'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
const columns = [

    {
        id: 'name',
        label: 'Assets',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'id',
        label: 'AssetsID',
        align: 'center',
        minWidth: 100
    },
    {
        id: 'quantity',
        label: 'Quantity',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    }
];

function createData(name, code, population) {
    return { name, code, population };
}

const rows = [
    createData('India', 'IN', 1324171354),
    createData('China', 'CN', 1403500365),
    createData('Italy', 'IT', 60483973),
    createData('United States', 'US', 327167434),
    createData('Canada', 'CA', 37602103),
    createData('Australia', 'AU', 25475400),
    createData('Germany', 'DE', 83019200),
    createData('Ireland', 'IE', 4857000),
    createData('Mexico', 'MX', 126577691),
    createData('Japan', 'JP', 126317000),
    createData('France', 'FR', 67022000),
    createData('United Kingdom', 'GB', 67545757),
    createData('Russia', 'RU', 146793744),
    createData('Nigeria', 'NG', 200962417),
    createData('Brazil', 'BR', 210147125),
];

const useStyles = makeStyles({
    root: {
        width: '86%',
        margin:'40px auto'
    },
    container: {
        maxHeight: 840,
    },
});

export default function StickyHeadTable() {
    // ...........
    const [rows, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://api.fsn365.com/assets`,
            );
            console.log(result.data, '1')
            setData(result.data.data.data);
        };
        fetchData();
    }, []);
    console.log(rows)


    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    return (
        <div className='assetsbox'>
            <div className='h5'>Assets</div>
        <Paper className='root'>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                       <strong>{column.label}</strong>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    <a href="#">{column.format && typeof value === 'number' ? column.format(value) : value}</a>
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
    );
}
