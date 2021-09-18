import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import HistoryIcon from '@material-ui/icons/History';
import axios from 'axios';

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
    Tablerow:{
        fontFamily:"Poppins, sans-serif",
    }
});

function createData(name,type, posted_date, donate_date, status) {
    return { name, type,posted_date, donate_date, status };
  }
  
  const rows = [
    createData('i am 2nd year student.I need DSA 2 lecture note','note', '2021-08-13', '2021-08-15', 'pending'),
    createData('I am a first year student. i need mobile phone','device', '2021-08-09', '2021-08-10', 'pending'),
    createData('help with money for course fees','money', '2021-08-01', '2021-08-06', 'Marked as received'),
    createData('im 2nd year student.I need DSA 2 lecture note','note', '2021-07-13', '2021-07-15', 'Marked as received'),
    createData('i am 2nd year student.I need Office Trousers','cloth', '2021-07-02', '2021-07-10', 'Marked as received'),
  ];

export default function My_donation(){
    const classes = useStyles();

    const [donhistory, setDonHistory] = useState([]);

    const userData=JSON.parse(localStorage.getItem("userData"));

    useEffect(() => {
    
        fetchHistory();
      },[]);

    const fetchHistory = () => {
        const stid = userData.id;
    
        axios.get("http://localhost:5000/api/donations/donationhistory", {
        params: {id:stid},
        }).then((response) => {
            console.log(response.data);
            setDonHistory(response.data)
        })
    }

    function Tble(props){
        var newstatus;
        if(props.status === 1){
            newstatus = 'Pending';
        }

        else if(props.status === 2){
            newstatus = 'marked as received'
        }
        return(
            <TableRow key={props.donationID}>
                        <TableCell component="th" scope="row"><HistoryIcon /></TableCell> 
                        <TableCell component="th" scope="row" className={classes.Tablerow}>{props.description}</TableCell>
                        <TableCell align="center" className={classes.Tablerow}>{props.donationType}</TableCell>
                        <TableCell align="center" className={classes.Tablerow}>{props.createdAt}</TableCell>
                        <TableCell align="center" className={classes.Tablerow}>{props.donate_at}</TableCell>
                        <TableCell align="center" className={classes.Tablerow}>{newstatus}</TableCell>
            </TableRow>
        )
    }

    return(
        <div>
            <div><Typography variant="h5" className={classes.title}>Donation History</Typography></div>
            <div><Typography variant="subtitle1" className={classes.title}>Thank you for your donations!!</Typography></div>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="a dense table">
                    <TableHead >
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell className={classes.TableHead}>Donation details</TableCell>
                        <TableCell className={classes.TableHead}>Type</TableCell>
                        <TableCell className={classes.TableHead} align="center">Posted date and time</TableCell>
                        <TableCell className={classes.TableHead} align="center">Donate date and time</TableCell>
                        <TableCell className={classes.TableHead} align="center">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {donhistory.map((row) => (
                        <Tble donationID={row.donationID} description={row.description} donationType={row.donationType} createdAt={row.createdAt} donate_at={row.donate_at} status={row.status}/>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        
        

        </div>
    );
}