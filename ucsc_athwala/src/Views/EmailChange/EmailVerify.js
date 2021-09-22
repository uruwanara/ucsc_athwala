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
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://i.ytimg.com/vi/rKoz-ncPdNk/maxresdefault.jpg)',
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

export default function SignUp(props) {
    const classes = useStyles();

    const history =useHistory();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConPassword] = useState("");
    const [ustype, setUsrType] = useState("");
    const [contact, setContact] = useState("");

    // eslint-disable-next-line
    const {enqueueSnackbar, closeSnackbar } = useSnackbar();

    const signUp=()=>{
        if(!( password == conpassword)) {
            enqueueSnackbar('New Email Not Matched!', {
                variant: 'error', anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
        }
        const user={
            "email": email,
            "newEmail": password
        }
        axios.post("http://localhost:5000/api/users/create",user,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response)=>{
            console.log(response.data.data.userType);
            if(response.data.data.userType==="STUDENT"){
                history.push("/stddashboard");

            }else if (response.data.data.userType==="ALUMNI"){
                alert("Alumni");
            }else if (response.data.data.userType==="COUNSELLOR"){
                alert("Counsellor");
            }
        }).catch((err)=>{

        })

    }


    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <div><img src={logo} className="signInLogo" alt="UCSC LOGO" /></div>

                    <Box color="error.main"> Your Account is transfered as an Alumni Account. Please Insert Your personal Email instad of the University Email
                        Thank You!</Box>
                    {/*<Typography component="h1" variant="h5">*/}
                    {/*    A Verfication Email is Sent to your inserted Email Address. Please use the Link to verify the Account.*/}
                    {/*    After Verfication Please Sign in again.*/}
                    {/*    Thank You!*/}
                    {/*</Typography>*/}
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="email"
                                    label="University Email"
                                    id="email"
                                    onChange={(e) => {setEmail(e.target.value)}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="New Email"
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
                                    label="Verify New Email"
                                    autoComplete="current-conpassword"
                                    onChange={(e) => {setConPassword(e.target.value)}}
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

                    </form>
                </div>
            </Grid>
        </Grid>


    );
}

const userTypes= [{ uType: 'UCSC Student',name:"STUDENT"},{ uType: 'UCSC Alumni',name:"ALUMNI"},{ uType: 'UCSC Counsellor',name:"COUNSELLOR"}];