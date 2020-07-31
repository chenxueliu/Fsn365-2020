// import React,{useEffect} from 'react'
// import Nav from '../nav'
// import Bottom from '../bottom'
// import './transactionsn.less'
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import {transactionsList} from '../../api'



// const columns = [
//   { id: 'hash', label: 'Tx Hash' },
//   { id: 'timestamp', label: 'Time'},
//   {
//     id: 'bk',
//     label: 'Block',
//     align: 'right',
//   },
//   {
//     id: 'to',
//     label: 'From',
//     align: 'right',
//   },
//   {
//     id: 'size2',
//     label: 'Direction',
//     align: 'right',
//   },
//   {
//     id: 'to',
//     label: 'To',
//     align: 'right',
//   },
//   {
//     id: 'type',
//     label: 'Tx Type',
//     align: 'right',
//   },
//   {
//     id: 'info',
//     label: 'Info',
//     align: 'center',
//     maxWidth:150
//   },
// ];




// const index = () => {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [rows,setRows] = React.useState([])

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await transactionsList()
//       setRows(result.data.data);
//       console.log(result.data.data)
//     };
//     fetchData();
//   }, []);
//  console.log(rows)

//     return (
//       <div>
//         <div className="transactionsn-contiar">
//             <Nav></Nav>
//             <div className='maiTransactionsn'>
//                 <div className='maiTransactionsn-head'>
//                     <span>Transactions</span>
//                 </div>
//                 <div>
      
//                 </div>
                
//             <Paper classNam