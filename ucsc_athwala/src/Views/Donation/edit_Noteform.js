import React, {useEffect,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {useSnackbar} from "notistack";
import { useHistory} from 'react-router';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function EditNote(props) {
  const classes = useStyles();
  const history = useHistory();

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [year, setYear] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [lesson, setLesson] = React.useState("");
  const [date, setDate] = React.useState("");
  const [acceptTerm, setacceptTerm] = React.useState(false);
  const {enqueueSnackbar, closeSnackbar } = useSnackbar();
  const userData=JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    fetchDetails(props.type,props.donationid);
},[]);

const fetchDetails = (type,donationID) => {
    const description={
        "donationID": donationID,
    }
    axios.post("http://localhost:5000/api/donations/select",description,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data);
                setTitle(response.data[0].title);
                setDescription(response.data[0].description);

                const detail={
                    "donationID": donationID,
                    "type":type
                }
                axios.post("http://localhost:5000/api/donations/view",detail,{
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


    });
}



  const handleSubmit = (event) => {
     event.preventDefault(); 
    console.log(`
        title: ${title}
        description: ${description}
        year: ${year}
        subject: ${subject}
        lesson: ${lesson}
        date: ${date}
        acceptTerm: ${acceptTerm}
    `);

    
    const editNote={
        "title": title,
        "description": description,
        "year": year,
        "subject": subject,
        "lesson": lesson,
        "date":date,
        "donationid":props.donationid
    }
      axios.post("http://localhost:5000/api/donations/noteedit",editNote,{
          headers:{
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
          }
      }).then((response)=>{
          console.log(response.data);
          if(response.data==='success'){
            setTitle("");
            setDescription("");
            setYear("");
            setSubject("");
            setLesson("");
            setDate("");
            setacceptTerm(false);

            enqueueSnackbar('Successfully Update', {
                variant: 'success', anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'center',
                }
              })

              if(userData.userType === "STUDENT"){
                history.push("/std/viewdetails_mydonation?id="+props.donationid) ;
              }
              else if(userData.userType === "UNIONST" ){
                history.push("/ustd/viewdetails_mydonation?id="+props.donationid);
              }
              
          }

      }).catch((err)=>{

      })
  }

  return (
    
    <Container component="main" maxWidth="sm">
      <CssBaseline />

      <div className={classes.paper}>
      <Avatar className={classes.avatar}>
          <BorderColorIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit Donation Request
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>

            <Grid item xs={12} >
              <TextField
                autoComplete="title"
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                value={title}
                autoFocus
                onChange={e => setTitle(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                value={description}
                autoComplete="description"
                multiline
                rows ={5}
                onChange={e => setDescription(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="stdyear"
                label="Study year"
                name="stdyear"
                value={year}
                autoComplete="stdyear"
                onChange={e => setYear(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="subject"
                label="Subject"
                value={subject}
                id="subject"
                autoComplete="subject"
                onChange={e => setSubject(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="lesson"
                label="Lesson"
                value={lesson}
                id="lesson"
                autoComplete="lesson"
                onChange={e => setLesson(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="date"
                required
                value={date}
                id="date"
                autoComplete="date"
                label="Before date"
                onFocus={(e) => (e.currentTarget.type = "date")}
                onBlur={(e) => (e.currentTarget.type = "text")}
                onChange={e => setDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox required name="acceptTerm" color="primary"  onChange={e => setacceptTerm(true)}/>}
                label="I confirm that this informations are true"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Edit 
          </Button>
         
        </form>
      </div>
    </Container>
  );
}

