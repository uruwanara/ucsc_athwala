import {React,useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import logo from "../Signin/Img/ico.png";
import axios from 'axios';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://scontent.fcmb1-1.fna.fbcdn.net/v/t1.6435-9/119733265_3377356858978307_7759425616843007706_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeH4zHk2QcUwpxtAImp6TAKjSIjK6TcF3wpIiMrpNwXfCl9fxPaj8eRFswK0TgYRGVMZqVW2F6bildI36NiO9FdD&_nc_ohc=jgXMksd7s1EAX-03o5W&_nc_ht=scontent.fcmb1-1.fna&oh=53d0f57c6960350d316714c28497c3c2&oe=60F478C8)',
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

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ustype, setUsrType] = useState("");

    // eslint-disable-next-line
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();


    const signUp=()=>{
        if(!(email.includes("@stu.ucsc.cmb.ac.lk")|| email.includes("@ucsc.lk"))){
            enqueueSnackbar('Email Not Valid', {
                variant: 'error',anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
            return;
        }
        const user={
            "username": fname+lname,
            "fname": fname,
            "lname": lname,
            "userType": ustype,
            "email": email,
            "password": password
        }
        axios.post("http://localhost:5000/api/users/create",user,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response)=>{
            console.log(response.data);
            if(response.data.data.userType==="STUDENT"){
                //history.push("/stddashboard");
            }else if (response.data.data.userType==="ALUMNI"){
                alert("Alumni");
            }else if (response.data.data.userType==="COUNSELLOR"){
                alert("Counsellor");
            }


            //
            // if(response.status==="sucsess"){
            //     //redirect
            // }else  if(response.status==="unauthorized") {
            //     //Notistact
            // }
        }).catch((err)=>{
            enqueueSnackbar(err.message, {
                variant: 'error',anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },

                // Please sign in notistack

            });;
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
                                onclick={(e) => {setFname(e.target.value)}}

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
                                onclick={(e) => {setLname(e.target.value)}}
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
                                onclick={(e) => {setEmail(e.target.value)}}
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
                                onclick={(e) => {setPassword(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={userTypes}


                                getOptionLabel={(option) => option.uType}
                                style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="I am a" variant="outlined" />}
                                onclick={(e) => {setUsrType(e.target.value)}}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={"signUp"}
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
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