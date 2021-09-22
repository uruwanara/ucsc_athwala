import React from 'react';
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
import GavelIcon from '@material-ui/icons/Gavel';
import { TextareaAutosize } from '@material-ui/core';
import './Donation.css';
import axios from 'axios';
import InputLabel  from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Link, useHistory } from "react-router-dom";

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
  formcontrol:{
    width:'100%',
  },
}));



export default function SignUp() {
  
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [year, setYear] = React.useState("");
  // const [subject, setSubject] = React.useState("");
  const [BasePrice, setbaseprice] = React.useState("");
  const [date, setDate] = React.useState("");
  const [acceptTerm, setacceptTerm] = React.useState(false);

  const handleSubmit = (event) => {
     event.preventDefault(); 
    console.log(`
    title: ${title}
    description: ${description}
    year: ${year}
    Baseprice: ${BasePrice}
    date: ${date}
    acceptTerm: ${acceptTerm}
    `);
    const userData=JSON.parse(localStorage.getItem("userData"));
    
    const requestNote={
        "studentID":userData.id,
        "title": title,
        "description": description,
        "year": year,
        "Baseprice": BasePrice,
        "date":date,
    }
      axios.post("http://localhost:5000/api/auction/createauc",requestNote,{
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
            // setSubject("");
            setbaseprice("");
            setDate("");
            setacceptTerm(false);
          
              if(userData.userType === "STUDENT"){
              history.push("/std/viewauc")
              }
              if(userData.userType === "UNIONST"){
                  history.push("/ustd/viewauc")
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
          <GavelIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Auction
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
            <Grid item xs={12} >
    
              <TextField
              multiline
              rows={8}
              rowsMax={Infinity}
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                value={description}
                autoComplete="description"
                onChange={e => setDescription(e.target.value)}
              />
              
            </Grid>
            

            <Grid item xs={6}>
            <FormControl className={classes.formcontrol}>
            <InputLabel id="gender-user">Year</InputLabel>
              <Select
                variant="outlined"
                required
                fullWidth
                name="Year"
                labelId="gender-user"
                value={year}
                id="year"
                autoComplete="year"
                onChange={e => setYear(e.target.value)}
              >
                <option value={'First Year'}>First Year</option>
                <option value={'Second Year'}>Second Year</option>
                <option value={'Third Year'}>Third Year</option>
                <option value={'Fourth Year'}>Fourth Year</option>
              </Select></FormControl>
            </Grid>

            {/* <Grid item xs={6}>
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
            </Grid> */}

            <Grid item xs={12}>
              <TextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                variant="outlined"
                required
                fullWidth
                name="Baseprice"
                label="Baseprice"
                value={BasePrice}
                id="Baseprices"
                autoComplete="lesson"
                onChange={e => setbaseprice(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
               inputProps={{min: "2021-09-23"}}
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
            
            { <Button
            fullWidth
                variant="contained"
                component="label">
                Upload File
              <input
        type="file"
        name="myImage"

      />
                </Button> }
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
            Submit
          </Button>
         
        </form>
      </div>
    </Container>
  );
}

