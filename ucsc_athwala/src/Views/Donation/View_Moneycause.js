import React ,{useEffect,useState} from 'react';
import './Donation.css';
import Money from '../../image/money.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress  from '@material-ui/core/LinearProgress';
import {MoneyDoneeDetails,Description} from './View_Casues';
import { useLocation } from 'react-router';
import axios from "axios";
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import {useSnackbar} from "notistack";
import {useHistory } from "react-router-dom";

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
        fontFamily:"Poppins, sans-serif",
        marginTop:'40px',
        marginBottom:'30px'
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

      progressbar:{
          marginTop:10,
          marginBottom:20,
      },
      progress:{
          height:8,
          borderRadius:10
      },
      subtitle:{
        fontFamily:"Poppins, sans-serif",
        fontSize:15
      }
  
  }));

export default function View_Clothcause(){
    const classes = useStyles();
    const history = useHistory();
    const [description,setDescription] = useState();
    const [title,setTitle] = useState();
    const [amount, setAmount] = React.useState();
    const [note, setNote] = React.useState();
    const [date, setDate] = React.useState();
    const [curramount , setCurramount] = React.useState();
    const [requestStudentid,setRequestStudentid] = useState();
    const search = useLocation().search;
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = useState();

    const donationid = new URLSearchParams(search).get("id");
    const userData=JSON.parse(localStorage.getItem("userData"));
    const progress = (curramount/amount)*100;
    const {enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [donateamount, setDonateamount] = React.useState();

    const [fname, Setfname] = useState();
    const [lname, Setlname] = useState();
    const [email, Setemail] = useState();
    const [contact , SetContact] = useState();

    useEffect(() => {
        
        fetchDescription(donationid);
        fetchDetails(donationid);
    },[]);
    let dId="";
    const fetchDescription = (donationid) => {
        dId=donationid;
        const description={
            "donationID": donationid,
        }
        axios.post("http://localhost:5000/api/donations/select",description,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data);
                setDescription(response.data[0].description);
                setTitle(response.data[0].title);
                setRequestStudentid(response.data[0].student_id);

                
                if(response.data[0].student_id){
                    const details={
                        "student": response.data[0].student_id,
                      }
            
                      axios.post("http://localhost:5000/api/donations/studentdetatils",details,{
                        headers:{
                            "access-control-allow-origin" : "*",
                            "Content-type": "application/json; charset=UTF-8"
                          }
                        }).then((respon) => {
                                console.log(respon.data[0]);
                                Setfname(respon.data[0].fname);
                                Setlname(respon.data[0].lname);
                                Setemail(respon.data[0].email);
                                SetContact(respon.data[0].contactnumber);
                        });
                }
            })
    };

    const fetchDetails = (donationid) => {
        const details={
            "donationID": donationid,
            "type":'money'
        }
        axios.post("http://localhost:5000/api/donations/view",details,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data);
                setAmount(response.data[0].amount);
                setNote(response.data[0].note);
                setDate(response.data[0].before_date);
                setCurramount(response.data[0].current_amount);
                setStatus(response.data[0].status);
            })
    };

    const handleDonate = (event) => {

        const payHereData = {
            sandbox: true,
            merchant_id: "1217629", // Replace your Merchant ID
            return_url: "http://localhost:3000/login", // Important
            cancel_url: "http://localhost:3000/login", // Important
            notify_url: "/admin/add-payment",
            order_id: dId,
            items: title,
            amount: donateamount,
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
            custom_1:dId,
            custom_2: "",
        };
        window.payhere.startPayment(payHereData);
    };
    window.payhere.onCompleted = function onCompleted(dId) {
        const details={
            "dId": dId,
            "amount":parseInt(curramount) + parseInt(donateamount)
        }
        axios.post("http://localhost:5000/api/donations/pay",details,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            console.log("Payment Done")
            console.log(response.data);

        })
    }
    window.payhere.onDismissed = function onDismissed() {
        //Note: Prompt user to pay again or show an error page
        console.log("Payment dismissed");
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setOpen(false);
        const deletedonation={
            "donationID": donationid,
        }
        axios.post("http://localhost:5000/api/donations/delete",deletedonation,{
      headers:{
          "access-control-allow-origin" : "*",
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then((response) => {
          if(response.data === 'success'){
            console.log("ddddddd");
            enqueueSnackbar('Successfully Deleted', {
              variant: 'success', anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
              }
            })

            if(userData.userType === "STUDENT"){
              history.push("/std/viewMyrequest") ;
            }
            else if(userData.userType === "UNIONST" ){
              history.push("/ustd/viewMyrequest");
            }

          }
  });
}
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return(
        <div>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    src= {Money}
                                />   
                            </Card>
                        </Grid>
                       <Description description={description} title={title}/>
                    </Grid>
                    

                    <Grid container spacing={2} >
                        <MoneyDoneeDetails amount={amount} note={note} date={date} requestStudentid={requestStudentid} 
                        userId = {userData.id}
                        status={status} 
                        open={open}
                        userType={userData.userType}
                        handleSubmit={handleSubmit}  
                        handleClickOpen={handleClickOpen} 
                        handleClose={handleClose}
                        fname={fname}
                        lname={lname}
                        email={email}
                        contact={contact}/>

                        <Grid item xs={6}>
                        <Card className={classes.card}>
                                <CardContent>
                                    <div >
                                        <Typography variant="h5" className={classes.title}>
                                        Donate Now
                                        </Typography>
                                        <Grid container spacing={2}>

                                            <Grid item md={6}>
                                                <Typography variant="subtitle2" color="initial" className={classes.subtitle}>
                                                    Current amount {curramount}
                                                </Typography>
                                            </Grid>
                                            <Grid item md={6}>
                                                <Typography variant="subtitle2" color="initial" className={classes.subtitle}>
                                                    Goal amount Rs. {amount}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div className={classes.progressbar}>
                                        <LinearProgress variant="determinate" value={progress} className={classes.progress}/> 
                                        </div>
                                    <div>
                                    <div>
                                        <form>
                                            <Grid container spacing={3}>
                                            <Grid item xs={12} >
                                                <TextField
                                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                                    variant="outlined"
                                                    fullWidth
                                                    id="d_amount"
                                                    label="amount"
                                                    name="d_amount"
                                                    value={donateamount}
                                                    autoComplete="d_amount"
                                                    onChange={e => setDonateamount(e.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                component="label"
                                                className={classes.contactbtn}
                                                onClick={handleDonate}
                                                >
                                                Donate
                                            </Button>
                                            </Grid>

                                            </Grid>
                                        </form>

                                    </div>
                                    
                                    
                                    </div>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
                    </Grid>
        </div>
    );
}