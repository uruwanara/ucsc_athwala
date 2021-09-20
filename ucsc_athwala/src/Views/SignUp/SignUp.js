import {React,useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import logo from "../Signin/Img/logo.png";
import axios from 'axios';
import { useSnackbar } from 'notistack';
import {Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/119733265_3377356858978307_7759425616843007706_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=98NBjlTBdRAAX996OsT&tn=TgQSIojRGtZoR7fA&_nc_ht=scontent.fcmb1-2.fna&oh=89aa1d043cb060cd48e8482255e9c04d&oe=616F1448)',
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

export default function SignUp() {
    const classes = useStyles();

    const history =useHistory();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConPassword] = useState("");
    const [ustype, setUsrType] = useState("");
    const [contact, setContact] = useState("");
    let ustatus="";
    // eslint-disable-next-line
    const {enqueueSnackbar, closeSnackbar } = useSnackbar();

    const signUp=()=>{
        if(ustype=="ALUMNI" || ustype=="COUNSELLOR"){
            ustatus="notactive";
        }else{
            ustatus="active";
        }

        if(fname==""||lname==""||email==""||contact==""||password==""||conpassword==""){
            enqueueSnackbar('Pleasse Fill all the Fields', {
                variant: 'error',anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
        }
        else if(contact.length<9){
            enqueueSnackbar('Please Cehck the Contact Number', {
                variant: 'error',anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
        }
        else if(!password == conpassword){
            enqueueSnackbar('Passwords Not matched', {
                variant: 'error',anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
        }else if(!(email.includes("@stu.ucsc.cmb.ac.lk")|| email.includes("@ucsc.lk"))){
            enqueueSnackbar('Email Not Valid. Use your UCSC Email', {
                variant: 'error',anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });

        }else{
        const user={
            "username": fname+lname,
            "fname": fname,
            "lname": lname,
            "userType": ustype,
            "email": email,
            "password": password,
            "contactnumber":contact,
            "status":ustatus
        }
        axios.post("http://localhost:5000/api/users/create",user,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response)=>{
            console.log(response.data.data.userType);
                history.push("/everify");

        }).catch((err)=>{

        })
    }
    }


    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <div><img src={logo} className="signInLogo" alt="UCSC LOGO" /></div>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={(e) => {setFname(e.target.value)}}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={(e) => {setLname(e.target.value)}}
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
                                autoComplete="email"
                                onChange={(e) => {setEmail(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Contact Number"
                                name="contact"
                                autoComplete="contact"
                                onChange={(e) => {setContact(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => {setPassword(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Confirm Password"
                                type="password"
                                id="conpassword"
                                autoComplete="current-conpassword"
                                onChange={(e) => {setConPassword(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={userTypes}
                                getOptionLabel={(option) => option.uType}
                                style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="I am a" variant="outlined" />}
                                onChange={(e,newValue) => {setUsrType(newValue.name)}}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={signUp}
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/login" >
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            </Grid>
        </Grid>


    );
}

const userTypes= [{ uType: 'UCSC Student',name:"STUDENT"},{ uType: 'UCSC Alumni',name:"ALUMNI"},{ uType: 'UCSC Counsellor',name:"COUNSELLOR"}];