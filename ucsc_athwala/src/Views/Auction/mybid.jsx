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
import WorkIcon from '@material-ui/icons/Work';
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom"; 
import {RequestButton,MyCauseButton,MyDonationButton} from './Donation_button';
import Grid from '@material-ui/core/Grid';
import GavelIcon from '@material-ui/icons/Gavel';

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
    },
    button:{
        textTransform: 'initial',
        borderRadius: 15,

    }
});

function createData(title,highestbid,description,date) {
    return { title,highestbid,description,date };
  }
  
  const rows = [
    createData('Mobile Phone','60,000/=','intel® Core i5-10210U (up to 4.2 GHz 6 MB 4 cores) processor', '11'),
  ];

export default function My_donation(){
    const classes = useStyles();

    return(
        <div>
            <div><Typography variant="h5" className={classes.title}>Past Bids</Typography></div>
            <div style={{float:"left"}}>
              <Grid container spacing={4}>
                <RequestButton  />
                <MyCauseButton />
                { <MyDonationButton />}
              </Grid>
              
              </div>
              <br></br>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="a dense table">
                    <TableHead >
                    <TableRow>
                        <TableCell></TableCell>
                        { <TableCell className={classes.TableHead}>Title</TableCell> }
                        { <TableCell className={classes.TableHead} align="center">Highest Bid</TableCell> }
                        <TableCell className={classes.TableHead} align="center">Description</TableCell>
                        <TableCell className={classes.TableHead} align="center">Remaining Days</TableCell>
                        <TableCell className={classes.TableHead} align="center">View</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row"><GavelIcon color="secondary"/></TableCell> 
                        <TableCell component="th" scope="row" >{row.title}</TableCell>
                        { <TableCell align="center">{row.highestbid}</TableCell> }
                        <TableCell align="center">{row.description}</TableCell>
                        <TableCell align="center">{row.date}</TableCell>
                        <TableCell align="center">
                            <Link to ='/std/bid'>
                            <Button 
                            variant="contained" 
                            className={classes.button} 
                            color="primary" 
                            >View</Button></Link>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        
        

        </div>
    );
}