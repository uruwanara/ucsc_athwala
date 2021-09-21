import React ,{useEffect, useState} from 'react';
import './Donation.css';
import { makeStyles } from '@material-ui/core/styles';
import Note from '../../image/note.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {NoteDoneeDetails,Description,ClothDoneeDetails,DeviceDoneeDetails,MoneyDoneeDetails,OtherDoneeDetails} from './View_Casues';
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
        marginTop:30,
        marginBottom:30,
        fontFamily:"Poppins, sans-serif",
      },

      card:{
        backgroundColor:"white",
        border:"none",
        boxShadow:"none"
      },

      labelname: {
          marginLeft:40,
          marginBottom:20,
          color:"000000",
          fontFamily:"Poppins, sans-serif",
          width:"150px"
      },

      labelvalue:{
        marginLeft:100,
        marginBottom:20,
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
      },
      editbutton:{
        textTransform:"none",
        fontFamily:"Poppins, sans-serif",
        margin:10
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
  const [active, setActive] = React.useState();
  const [requestStudentid,setRequestStudentid] = useState();

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

  const [buttontxt,Setbuttontxt] = useState("Marked As Reeceived");
  const [open, setOpen] = React.useState(false);
  const [btncolor, setColor] = React.useState("primary");

  const history = useHistory();
  const userData=JSON.parse(localStorage.getItem("userData"));
  const {enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [fname, Setfname] = useState();
  const [lname, Setlname] = useState();
  const [email, Setemail] = useState();
  const [contact , SetContact] = useState();

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
                console.log(response.data[0]);
                setDescription(response.data[0].description);
                setTitle(response.data[0].title);
                setType(response.data[0].donationType);
                setActive(response.data[0].active);
                setRequestStudentid(response.data[0].student_id);

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
                if(response.data[0].student_id){
                    const details={
                        "student": response.data[0].student_id,
                      }
            
                      axios.post("http://localhost:5000/api/donations/studentdetatils",details,{
                        headers:{
                            "access-control-allow-origin" : "*",
                            "Content-type": "application/json; charset=UTF-8"
                          }
                        }).then((respon) => {
                                console.log(respon.data[0]);
                                Setfname(respon.data[0].fname);
                                Setlname(respon.data[0].lname);
                                Setemail(respon.data[0].email);
                                SetContact(respon.data[0].contactnumber);
                        });
                }
            });
     
            
    };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit= (event) => {
    setOpen(false);     
    event.preventDefault(); 

  const deletedonation={
      "donationID": donationid,
  }
  axios.post("http://localhost:5000/api/donations/delete",deletedonation,{
      headers:{
          "access-control-allow-origin" : "*",
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then((response) => {
          if(response.data === 'success'){
            console.log("ddddddd");
            enqueueSnackbar('Successfully Deleted', {
              variant: 'success', anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
              }
            })
              history.push("/admin/viewcauses") ;


          }
  });
    
  }

    const details =() =>{
      if(type === "note"){
        return(
          <>
          <NoteDoneeDetails year={year} subject={subject} lesson={lesson} date={date} status={status} requestStudentid={requestStudentid} 
          userId = {userData.id}
          userType={userData.userType} 
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
          <><ClothDoneeDetails clothType={clothType} gender={gender} size={size} date={date} status={status} requestStudentid={requestStudentid} 
          userId = {userData.id}
          userType={userData.userType}
          handleSubmit={handleSubmit}  
          handleClickOpen={handleClickOpen} 
          handleClose={handleClose}
          buttontxt={buttontxt} open={open} btncolor={btncolor}
          /></>
        );
      }
      if(type === "device"){
        return(
          <><DeviceDoneeDetails model={model} brand={brand} date={date} status={status} requestStudentid={requestStudentid} 
          userId = {userData.id}
          userType={userData.userType}
          handleSubmit={handleSubmit}  
          handleClickOpen={handleClickOpen} 
          handleClose={handleClose}
          buttontxt={buttontxt} open={open} btncolor={btncolor}
          /></>
        );
      }
      if(type === "money"){
        return(
          <><MoneyDoneeDetails amount={amount} note={note} date={date} status={status} requestStudentid={requestStudentid} 
          userId = {userData.id}
          userType={userData.userType}
          handleSubmit={handleSubmit}  
          handleClickOpen={handleClickOpen} 
          handleClose={handleClose}
          buttontxt={buttontxt} open={open} btncolor={btncolor}
          /></>
        );
      }
      if(type === "other"){
        return(
          <><OtherDoneeDetails reason={reason} date={date} status={status} requestStudentid={requestStudentid} 
          userId = {userData.id}
          userType={userData.userType}
          handleSubmit={handleSubmit}  
          handleClickOpen={handleClickOpen} 
          handleClose={handleClose}
          buttontxt={buttontxt} open={open} btncolor={btncolor}
          /></>
        );
      }
  
    }

    const studentdetails = () => {
        return(
            <>
            <div style={{display:"flex"}}>
              <div>
                <Typography variant="subtitle2" className={classes.labelname}>Student first Name</Typography> 
              </div>
              <div>
                <Typography variant="subtitle2" className={classes.labelvalue}>{fname}</Typography> 
              </div>                         
            </div>
            <div style={{display:"flex"}}>
              <div>
                <Typography variant="subtitle2" className={classes.labelname}>Student Last Name</Typography> 
              </div>
              <div>
                <Typography variant="subtitle2" className={classes.labelvalue}>{lname}</Typography> 
              </div>                         
            </div>
            <div style={{display:"flex"}}>
              <div>
                <Typography variant="subtitle2" className={classes.labelname}>Email Address</Typography> 
              </div>
              <div>
                <Typography variant="subtitle2" className={classes.labelvalue}>{email}</Typography> 
              </div>                         
            </div>
            <div style={{display:"flex"}}>
              <div>
                <Typography variant="subtitle2" className={classes.labelname}>Contact Number</Typography> 
              </div>
              <div>
                <Typography variant="subtitle2" className={classes.labelvalue}>{contact}</Typography> 
              </div>                         
            </div>
            </>
        )
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
                                  Student details
                                </Typography>
                                  
                                {studentdetails()}

                                </CardContent>   
                            </Card>
                            
                        </Grid>

                        
                    </Grid>
        </div>
    );
}