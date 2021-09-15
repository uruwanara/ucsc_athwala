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
    const [year, setYear] = React.useState();
    const [subject, setSubject] = React.useState();
    const [lesson, setLesson] = React.useState();
    const [date, setDate] = React.useState();
    const search = useLocation().search;

    useEffect(() => {
        const donationid = new URLSearchParams(search).get("id");
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

                        <Description description={description} title={title}/>
                    </Grid>
                    

                    <Grid container spacing={2} >
                        <NoteDoneeDetails year={year} subject={subject} lesson={lesson} date={date}/>
                        
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
                                        >
                                        Upload File
                                        <input
                                            type="file"
                                        />
                                    </Button>
                                    </div>
                                    <div>
                                    <Typography variant="subtitle2" className={classes.title}>
                                       Or You can cotact donee to donate
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component="label"
                                        className={classes.contactbtn}
                                        >
                                        Contact to pickup
                                    </Button>
                                    </div>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
                    </Grid>
        </div>
    );
}