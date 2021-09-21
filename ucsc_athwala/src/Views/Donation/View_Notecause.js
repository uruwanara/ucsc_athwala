import React , {useState,useEffect} from 'react';
import './Donation.css';
import { makeStyles } from '@material-ui/core/styles';
import Note from '../../image/note.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import  Button from '@material-ui/core/Button';
import {NoteDoneeDetails,Description} from './View_Casues';
import { useLocation } from 'react-router';
import axios from "axios";
import ContactForm from './contactForm';
import {useSnackbar} from "notistack";
import {useHistory } from "react-router-dom";
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

        fontFamily:"Poppins, sans-serif",
        marginTop:'40px',
        marginBottom:'30px'
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
      uploadbtn:{
          marginTop:10,
          marginBottom:20,
          textTransform:'none',
          fontFamily:"Poppins, sans-serif",
      }
  
  }));

export default function View_Notecause(){
    const classes = useStyles();
    const history = useHistory();
    const [description,setDescription] = useState();
    const [requestStudentid,setRequestStudentid] = useState();
    const [title,setTitle] = useState();
    const [year, setYear] = React.useState();
    const [subject, setSubject] = React.useState();
    const [lesson, setLesson] = React.useState();
    const [date, setDate] = React.useState();
    const [file , setFile] = useState([]);
    const search = useLocation().search;

    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = useState();
   
    const donationid = new URLSearchParams(search).get("id");
    const userData=JSON.parse(localStorage.getItem("userData"));
    const {enqueueSnackbar, closeSnackbar } = useSnackbar();

    const [fname, Setfname] = useState();
    const [lname, Setlname] = useState();
    const [email, Setemail] = useState();
    const [contact , SetContact] = useState();

    useEffect(() => {

        fetchDescription(donationid);
        fetchDetails(donationid);
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
                console.log(response.data);
                setDescription(response.data[0].description);
                setTitle(response.data[0].title);
                setRequestStudentid(response.data[0].student_id);

                
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
            })
    };

    const fetchDetails = (donationid) => {
        const details={
            "donationID": donationid,
            "type":'note'
        }
        axios.post("http://localhost:5000/api/donations/view",details,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data);
                setYear(response.data[0].year);
                setSubject(response.data[0].subject);
                setLesson(response.data[0].lesson);
                setDate(response.data[0].before_date);
                setStatus(response.data[0].status);

            })
    };


    const onChangeHandler = (event)=>{
        console.log(event.target.files[0]);
       const file= event.target.files[0];
       const formData=new FormData()
        formData.append('file',file)

        axios.post("http://localhost:5000/api/fus/upload/"+donationid,formData,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            if(response.data.status === 'ok'){
                console.log("Sucesss -------------------")



            }
            else{
                console.log(response);
            }
        })



    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setOpen(false);
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

            if(userData.userType === "STUDENT"){
              history.push("/std/viewMyrequest") ;
            }
            else if(userData.userType === "UNIONST" ){
              history.push("/ustd/viewMyrequest");
            }

          }
  });
 }
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const uploadFile=()=>{
        enqueueSnackbar("File  Uploaded", {
            variant: 'success',anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
            },
        })
    };

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

                        <Description description={description} title={title} />
                    </Grid>


                    <Grid container spacing={2} >
                        <NoteDoneeDetails year={year} subject={subject} lesson={lesson} date={date} requestStudentid={requestStudentid} 
                        userId = {userData.id}
                        status={status} 
                        open={open}
                        userType={userData.userType}
                        handleSubmit={handleSubmit}  
                        handleClickOpen={handleClickOpen} 
                        handleClose={handleClose}
                        fname={fname}
                        lname={lname}
                        email={email}
                        contact={contact}/>
                        
                        <Grid item xs={6}>
                        <Card className={classes.card}>
                                <CardContent>
                                    <div>
                                    <Typography variant="h5" className={classes.title}>
                                        Donate Now
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.title}>
                                        Donate by uploading notes
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        color="primary"
                                        className={classes.uploadbtn}
                                        >
                                        Upload File
                                        <input
                                            type="file"
                                            name="file"
                                            onChange={onChangeHandler}
                                        />
                                    </Button>
                                    <br></br>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        type="submit"
                                        color="secondary"
                                        className={classes.uploadbtn}
                                        onClick={uploadFile}
                                        >
                                        Upload File
                                    </Button>
                                    </div>
                                    <div>
                                    <Typography variant="subtitle2" className={classes.title}>
                                       Or Provide your details to contact you
                                    </Typography>

                                    <ContactForm donationID={donationid} type='note'/>

                                    </div>
                                </CardContent>
                            </Card>

                        </Grid>
                    </Grid>
        </div>
    );
}