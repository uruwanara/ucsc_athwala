import React ,{useEffect, useState} from 'react';
import './Donation.css';
import { makeStyles } from '@material-ui/core/styles';
import Note from '../../image/note.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import  Button from '@material-ui/core/Button';
import {NoteDoneeDetails,Description,ClothDoneeDetails,DeviceDoneeDetails,MoneyDoneeDetails,OtherDoneeDetails} from './View_Casues';
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
      }
  
  }));

export default function View_Notecause(){
   const classes = useStyles();

  const [description,setDescription] = useState();
  const [title,setTitle] = useState();
  const [type, setType] = useState();
  const search = useLocation().search;
  const [date, setDate] = React.useState();
  const [status, setStatus] = React.useState();

  const [clothType, setClothType] = React.useState();
  const [gender, setGender] = React.useState();
  const [size, setSize] = React.useState();
  
  const [year, setYear] = React.useState();
  const [subject, setSubject] = React.useState();
  const [lesson, setLesson] = React.useState();

  const [brand, setBrand] = React.useState();
  const [model, setModel] = React.useState();

  const [amount, setAmount] = React.useState();
  const [note, setNote] = React.useState();

  const [reason, setReason] = React.useState();

  useEffect(() => {
    const donationid = new URLSearchParams(search).get("id");
    fetchDescription(donationid);
  },[]);

    const fetchDescription = (donationid) => {
        const description={
            "donationID": donationid,   
        }
        axios.post("http://localhost:5000/api/donations/select",description,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data[0].donationType);
                setDescription(response.data[0].description);
                setTitle(response.data[0].title);
                setType(response.data[0].donationType);

                if(response.data[0].donationType){
                    const details={
                      "donationID": donationid,
                      "type": response.data[0].donationType,
                    }
          
                    axios.post("http://localhost:5000/api/donations/view",details,{
                      headers:{
                          "access-control-allow-origin" : "*",
                          "Content-type": "application/json; charset=UTF-8"
                        }
                      }).then((res) => {
                          console.log(res.data);

                          if(response.data[0].donationType=='cloth'){
                            setClothType(res.data[0].cloth_type);
                            setGender(res.data[0].gender);
                            setSize(res.data[0].size);
                            setDate(res.data[0].before_date);
                            setStatus(res.data[0].status);
                          }
                          else if(response.data[0].donationType=='note'){
                            setYear(res.data[0].year);
                            setSubject(res.data[0].subject);
                            setLesson(res.data[0].lesson);
                            setDate(res.data[0].before_date);
                            setStatus(res.data[0].status);
                          }
                          else if(response.data[0].donationType=='device'){
                            setModel(res.data[0].model);
                            setBrand(res.data[0].brand);
                            setDate(res.data[0].before_date);
                            setStatus(res.data[0].status);
                          }
                          else if(response.data[0].donationType=='money'){
                            setAmount(res.data[0].amount);
                            setNote(res.data[0].note);
                            setDate(res.data[0].before_date);
                            setStatus(res.data[0].status);
                          }
                          else if(response.data[0].donationType=='other'){
                              setReason(res.data[0].reason);
                              setStatus(res.data[0].status);
                          }
                      });


                }
                else{
                  console.log("error");
                }
            });
    };

    const details =() =>{
      if(type === "note"){
        return(
          <>
          <NoteDoneeDetails year={year} subject={subject} lesson={lesson} date={date}/>
          </>
        );
      }
      if(type === "cloth"){
        return(
          <><ClothDoneeDetails clothType={clothType} gender={gender} size={size} date={date}/></>
        );
      }
      if(type === "device"){
        return(
          <><DeviceDoneeDetails model={model} brand={brand} date={date}/></>
        );
      }
      if(type === "money"){
        return(
          <><MoneyDoneeDetails amount={amount} note={note} date={date}/></>
        );
      }
      if(type === "other"){
        return(
          <><OtherDoneeDetails reason={reason} date={date}/></>
        );
      }
  
    }

    return(
        <div>
                   
                   <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    src= {Note}
                                />   
                            </Card>
                        </Grid>
                        
                        <Description description={description} title={title}/>
                    </Grid>

                    <Grid container spacing={2} >

                        {details()}
                        
                        <Grid item xs={6}>
                        <Card className={classes.card}>
                                <CardContent>
                                <Typography variant="h5" className={classes.title}>
                                       Donation details
                                    </Typography>
                                <div style={{display:"flex"}}>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelname}>Donation Status</Typography> 
                                        </div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelvalue}>{status}</Typography> 
                                        </div>  
                                    </div>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
                    </Grid>
        </div>
    );
}