import React ,{useEffect, useState} from 'react';
import Note from '../../image/note.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import  Button from '@material-ui/core/Button';
import {ContactDetails,Description} from './Product_View_D_note';
import axios from "axios";
import { useLocation } from 'react-router';

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
    const [description,setDescription] = useState();
    const [title,setTitle] = useState();
    const [postdate, setDate] = React.useState();
    const [price, setPrice] = React.useState();
    const [show_or_hide_details, setHideDetails] = React.useState();
    const [lesson,setLesson] = useState();
    const [year,setYear] = useState();
    const [subject,setSubject] = useState();
    const search = useLocation().search;

    const product_id = new URLSearchParams(search).get("id");
    const userData=JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
    const email = userData.email;
    const username = userData.username;
    const userType = userData.userType;
    const contactnumber = userData.contactnumber;
   
    

    useEffect(() => {
        
        fetchDescription(product_id);
        fetchDetails(product_id);
    },[]);

    const fetchDescription = (product_id) => {
        const description={
            "product_id": product_id,
        }
        axios.post("http://localhost:5000/api/products/viewdetail",description,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data);
                setDescription(response.data[0].description);
                setDate(response.data[0].postdate);
                setPrice(response.data[0].price);
                setHideDetails(response.data[0].show_or_hide_details);
                setTitle(response.data[0].title);
                
            })
    };

    const fetchDetails = (product_id) => {
        const details={
            "product_id": product_id,
            "p_type":'p_note'
        }
        axios.post("http://localhost:5000/api/products/viewdetailmore",details,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data);
                setLesson(response.data[0].lesson);
                setSubject(response.data[0].subject);
                setYear(response.data[0].year);
                
            })
    };

    
  const tabContactDetailsButton =() =>{
    if(show_or_hide_details === 0 ){
      return(
        <>
        <ContactDetails email={email} username={username} userType={userType} contactnumber={contactnumber}/>
        </>
      );
    }

  }


    return(
        <div>
                    <Grid container spacing={2}>
                <Description  lesson={lesson} subject={subject} year={year} description = {description} title={title} postdate={postdate} price={price} show_or_hide_details={show_or_hide_details}/>
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
                        {tabContactDetailsButton()}
                        
                        </Grid>
                        <Grid item sm={12} md={5} xs={12}>
                            
                        <Card className={classes.card}>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                                <CardContent>
                                   
                                <Grid container spacing={0} alignItems="center" justify="center">
                                   
                                {/* <Grid item >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component="label"
                                        className={classes.contactbtn}
                                        >
                                        Add Cart
                                    </Button>
                                    </Grid> */}
                                    
                                    <Grid item > 
                                    <Button style={{maxWidth: '400px', maxHeight: '40px', minWidth: '400px', minHeight: '40px'}}
                                        variant="contained"
                                        color="primary"
                                        component="label"
                                        //size="large"
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