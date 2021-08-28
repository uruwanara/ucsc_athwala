import React from 'react';
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
      }, 
      flex1: {
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
   
  }));

export function Description(){
    const classes = useStyles();
    return(
                        <Grid item sm={12} md={7} xs={12}>
                        <Card className={classes.card}>
                                <CardContent >
                                    <Typography variant="h3" className={classes.title}>
                                        HP Laptop 
                                    </Typography>
                                    <Typography variant="h6" className={classes.title}>
                                        HP Probook 450 G5
                                    </Typography>
                                    <Typography variant="h6" className={classes.title}>
                                        Price : Rs. 60 000.00
                                    </Typography>
                                    <Typography variant="h6" className={classes.title}>
                                        Posted Date : 2021-07-11
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.title}>
                                        10th generation Intel® Core™ i5-10210U (up to 4.2 GHz) processor. 
                                        8 GB DDR4-2666 SDRAM(1x8GB).
                                        15.6" diagonal FHD display.
                                        1 TB 5400 RPM HDD.
                                        Windows 10 Home.  
                                        HP Premium Keyboard, spill-resistant.
                                        Fingerprint Sensor.
                                        HP Long Life 3-cell, 45 Wh Li-ion Battery.
                                    </Typography>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
    )
}
   
export function ContactDetails(){
    const classes = useStyles();
    return(
        
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h4" className={classes.title}>Contact Details</Typography>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Name : </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>Nimasha</Typography></div>  
                        </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Batch No :</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>16 Batch</Typography> </div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Contact Number :</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>071 6119077</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Email:</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>nimashasupunpraba@gmail.com</Typography></div>  
                    </div>
                                                        
                </CardContent>    
            </Card>


           
     
    )
}

