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
                        <Grid item xs={6}>
                        <Card className={classes.card}>
                                <CardContent >
                                    <Typography variant="h3" className={classes.title}>
                                    Course fees
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.title}>
                                    I'm a second year student. I follow Bussiness Managment course. 
                                    i did some part time job to pay the fees but due to this pandemic situation 
                                    i couldn't find my fees. i have to pay the course fees in next month. 
                                    so if someone like to help, please donate me.
                                    </Typography>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} >
                        <Grid item xs={6}>
                            <Card className={classes.card}>
                            <CardContent>
                                    <Typography variant="h5" className={classes.title}>
                                       Donee's details
                                    </Typography>
                                    <div style={{display:"flex"}}>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelname}>Amount </Typography> 
                                        </div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelvalue}>7800</Typography> 
                                        </div>  
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelname}>Special Note </Typography> 
                                        </div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelvalue}>Imdeiate</Typography> 
                                        </div>  
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelname}>Before around</Typography> 
                                        </div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelvalue}>2021-10-13</Typography> 
                                        </div>  
                                    </div>
                                    
                                    
                                </CardContent>    
                            </Card>
                        </Grid>
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