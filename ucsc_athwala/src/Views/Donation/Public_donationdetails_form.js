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



export default function RequestDevice() {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [model, setModel] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [date, setDate] = React.useState("");
  const [acceptTerm, setacceptTerm] = React.useState(false);
  const {enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleSubmit = (event) => {
     event.preventDefault(); 
    console.log(`
        title: ${title}
        description: ${description}
        model: ${model}
        brand: ${brand}
        date: ${date}
        acceptTerm: ${acceptTerm}
    `); 

    const userData=JSON.parse(localStorage.getItem("userData"));
    
    const requestDevice={
        "studentID":userData.id,
        "title": title,
        "description": description,
        "model": model,
        "brand": brand,
        "date":date,
    }
      axios.post("http://localhost:5000/api/donations/devicerequest",requestDevice,{
          headers:{
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
          }
      }).then((response)=>{
          console.log(response.data);
          if(response.data==='success'){
            setTitle("");
            setDescription("");
            setModel("");
            setBrand("");
            setDate("");
            setacceptTerm(false);

            enqueueSnackbar('Successfully Update', {
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
          Request Electronic Devices
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
                id="model"
                label="Model of device"
                name="model"
                value={model}
                autoComplete="model"
                onChange={e => setModel(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="brand"
                label="Brand name"
                value={brand}
                id="brand"
                autoComplete="brand"
                onChange={e => setBrand(e.target.value)}
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
            Submit
          </Button>
         
        </form>
      </div>
    </Container>
  );
}

