import React ,{useEffect, useState} from 'react';
import Note from '../../image/other.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import  Button from '@material-ui/core/Button';
import {ContactDetails,Description} from './Product_View_D_other';
import axios from "axios";
import {useHistory } from "react-router-dom";
import { useLocation } from 'react-router';
import {useSnackbar} from "notistack";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      }, flex1: {
        flexGrow: 1,
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      title:{
        color:"#546e7a",
        marginTop:10,
        marginBottom:20,
        fontFamily:"Poppins, sans-serif",
      },

      card:{
        backgroundColor:"white",
        border:"none",
        boxShadow:"none"
      },

      labelname: {
          marginLeft:40,
          marginBottom:10,
          color:"000000",
          fontFamily:"Poppins, sans-serif",
          width:"150px"
      },

      labelvalue:{
        marginLeft:100,
        marginBottom:10,
        color:"000000",
        fontFamily:"Poppins, sans-serif",
        width:"200px"
      },

      contactbtn:{
          textTransform:"none",
          fontFamily:"Poppins, sans-serif",
      },
      cartbtn:{
         // marginLeft:1000,
      },
  
  }));

export default function View_Clothcause(){
    const classes = useStyles();
    const [description,setDescription] = useState();
    const [title,setTitle] = useState();
    const [postdate, setDate] = React.useState();
    const [price, setPrice] = React.useState();
    const [show_or_hide_details, setHideDetails] = React.useState();
    const [information_product,setInformation] = useState();
    const search = useLocation().search;
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const {enqueueSnackbar, closeSnackbar } = useSnackbar();

    const product_id = new URLSearchParams(search).get("id");
    var imglink = "http://localhost:5000/product/"+product_id+".jpg";
    const userData=JSON.parse(localStorage.getItem("userData"));
    const user_id = userData.id;
    console.log(userData);
    const email = userData.email;
    const username = userData.username;
    const userType = userData.userType;
    const contactnumber = userData.contactnumber;
   
    

    useEffect(() => {
        
        fetchDescription(product_id);
        fetchDetails(product_id);
    },[]);

    const fetchDescription = (product_id) => {
        const description={
            "product_id": product_id,
        }
        axios.post("http://localhost:5000/api/products/viewdetail",description,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data);
                setDescription(response.data[0].description);
                setDate(response.data[0].postdate);
                setPrice(response.data[0].price);
                setHideDetails(response.data[0].show_or_hide_details);
                setTitle(response.data[0].title);
                
            })
    };

    const fetchDetails = (product_id) => {
        const details={
            "product_id": product_id,
            "p_type":'p_other'
        }
        axios.post("http://localhost:5000/api/products/viewdetailmore",details,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data);
                setInformation(response.data[0].information_product);
                
            })
    };


    

    
  const tabContactDetailsButton =() =>{
    if(show_or_hide_details === 0 ){
      return(
        <>
        <ContactDetails email={email} username={username} userType={userType} contactnumber={contactnumber}/>
        </>
      );
    }

  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = (event) => {
    setOpen(false);     
    event.preventDefault(); 
  
    console.log("Payment Done------------------")
              const payHereData = {
                  sandbox: true,
                  merchant_id: "1217629", // Replace your Merchant ID
                  return_url: "http://localhost:3000/login", // Important
                  cancel_url: "http://localhost:3000/login", // Important
                  notify_url: "http://localhost:3000/login",
                  order_id: product_id,
                  items: title,
                  amount: price,
                  currency: "LKR",
                  first_name: userData.fname,
                  last_name: userData.lname,
                  email: userData.email,
                  phone: userData.contactnumber,
                  address:"UCSC,Colombo",
                  city: "Colombo",
                  country: "Sri Lanka",
                  delivery_address:"UCSC,Colombo",
                  delivery_city: "Colombo ",
                  delivery_country: "Sri Lanka",
                  custom_1:product_id,
                  custom_2: "",
              };
              window.payhere.startPayment(payHereData); 
  
              
      window.payhere.onCompleted = function onCompleted(product_id) {
        console.log("Payment Done!---------------------------------")
        const details={
            "product_id": product_id,
            "amount":price
        }
        axios.post("http://localhost:5000/api/products/payProductPost",details,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            console.log("Payment Done!")
            console.log(response.data);
           //setCurramount(amont);
            //setDonateamount("");
            enqueueSnackbar('Thank you for your Payment!!', {
                variant: 'success', anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'center',
                }
            });
  
  
            const updateproduct={
              "user_id":user_id,
              "product_id": product_id,
            }
            axios.post("http://localhost:5000/api/products/updateProductTable",updateproduct,{
              headers:{
                  "access-control-allow-origin" : "*",
                  "Content-type": "application/json; charset=UTF-8"
                }
              }).then((response) => {
                if(response.data === 'success'){
                  console.log("hkjkdf");
                  console.log(product_id);
                  enqueueSnackbar('Successfully Deleted', {
                    variant: 'success', anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'center',
                    }
                  })
            
                  if(userData.userType === "STUDENT"){
                    history.push("/std/ViewProductEle") ;
                  }
                  else if(userData.userType === "UNIONST" ){
                    history.push("/ustd/ViewProductEle");
                  }
            
                }
            });
            
  
        })
    }
  
    window.payhere.onDismissed = function onDismissed() {
      //Note: Prompt user to pay again or show an error page
      console.log("Payment dismissed");
  };
  
  
  
    
  }


    return(
        <div>
                    <Grid container spacing={2}>
                <Description  information_product={information_product} description = {description} title={title} postdate={postdate} price={price} show_or_hide_details={show_or_hide_details}/>
                        <Grid item sm={12} md={5} xs={12}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    src= {imglink}
                                />   
                            </Card>
                        </Grid>
                        
                        
                        
                        
                    </Grid>
                    

                    <Grid container spacing={2} >
                    
                        <Grid item sm={12} md={7} xs={12}>
                        {tabContactDetailsButton()}
                        
                        </Grid>
                        <Grid item sm={12} md={5} xs={12}>
                            
                        <Card className={classes.card}>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                                <CardContent>
                                   
                                <Grid container spacing={0} alignItems="center" justify="center">
                                   
                                {/* <Grid item >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component="label"
                                        className={classes.contactbtn}
                                        >
                                        Add Cart
                                    </Button>
                                    </Grid> */}
                                    
                                    <Grid item > 
                                    <Button style={{maxWidth: '400px', maxHeight: '40px', minWidth: '400px', minHeight: '40px'}}
                                        variant="contained"
                                        color="primary"
                                        component="label"
                                        onClick={handleClickOpen}
                                        //size="large"
                                        className={classes.contactbtn}
                                        >
                                        Buy It Now
                                    </Button>
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">Please confirm you Pay the Product.</DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose} color="primary">
                                                No
                                            </Button>
                                            <Button onClick={handleConfirm} color="primary" autoFocus>
                                                Confirm
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    </Grid>
                                    
                                    </Grid>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
                        
                        
                    </Grid>
        </div>
    );
}