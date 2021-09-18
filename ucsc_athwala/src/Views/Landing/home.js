import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Landpic from '../../image/landpic.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth:'100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  navbutton:{
    textTransform:'none',
    fontFamily:"Poppins, sans-serif",
  },
  appbar:{
      backgroundColor:'#ffffff',
      color:'#3f51b5',
      borderBottom: '6px solid #3f51b5',
  },
  cover:{
    maxWidth:'100%',
    height:400,
    borderRadius:'50%',
  },
  bodycontainer:{
    height:500,
    backgroundColor:'#f5f5f5'
  },
  cardcontainer:{
    background:'transparent',
    borderRadius:'50%',
    border:'none',
    boxShadow:'none',
    marginTop:'20px'
  },
  title:{
    fontFamily: 'Lobster, cursive',
    fontSize:'60px',
    fontWeight:'bold',
    marginTop:'10px',
    textAlign:'center',
    color:'#3f51b5',
  },
  welcomemsg:{
    fontFamily: 'Lobster, cursive',
    fontSize:'50px',
    fontWeight:'bold',
    marginTop:'50px',
    marginBottom:'10px',
    color:'#e91e63',
    textAlign:'center',
  },
  welcomebody:{
    fontFamily:"Poppins, sans-serif",
    margin:'20px',
    color:'#000000',
    textAlign:'center',
    padding:'30px'
  }
 
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar >
            <Grid container xs={12}>
                <Grid item xs={9}>
                    <Button color="inherit" className={classes.navbutton}></Button>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/signup"><Button color="inherit" className={classes.navbutton}>Sign Up</Button></Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/login"><Button color="inherit" className={classes.navbutton}>Login</Button></Link>
                </Grid>
                <Grid item xs={1}>
                    <Button color="inherit" className={classes.navbutton}>Public user</Button>
                </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Grid container className={classes.bodycontainer}>
        <Grid xs={5}>
              <Card className={classes.cardcontainer}>
                  <CardMedia 
                    className={classes.cover}
                    image={Landpic}
                    title="Live from space album cover">
                  </CardMedia>
              </Card>
          </Grid>
          <Grid xs={7}>
          <Typography variant="h4" className={classes.welcomemsg}> Welcome to </Typography>
          <Typography variant="h4" className={classes.title}>UCSC අත්වැල  </Typography>
          <Typography variant="body1" className={classes.welcomebody}>this is a student supporting system which provide main functionality of 
          donation, product, auction, fundrasing to help the student community of UCSC.  </Typography>

          </Grid>
          
      </Grid>


    </div>
  );
}
