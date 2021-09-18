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
import TextField from '@material-ui/core/TextField';

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

      contactform:{
        marginTop:'30px',
      },
      formtxt:{
        marginTop:'5px',
        height:'fit-content'
      },
      formlbl:{
        marginBottom:'5px',
        marginTop:'5px',
        height:'fit-content',
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

  const [donername,setDonername] = useState();
  const [donate_at,setDonateat] = useState();
  const [address , setAddress] = useState();
  const [tel,setTel] = useState();

  const [buttontxt,Setbuttontxt] = useState("Marked As Reeceived");
  const [open, setOpen] = React.useState(false);
  const [btncolor, setColor] = React.useState("primary");


const donationid = new URLSearchParams(search).get("id");

  useEffect(() => {
    
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
                              setDate(res.data[0].before_date);
                          }
                      });

                }
                else{
                  console.log("error");
                }
            });
     
            
    };

  const handleSubmit = (event) => {
      setOpen(false);
      
      
      event.preventDefault(); 

      const markstatus={
        "donationID": donationid,
        "type": type,
    }
    axios.post("http://localhost:5000/api/donations/markstatus",markstatus,{
        headers:{
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then((response) => {
            if(response.data === 'success'){
              console.log("ddddddd");
              setColor("secondary");
              Setbuttontxt("Received");
              setStatus("Received");
            }
    });



  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    const details =() =>{
      if(type === "note"){
        return(
          <>
          <NoteDoneeDetails year={year} subject={subject} lesson={lesson} date={date} status={status} 
          handleSubmit={handleSubmit}  
          handleClickOpen={handleClickOpen} 
          handleClose={handleClose}
          buttontxt={buttontxt} open={open} btncolor={btncolor}
          />
          </>
        );
      }
      if(type === "cloth"){
        return(
          <><ClothDoneeDetails clothType={clothType} gender={gender} size={size} date={date} status={status}
          handleSubmit={handleSubmit}  
          handleClickOpen={handleClickOpen} 
          handleClose={handleClose}
          buttontxt={buttontxt} open={open} btncolor={btncolor}
          /></>
        );
      }
      if(type === "device"){
        return(
          <><DeviceDoneeDetails model={model} brand={brand} date={date} status={status}
          handleSubmit={handleSubmit}  
          handleClickOpen={handleClickOpen} 
          handleClose={handleClose}
          buttontxt={buttontxt} open={open} btncolor={btncolor}
          /></>
        );
      }
      if(type === "money"){
        return(
          <><MoneyDoneeDetails amount={amount} note={note} date={date} status={status}
          handleSubmit={handleSubmit}  
          handleClickOpen={handleClickOpen} 
          handleClose={handleClose}
          buttontxt={buttontxt} open={open} btncolor={btncolor}
          /></>
        );
      }
      if(type === "other"){
        return(
          <><OtherDoneeDetails reason={reason} date={date} status={status}
          handleSubmit={handleSubmit}  
          handleClickOpen={handleClickOpen} 
          handleClose={handleClose}
          buttontxt={buttontxt} open={open} btncolor={btncolor}
          /></>
        );
      }
  
    }

    const donationstatus = () => {
      if(status === 'Not Received'){
          return(
            <div style={{display:"flex"}}>
              <div>
                <Typography variant="subtitle2" className={classes.labelname}>Donation Status</Typography> 
              </div>
              <div>
                <Typography variant="subtitle2" className={classes.labelvalue}>{status}</Typography> 
              </div>                         
            </div>
             
          );
      }
      else if(status === 'Pending' || status === 'Received'){
          const doner={
          "donationid":donationid,
          }

        axios.post("http://localhost:5000/api/donations/donerdetails",doner,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data);
                setDonername(response.data[0].fname+" "+ response.data[0].lname);
                setDonateat(response.data[0].donate_at);
                setAddress(response.data[0].address);
                setTel(response.data[0].tel);
        });

        return(
          <>
          <div style={{display:"flex"}}>
              <div>
                <Typography variant="subtitle2" className={classes.labelname}>Donation Status</Typography> 
              </div>
              <div>
                <Typography variant="subtitle2" className={classes.labelvalue}>{status}</Typography> 
              </div>                         
          </div>
          <div >
            
              <form className={classes.contactform}>
                <div>
                  <Typography variant="h5" className={classes.title}>Doner details</Typography> 
                  <Typography variant="subtitle2" className={classes.title}>Contact the doner Now!</Typography> 
                </div>
              <Typography variant="subtitle2" className={classes.formlbl}>Doner's name</Typography> 
              <TextField
                className={classes.formtxt}
                name="name"
                variant="outlined"
                fullWidth
                value={donername}
                inputProps={
                  { readOnly: true, }
                }
              />
              <Typography variant="subtitle2" className={classes.formlbl}>Address</Typography> 
              <TextField
                className={classes.formtxt}
                name="adress"
                variant="outlined"
                fullWidth
                value={address}
                inputProps={
                  { readOnly: true, }
                }
              /> 
              <Typography variant="subtitle2" className={classes.formlbl}>Phone number</Typography> 
              <TextField
                className={classes.formtxt}
                name="tel"
                variant="outlined"
                fullWidth
                value={tel}
                inputProps={
                  { readOnly: true, }
                }
              />  
              <Typography variant="subtitle2" className={classes.formlbl}>Donate At</Typography> 
              <TextField
                className={classes.formtxt}
                name="donate_at"
                variant="outlined"
                fullWidth
                value={donate_at}
                inputProps={
                  { readOnly: true, }
                }
              /> 

              </form>
          </div>
          </>
        )
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
                                  
                                {donationstatus()}

                                </CardContent>   
                            </Card>
                            
                        </Grid>

                        
                    </Grid>
        </div>
    );
}