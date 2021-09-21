import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '../../css/style.css';
import Paper from "@material-ui/core/Paper";
import {Link, useHistory } from "react-router-dom";
import {useSnackbar} from "notistack";
import axios from "axios";
import { useLocation } from 'react-router';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/79289467_2632454426801891_3087314512039116800_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=g-Q5Mh4e8TUAX-FrxfY&tn=TgQSIojRGtZoR7fA&_nc_ht=scontent.fcmb2-2.fna&oh=eb5cb4a4ce4204e788b01b5684b2324d&oe=616D7FAF)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // eslint-disable-next-line
    const {enqueueSnackbar, closeSnackbar } = useSnackbar();


    const search = useLocation().search;

    const lgId = new URLSearchParams(search).get("id");
    const userData=JSON.parse(localStorage.getItem("userData"));

    useEffect(() => {

        fetchDescription(lgId);
    },[]);
    let myframe=document.getElementById("frame");
    let em=""
    let jit="https://meet.jit.si/";
    let url="";
    let eml="";
    const fetchDescription = (lgId) => {
        const description={
            "id": lgId,
        }
        console.log(description)
        axios.post("http://localhost:5000/api/couns/find",description,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            console.log(response.data[0].email);
            eml=response.data[0].email;
            em = eml.substr(0, eml.indexOf('@'));
            url=jit.concat(em);
            console.log(em);
            document.getElementById("frame2").src=url;

        })
    };

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
             <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <iframe onLoad="iframeDidLoad()" id="frame2" allow="camera; microphone; display-capture" width="100%" height="800px" src=""></iframe>
                </div>

            </Grid>
        </Grid>
    );
}




//
//
// if(response.data.data.userType==="STUDENT"){
//   //history.push("/stddashboard");
// }else if (response.data.data.userType==="ALUMNI"){
//   alert("Alumni");
// }else if (response.data.data.userType==="COUNSELLOR"){
//   alert("Counsellor");
// }
//
//
// onChange={(e)=>{setEmail(e.target.value)}}
//
// onChange={(e,newValue)=>{setPassword(e.target.value)}}
//
//
//
// const signUp=()=>{
//   if(!(email.includes("@stu.ucsc.cmb.ac.lk")|| email.includes("@ucsc.lk"))){
//     enqueueSnackbar('Email Not Valid', {
//       variant: 'error',anchorOrigin: {
//         vertical: 'top',
//         horizontal: 'right',
//       },
//     });
//     return;
//   }
//   const user={
//     "username": fname+lname,
//     "fname": fname,
//     "lname": lname,
//     "userType": ustype,
//     "email": email,
//     "password": password
//   }
//   axios.post("http://localhost:5000/api/users/create",user,{
//     headers:{
//       "access-control-allow-origin" : "*",
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   }).then((response)=>{
//     // console.log(response.data);
//     // if(response.data.data.userType==="STUDENT"){
//     //     //history.push("/stddashboard");
//     // }else if (response.data.data.userType==="ALUMNI"){
//     //     alert("Alumni");
//     // }else if (response.data.data.userType==="COUNSELLOR"){
//     //     alert("Counsellor");
//     // }
//
//     if(response.status==="sucsess"){
//       //redirect
//     }else  if(response.status==="unauthorized") {
//       //Notistact
//     }
//   }).catch((err)=>{
//     enqueueSnackbar(err.message, {
//       variant: 'error',anchorOrigin: {
//         vertical: 'top',
//         horizontal: 'right',
//       },
//
//       // Please sign in notistack
//
//     });;
//   })
//
// }
//
