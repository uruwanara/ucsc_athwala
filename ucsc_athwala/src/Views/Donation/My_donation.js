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
import {useSnackbar} from "notistack";
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import  Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

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
    const {enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [donhistory, setDonHistory] = useState([]);
    const [open, setOpen] = React.useState(false);

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
            setDonHistory(response.data);
        })
    };

    function Tble(props){

        const handleClickOpen = (event) => {
            event.preventDefault(); 
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };

        const handleConfirm = (event) => {
            console.log(props.donertblid);
            setOpen(false);     
            event.preventDefault(); 
            
        
          const deletedonation={
            "donertblid": props.donertblid,
          }
          axios.post("http://localhost:5000/api/donations//deletedonationhistory",deletedonation,{
              headers:{
                  "access-control-allow-origin" : "*",
                  "Content-type": "application/json; charset=UTF-8"
                }
              }).then((response) => {
                  if(response.data === 'success'){
                    console.log("hkjkdf");
                    fetchHistory();
                    enqueueSnackbar('Successfully Deleted', {
                        variant: 'success', anchorOrigin: {
                          vertical: 'bottom',
                          horizontal: 'center',
                        }
                      })
                  }
          });
            
        }

        return(
            <TableRow key={props.donertblid}>
                        <TableCell component="th" scope="row" align="center"><HistoryIcon color="primary"/></TableCell> 
                        <TableCell component="th" scope="row" className={classes.Tablerow}>{props.description}</TableCell>
                        <TableCell align="center" className={classes.Tablerow}>{props.donationType}</TableCell>
                        <TableCell align="center" className={classes.Tablerow}>{props.createdAt}</TableCell>
                        <TableCell align="center" className={classes.Tablerow}>{props.donate_at}</TableCell>
                        <TableCell align="center">
                        <IconButton aria-label="delete"  onClick={handleClickOpen} value={props.donertblid} >
                                <DeleteIcon
                               textDecoration="none"
                                color="secondary"
                                 />
                        </IconButton>

                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">Please confirm you delete this history.</DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        No
                                    </Button>
                                    <Button  onClick={handleConfirm} color="primary" autoFocus>
                                        Confirm
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            </TableCell>
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
                        <TableCell className={classes.TableHead} align="center">Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {donhistory.map((row) => (
                        <Tble description={row.description} donationType={row.donationType} createdAt={row.createdAt} donate_at={row.donate_at} donertblid={row.id}/>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        
        

        </div>
    );
}