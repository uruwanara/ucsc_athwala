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
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import BorderColorIcon from '@material-ui/icons/BorderColor';

const useStyles = makeStyles((theme) => ({
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
      },
      paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        width:"100%"
      },
  
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
    const [status, setStatus] = useState();

    const donationid = new URLSearchParams(search).get("id");
    
    const progress = (curramount/amount)*100;
    const {enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [donateamount, setDonateamount] = React.useState();
    const userData=JSON.parse(localStorage.getItem("userData"));

    const [fname,setFname] = useState();
    const [lname,setLname] = useState();
    const [email,setEmail] = useState();
    const [mobile,setMobile] = useState();

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
        const rx_float = /^[+-]?\d*(?:[.,]\d*)?$/;   
        var totalamont = parseFloat(curramount) + parseFloat(donateamount);

        if(rx_float.test(donateamount) === false){
            console.log('im not float');
            enqueueSnackbar('Please enter valid amount', {
                variant: 'error', anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'center',
                }
            });
            setDonateamount("");
        }
        
        else if(parseFloat(donateamount) <= 0){
            enqueueSnackbar('Please enter value for donate', {
                variant: 'error', anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'center',
                }
            });
            setDonateamount("");
        }

        else if(totalamont > amount){
            let restamount = parseFloat(amount) - parseFloat(curramount)
            enqueueSnackbar('Please donate Rs:'+restamount+' or less amount', {
                variant: 'error', anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'center',
                }
            });
            setDonateamount("");
        }

        else{
            console.log("Payment Done------------------")
            const payHereData = {
                sandbox: true,
                merchant_id: "1217629", // Replace your Merchant ID
                return_url: "http://localhost:3000/login", // Important
                cancel_url: "http://localhost:3000/login", // Important
                notify_url: "http://localhost:3000/login",
                order_id: dId,
                items: title,
                amount: donateamount,
                currency: "LKR",
                first_name: fname,
                last_name: lname,
                email: email,
                phone: mobile,
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
        }
        
    };
    console.log(parseFloat(curramount) + parseFloat(donateamount));
    let amont=parseFloat(curramount) + parseFloat(donateamount);

    window.payhere.onCompleted = function onCompleted(dId) {
        console.log("Payment Done!---------------------------------")
        const details={
            "dId": donationid,
            "amount":amont
        }
        axios.post("http://localhost:5000/api/donations/pay",details,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            console.log("Payment Done!")
            console.log(response.data);
            setCurramount(amont);
            setDonateamount("");
            setFname("");
            setLname("");
            setEmail("");
            setMobile("")
            enqueueSnackbar('Thank you for your donation!!', {
                variant: 'success', anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'center',
                }
            });

        })
    }
    window.payhere.onDismissed = function onDismissed() {
        //Note: Prompt user to pay again or show an error page
        console.log("Payment dismissed");
    };


    return(
        <div className={classes.content}>
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
                        />

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
                                        {/* <form>
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
                                        </form> */}

                                    </div>
                                    
                                    
                                    </div>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
                    </Grid>

                    <Container component="main" maxWidth="sm">
      <CssBaseline />

                            <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <BorderColorIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                Donation Form
                                </Typography>

                                <form className={classes.form}>
                                <Grid container spacing={2}>

                                    <Grid item xs={12} >
                                    <TextField
                                        autoComplete="fname"
                                        name="fname"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="fname"
                                        label="First Name"
                                        value={fname}
                                        onChange={e => setFname(e.target.value)}
                                    />
                                    </Grid>

                                    <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lname"
                                        label="Last Name"
                                        name="lname"
                                        value={lname}
                                        autoComplete="lname"
                                        onChange={e => setLname(e.target.value)}
                                    />
                                    </Grid>

                                    <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        value={email}
                                        autoComplete="email"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    </Grid>

                                    <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="mobile"
                                        label="Mobile Number"
                                        value={mobile}
                                        id="brand"
                                        autoComplete="mobile"
                                        onChange={e => setMobile(e.target.value)}
                                    />
                                    </Grid>
                                    
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
                                    <Grid item xs={12} >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component="label"
                                            className={classes.submit}
                                             onClick={handleDonate}
                                            >
                                             Donate
                                        </Button>
                                    </Grid>
                                </Grid>
                                        
                                
                                </form>
                            </div>
                            </Container>

        </div>
    );
}