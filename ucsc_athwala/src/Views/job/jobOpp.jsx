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

function createData(title,company,description,date) {
    return { title,company,description,date };
  }
  
  const rows = [
    createData('Senior Software Engineer', 'IFS', 'Lead/Senior Software Engineer - C#, .Net, Data Structures, Algorithm Development', '2021-06-11'),
    createData('Software Engineer', 'ICT Agency of Sri Lanka', 'Software Engineer job from ICT Agency of Sri Lanka in Colombo, Sri Lanka', '2020-05-13'),
    createData('Software Engineer (Java)', 'Hitachi Digital Payment Solutions Ltd', 'Hiring now for Software Engineer (Java) at Hitachi Digital Payment Solutions Ltd Apply today.', '2021-04-11'),
    createData('SOFTWARE ENGINEER', 'Sysco Labs', '	SOFTWARE ENGINEER job from Sysco Labs in Colombo, Sri Lanka', '2021-07-11'),
    createData('Software Engineer', '	WSO2', 'Software Engineer - Integration job from WSO2 in Colombo, Sri Lanka', '2021-07-11'),
    createData('Senior Software Engineer', 'Wiley', 'Senior Software Engineer - Analytics Engineering', '2020-06-12'),
    createData('Associate/Senior/Software Engineer', 'Wiley Sri Lanka', '	Salesforce - Associate/Senior/Software Engineer from Java or .Net background', '2021-05-11'),
  ];

export default function My_donation(){
    const classes = useStyles();

    return(
        <div>
            <div><Typography variant="h5" className={classes.title}>Job Oppertunity</Typography></div>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="a dense table">
                    <TableHead >
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell className={classes.TableHead}>Title</TableCell>
                        <TableCell className={classes.TableHead} align="center">Company name</TableCell>
                        <TableCell className={classes.TableHead} align="center">Description</TableCell>
                        <TableCell className={classes.TableHead} align="center">Posted date</TableCell>
                        <TableCell className={classes.TableHead} align="center">View</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row"><WorkIcon color="secondary"/></TableCell> 
                        <TableCell component="th" scope="row">{row.title}</TableCell>
                        <TableCell align="left">{row.company}</TableCell>
                        <TableCell align="left">{row.description}</TableCell>
                        <TableCell align="left">{row.date}</TableCell>
                        <TableCell align="left">
                            <Link to ='/std/jobview'>
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