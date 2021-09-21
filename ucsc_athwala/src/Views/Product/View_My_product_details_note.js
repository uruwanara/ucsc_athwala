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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
    const [lesson,setLesson] = useState();
    const [year,setYear] = useState();
    const [subject,setSubject] = useState();
    const [p_type,setType] = useState();
    const search = useLocation().search;
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const {enqueueSnackbar, closeSnackbar } = useSnackbar();

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
                setType(response.data[0].product_type);
                
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


    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleConfirm = (event) => {
      setOpen(false);     
      event.preventDefault(); 
  
    const deletedonation={
        "product_id": product_id,
    }
    axios.post("http://localhost:5000/api/products/deleteProduct",deletedonation,{
        headers:{
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then((response) => {
          if(response.data === 'success'){
            console.log("hkjkdf");
            console.log(product_id);
            enqueueSnackbar('Successfully Deleted', {
              variant: 'success', anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
              }
            })

            if(userData.userType === "STUDENT"){
              history.push("/std/ViewMyProduct") ;
            }
            else if(userData.userType === "UNIONST" ){
              history.push("/ustd/ViewMyProduct");
            }

          }
    });
      
    }

    var editlink;
        
    if(userData.userType === "STUDENT"){
      editlink = "/std/EditNoteForm?id="+product_id+"&type="+p_type;
    }
    else if(userData.userType === "UNIONST" ){
      editlink = "/ustd/EditNoteForm?id="+product_id+"&type="+p_type;
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
                                   
                                <Grid container spacing={3} alignItems="center" justify="center">
                                   
                                 <Grid item >
                                  <Button   style={{maxWidth: '400px', maxHeight: '40px', minWidth: '400px', minHeight: '40px'}}
                                      variant="contained"
                                      color="Primary"
                                      component="label"
                                      className={classes.contactbtn}
                                      onClick={()=>{ history.push(editlink)}}
                                      >
                                      Edit Advertisement
                                    </Button>
                                  </Grid> 
                                    
                                    <Grid item > 
                                    <Button style={{maxWidth: '400px', maxHeight: '40px', minWidth: '400px', minHeight: '40px'}}
                                        variant="contained"
                                        color="secondary"
                                        component="label"
                                        //size="large"
                                        onClick={handleClickOpen}
                                        className={classes.contactbtn}
                                        >
                                        Delete Advertisement
                                    </Button>
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">Please confirm you receive the donation.</DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose} color="primary">
                                                No
                                            </Button>
                                            <Button onClick={handleConfirm} color="primary" autoFocus>
                                                Confirm
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    </Grid>
                                    
                                    </Grid>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
                        
                        
                    </Grid>
        </div>
    );
}