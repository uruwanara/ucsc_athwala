import React from 'react';
import './Donation.css';
import Money from '../../image/money.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import  Button from '@material-ui/core/Button';
import LinearProgress  from '@material-ui/core/LinearProgress';
import {MoneyDoneeDetails,Description} from './View_Casues';

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

      progressbar:{
          marginTop:10,
          marginBottom:20,
      }
  
  }));

export default function View_Clothcause(){
    const classes = useStyles();
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
                       <Description />
                    </Grid>
                    

                    <Grid container spacing={2} >
                        <MoneyDoneeDetails />
                        <Grid item xs={6}>
                        <Card className={classes.card}>
                                <CardContent>
                                    <div >
                                        <Typography variant="h5" className={classes.title}>
                                        Donate Now
                                        </Typography>
                                        <Grid container spacing={6}>

                                            <Grid item md={6}>
                                                <Typography variant="subtitle2" color="initial" className={classes.title}>
                                                    Current amount Rs.3400
                                                </Typography>
                                            </Grid>
                                            <Grid item md={6}>
                                                <Typography variant="subtitle2" color="initial" className={classes.title}>
                                                    Goal amount Rs. 7800
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div className={classes.progressbar}>
                                        <LinearProgress variant="determinate" value={50} /> 
                                        </div>
                                    <div>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component="label"
                                        className={classes.contactbtn}
                                        >
                                        Donate now
                                    </Button>
                                    </div>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
                    </Grid>
        </div>
    );
}