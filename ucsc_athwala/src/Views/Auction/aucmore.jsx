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
                                        Laptop 
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.title}>
                                         <br />
                                        <p>intel® Core i5-10210U (up to 4.2 GHz  6 MB 4 cores) processor.</p>  
                                        <p>8 GB DDR4-2666 SDRAM(1x8GB), 1 TB 5400 RPM HDD.</p>
                                        <p>1 TB 5400 RPM HDD.</p>
                                        <p>TB 5400 rpm SATA HDD Fingerprint Sensor.</p>
                                        
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
                    <Typography variant="h5" className={classes.title}>Auction details</Typography>
                    {/* <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Study year</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>2 nd year</Typography></div>  
                    </div> */}
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Base Price</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>40,000/=</Typography></div>  
                    </div>
                    {/* <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Current Highest Bid</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>65,000/=</Typography></div>  
                    </div> */}
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Days remaining</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>13</Typography></div>  
                    </div>                    
                </CardContent>    
            </Card>
        </Grid>
    )
}

