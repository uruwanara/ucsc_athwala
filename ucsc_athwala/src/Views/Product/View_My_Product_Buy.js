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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import  Button from '@material-ui/core/Button';
import {useSnackbar} from "notistack";
import {useHistory } from "react-router-dom";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {Link} from "react-router-dom";
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

export default function My_product_Buy(){
    const classes = useStyles();
    const history = useHistory();
    const [buyhistory, setBuyHistory] = useState([]);
    const [product_id, setProductId] = useState();
    const {enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [open, setOpen] = React.useState(false);
    const userData=JSON.parse(localStorage.getItem("userData"));

    useEffect(() => {
    
        fetchHistory();
      },[]);

    const fetchHistory = () => {

        const markstatus={
            "id": userData.id,
            
        }
        axios.post("http://localhost:5000/api/products/viewmyallBuyProduct",markstatus,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data);
                setBuyHistory(response.data)
                //setProductId(response.data[0].product_id)
                if(response.data === 'success'){
                  console.log("ddddddd");
                  //setColor("secondary");
                  //Setbuttontxt("Received");
                  //setStatus("Received");
                }
        });


        
    
        // axios.get("http://localhost:5000/api/products/viewmyallBuyProduct", {
        // params: {id:user_id},
        // }).then((response) => {
        //     console.log(response.data);
        //     //setBuyHistory(response.data)
        //     //setProductId(response.data[0].product_id)
        // })
    }

    
    function Tble(props){

        const handleClickOpen = (event) => {
            event.preventDefault(); 
            //console.log(event.target.value);
            setOpen(true);
          };
          const handleClose = () => {
            setOpen(false);
          };
    
        //   const handleConfirm1 = value => console.log(value);
        
          const handleConfirm = (event) => {
            console.log(props.id);
            //setProductId(event.target.value);
            setOpen(false);     
            event.preventDefault(); 
            
        
          const deletedonation={
            "product_id": props.id,
          }
          axios.post("http://localhost:5000/api/products/deleteProductHistory",deletedonation,{
              headers:{
                  "access-control-allow-origin" : "*",
                  "Content-type": "application/json; charset=UTF-8"
                }
              }).then((response) => {
                  if(response.data === 'success'){
                    console.log("hkjkdf");
                    //console.log(product_id);
                    enqueueSnackbar('Successfully Deleted', {
                      variant: 'success', anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                      }
                    })
        
                    // if(userData.userType === "STUDENT"){
                    //   history.push("/std/viewMyrequest") ;
                    // }
                    // else if(userData.userType === "UNIONST" ){
                    //   history.push("/ustd/viewMyrequest");
                    // }
                    fetchHistory();
                  }
          });
            
          }
    
        
        return(
            
            <TableRow key={props.id}>
                
                        <TableCell component="th" scope="row" align="center"><HistoryIcon color="primary" /></TableCell> 
                        <TableCell align="center" className={classes.Tablerow}>{props.description}</TableCell>
                        <TableCell align="center" className={classes.Tablerow}>{props.type}</TableCell>
                        <TableCell align="center" className={classes.Tablerow}>{props.price}</TableCell>
                        <TableCell align="center" className={classes.Tablerow}>{props.postdate}</TableCell>
                        <TableCell align="center" className={classes.Tablerow}>{props.pay_data}</TableCell>
                        <TableCell align="center">  
                            <IconButton aria-label="delete"  onClick={handleClickOpen} value={props.id} >
                                <DeleteIcon
                               textDecoration="none"
                                color="secondary"
                                // value={props.id}
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
            <div><Typography variant="h5" className={classes.title}>Product History</Typography></div>
            <div><Typography variant="subtitle1" className={classes.title}>Thank you for your Buying!!</Typography></div>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="a dense table">
                    <TableHead >
                    <TableRow>
                    <TableCell className={classes.TableHead}align="center"></TableCell>
                        <TableCell className={classes.TableHead}align="center">Product details</TableCell>
                        <TableCell className={classes.TableHead}align="center">Type</TableCell>
                        <TableCell className={classes.TableHead} align="center">Price</TableCell>
                        <TableCell className={classes.TableHead} align="center">Posted date</TableCell>
                        <TableCell className={classes.TableHead} align="center">Payment date</TableCell>
                        <TableCell className={classes.TableHead} align="center">Delete</TableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {buyhistory.map((row) => (
                        <Tble pay_data={row.pay_date} description={row.description} price={row.price} id={row.product_id } type={row.product_type} postdate={row.postdate}/>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        
        

        </div>
    );
}