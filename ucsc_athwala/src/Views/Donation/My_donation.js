import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import HistoryIcon from '@material-ui/icons/History';

const useStyles = makeStyles({
    title:{
    color:"#546e7a",
    marginTop:5,
    marginBottom:20,
    },
    table: {
        minWidth: 650,
      },
    TableHead: {
        fontWeight: 'bold',
        fontFamily:"Poppins, sans-serif",
    }
});

function createData(name, posted_date, donate_date, status) {
    return { name, posted_date, donate_date, status };
  }
  
  const rows = [
    createData('i am 2nd year student.I need DSA 2 lecture note', '2021-08-13', '2021-08-15', 'pending'),
    createData('I am a first year student. i need mobile phone', '2021-08-09', '2021-08-10', 'pending'),
    createData('help with money for course fees', '2021-08-01', '2021-08-06', 'Marked as received'),
    createData('im 2nd year student.I need DSA 2 lecture note', '2021-07-13', '2021-07-15', 'Marked as received'),
    createData('i am 2nd year student.I need Office Trousers', '2021-07-02', '2021-07-10', 'Marked as received'),
  ];

export default function My_donation(){
    const classes = useStyles();
    return(
        <div>
            <div><Typography variant="h5" className={classes.title}>Donation History</Typography></div>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="a dense table">
                    <TableHead >
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell className={classes.TableHead}>Description</TableCell>
                        <TableCell className={classes.TableHead} align="center">Posted date and time</TableCell>
                        <TableCell className={classes.TableHead} align="center">Donate date and time</TableCell>
                        <TableCell className={classes.TableHead} align="center">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row"><HistoryIcon /></TableCell> 
                        <TableCell component="th" scope="row">{row.name}</TableCell>
                        <TableCell align="center">{row.posted_date}</TableCell>
                        <TableCell align="center">{row.donate_date}</TableCell>
                        <TableCell align="center">{row.status}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        
        

        </div>
    );
}