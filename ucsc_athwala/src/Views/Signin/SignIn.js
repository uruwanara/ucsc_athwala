import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from './Img/logo.png';
import '../../css/style.css';
import Paper from "@material-ui/core/Paper";
import {Link, useHistory } from "react-router-dom";
import {useSnackbar} from "notistack";
import axios from "axios";

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


  const signin=()=>{
        const user={
          "email": email.toUpperCase(),
          "password": password
    }
    console.log(user);
    axios.post("http://localhost:5000/api/login",user,{
      headers:{
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((response)=>{
      console.log(response.data.data.userType);
      console.log(response.data.data.fname)
      console.log(response.data.status);
      localStorage.setItem("userData",JSON.stringify(response.data.data))

      if(response.data.status==="success"){
        if(response.data.data.userType==="STUDENT"){
          console.log("1");
          history.push("/std/stddashboard");
        }else if (response.data.data.userType==="ALUMNI"){
          history.push("/pst/PastDashboard");
        }else if (response.data.data.userType==="COUNSELLOR"){
          history.push("/coun/Coundashboard");
        }else if(response.data.data.userType==="UNIONST"){
          history.push("/ustd/ustddashboard");
        }else if(response.data.data.userType==="ADMIN"){
          history.push("/admin/admindashboard");
        }
      }else if(response.data.status==="unauthorized") {
        enqueueSnackbar('Please Sign In to your Email and Verify the account', {
          variant: 'error', anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          }
        })
      }


    }).catch((err)=>{
        console.log((err.message));
      if(err.message==="Request failed with status code 401"){
      enqueueSnackbar("Please Verify Your Email", {
        variant: 'error',anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })}
      if(err.message==="Request failed with status code 406"){
        enqueueSnackbar("Please Contact Admin for the Account-Approval", {
          variant: 'error',anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })}
      if(err.message==="Request failed with status code 403"){
        enqueueSnackbar("Your Account is Dactivated.Please Contact Admin.", {
          variant: 'error',anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })}
      if(err.message==="Request failed with status code 500"){
        enqueueSnackbar("Email Not Found Please Sign Up", {
          variant: 'error',anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })}
    })

  }


  return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <div><img src={logo} className="signInLogo" alt="UCSC LOGO" /></div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e) => {setEmail(e.target.value)}}
            autoFocus

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {setPassword(e.target.value)}}
          />
          {/*<FormControlLabel*/}
          {/*  control={<Checkbox value="remember" color="primary" />}*/}
          {/*  label="Remember me"*/}
          {/*/>*/}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signin}
                     >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/*<Link href="#" variant="body2">*/}
              {/*  Forgot password?*/}
              {/*</Link>*/}
            </Grid>
            <Grid item>
              <Link to="/signup">"Don't have an account?Sign Up"</Link>
            </Grid>
          </Grid>
        </form>
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
