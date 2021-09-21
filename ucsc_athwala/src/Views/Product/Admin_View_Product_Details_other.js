import React ,{useEffect, useState} from 'react';
import Note from '../../image/other.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import  Button from '@material-ui/core/Button';
import {ContactDetails,Description} from './Product_View_D_other';
import axios from "axios";
import { useLocation } from 'react-router';
import {useHistory } from "react-router-dom";
import {useSnackbar} from "notistack";

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
    const [information_product,setInformation] = useState();
    const search = useLocation().search;
    const [btncolor,setButton] = useState("primary");
    const [block,setBlock] = useState();

    const {enqueueSnackbar, closeSnackbar } = useSnackbar();
    const history = useHistory();

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
        axios.post("http://localhost:5000/api/products/haveBlockProductDetails",description,{
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
                setBlock(response.data[0].block);
                
            })
    };

    const fetchDetails = (product_id) => {
        const details={
            "product_id": product_id,
            "p_type":'p_other'
        }
        axios.post("http://localhost:5000/api/products/viewdetailmore",details,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data);
                setInformation(response.data[0].information_product);
                
            })
    };


    const tabAdminButton =() =>{
        if(userData.userType === "STUDENT" ||userData.userType === "UNIONST" || userData.userType === "ALUMNI"){
          return(
            <Button style={{maxWidth: '400px', maxHeight: '40px', minWidth: '400px', minHeight: '40px'}}
              variant="contained"
              color="primary"
              component="label"
              //size="large"
              className={classes.contactbtn}
              >
              Buy It Now
            </Button>
          );
        }else if(userData.userType === "ADMIN"){
  
          if(block === 0){
  
          
  
          const BlockClickPost = (event) => {
          
            event.preventDefault(); 
            const description={
                "product_id": product_id,
            }
            axios.post("http://localhost:5000/api/products/blockProductPost",description,{
                headers:{
                    "access-control-allow-origin" : "*",
                    "Content-type": "application/json; charset=UTF-8"
                  }
                }).then((response) => {
                  if(response.data === 'success'){
                    console.log("hkjkdf");
                    console.log(product_id);
                    enqueueSnackbar('Successfully Blocked', {
                      variant: 'success', anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                      }
                    })
                    setButton("secondary");
                    if(userData.userType === "ADMIN"){
                      
                      history.push("/admin/ViewAdminProductDetailsOther?id="+product_id) ;
                    }
                  
        
                  }
                    
                })
        };
  
          return(
            <Button style={{maxWidth: '400px', maxHeight: '40px', minWidth: '400px', minHeight: '40px'}}
              variant="contained"
              color={btncolor}
              component="label"
              onClick={BlockClickPost}
              //size="large"
              className={classes.contactbtn}
              >
              Block Post
            </Button>
          );
        }else{
          return(
          <Button style={{maxWidth: '400px', maxHeight: '40px', minWidth: '400px', minHeight: '40px'}}
              variant="contained"
              color="secondary"
              component="label"
              
              //size="large"
              className={classes.contactbtn}
              >
              Block Post
            </Button>
           );  
        }
      }
    
      }
      

    
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
                <Description  information_product={information_product} description = {description} title={title} postdate={postdate} price={price} show_or_hide_details={show_or_hide_details}/>
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
                                    {tabAdminButton()}
                                    </Grid>
                                    
                                    </Grid>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
                        
                        
                    </Grid>
        </div>
    );
}