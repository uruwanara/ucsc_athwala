import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from './Img/logo.png';
import '../../css/style.css';
import Paper from "@material-ui/core/Paper";
import {Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://scontent.fcmb1-1.fna.fbcdn.net/v/t1.6435-9/119608175_3377355348978458_3088964903465659305_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGEJb4QYzVtgaome7k3G-R662eiKDEisgfrZ6IoMSKyB-qvbRHVQJ_iNkFqD8X6fXTXqaMvQLMmMuAIcPCpGuc9&_nc_ohc=WARg-RpJSOsAX8fMVQg&_nc_ht=scontent.fcmb1-1.fna&oh=c3661e9ca255c741c2d85b4976af424f&oe=60F586D7)',
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
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button onClick={()=>{ history.push("/signup")}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
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
