import React from 'react';
import Note from '../../image/laptopHP.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import  Button from '@material-ui/core/Button';
import {ContactDetails,Description} from './Product_View_D';

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
      cartbtn:{
         // marginLeft:1000,
      },
  
  }));

export default function View_Clothcause(){
    const classes = useStyles();
    return(
        <div>
                    <Grid container spacing={2}>
                    <Description />
                        <Grid item sm={12} md={5} xs={12}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    src= { Note}
                                />   
                            </Card>
                        </Grid>
                        
                        
                        
                        
                    </Grid>
                    

                    <Grid container spacing={2} >
                    
                        <Grid item sm={12} md={7} xs={12}>
                        <ContactDetails/>
                        </Grid>
                        <Grid item sm={12} md={5} xs={12}>
                            
                        <Card className={classes.card}>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                                <CardContent>
                                   
                                <Grid container spacing={3} >
                                   
                                <Grid item >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component="label"
                                        className={classes.contactbtn}
                                        >
                                        Add Cart
                                    </Button>
                                    </Grid>
                                    
                                    <Grid item > 
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component="label"
                                        className={classes.contactbtn}
                                        >
                                        Buy It Now
                                    </Button>
                                    </Grid>
                                    
                                    </Grid>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
                        
                        
                    </Grid>
        </div>
    );
}