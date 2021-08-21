import React from 'react';
import './Donation.css';
import { makeStyles } from '@material-ui/core/styles';
import Note from '../../image/note.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

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
      }
  
  }));

export function Description(){
    const classes = useStyles();
    return(
                        <Grid item xs={6}>
                        <Card className={classes.card}>
                                <CardContent >
                                    <Typography variant="h3" className={classes.title}>
                                        Topic of Donation 
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.title}>
                                        this is the descripton of Donation. students need to describe their problem. 
                                        this will help to other students to help with donation. 
                                    </Typography>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
    )
}

export function NoteDoneeDetails(){
    const classes = useStyles();
    return(
        <Grid item xs={6}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" className={classes.title}>Donee's details</Typography>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Study year</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>2 nd year</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Subject</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>DSA part 02</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Specific lessons</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>All the lessons</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Before around</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>2021-10-13</Typography></div>  
                    </div>                    
                </CardContent>    
            </Card>
        </Grid>
    )
}

export function ClothDoneeDetails(){
    const classes = useStyles();
    return(
        <Grid item xs={6}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" className={classes.title}>Donee's details</Typography>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Cloth type </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>Trouser</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Gender </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>Female</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Size</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>M (Width:20" Length:28")</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Before around</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>2021-10-13</Typography></div>  
                    </div>
                                    
                                    
                </CardContent>    
            </Card>
        </Grid>
    )
}

export function DeviceDoneeDetails(){
    const classes = useStyles();
    return(
        <Grid item xs={6}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" className={classes.title}>Donee's details</Typography>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Model of device </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>Android</Typography></div>  
                        </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Brand name </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>Any</Typography> </div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Before around</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>2021-10-13</Typography></div>  
                    </div>
                                    
                                    
                </CardContent>    
            </Card>
        </Grid>
    )
}

export function MoneyDoneeDetails(){
    const classes = useStyles();
    return(
        <Grid item xs={6}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" className={classes.title}>Donee's details</Typography>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Amount </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>7800</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Special Note </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>Imdeiate</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Before around</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>2021-10-13</Typography></div>  
                    </div>               
                </CardContent>    
            </Card>
        </Grid>
    )
}

export function OtherDoneeDetails(){
    const classes = useStyles();
    return(
        <Grid item xs={6}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" className={classes.title}>Donee's details</Typography>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Donation Amount </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>7800</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Before around</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>2021-10-13</Typography></div>  
                    </div>               
                </CardContent>    
            </Card>
        </Grid>
    )
}