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
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';



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



export default function SignUp() {
  const classes = useStyles();

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [year, setYear] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [lesson, setLesson] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [image, setImage] = React.useState("");
  const [show_or_hide_details, setacceptTerm] = React.useState(false);

  const handleSubmit = (event) => {
     event.preventDefault(); 
    console.log(`
        title: ${title}
        description: ${description}
        year: ${year}
        subject: ${subject}
        lesson: ${lesson}
        price: ${price}
        image: ${image}
        show_or_hide_details: ${show_or_hide_details}
    `)
      const userData=JSON.parse(localStorage.getItem("userData"));
      
      const postProduct={
          "user_id":userData.id,
          "title": title,
          "description": description,
          "year": year,
          "subject": subject,
          "lesson": lesson,
          "image": image,
          "price": price,
          "show_or_hide_details": show_or_hide_details,
      }
        axios.post("http://localhost:5000/api/products/sellNote",postProduct,{
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
              setLesson("");
              setSubject("");
              setPrice("");
              setImage("");
              setacceptTerm(!show_or_hide_details);
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
        Lecture notes Advertisement
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
            {/* <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Price* </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">Rs:</InputAdornment>}
            label="Price"
          />
        </FormControl> */}
              <TextField
                variant="outlined"
                fullWidth
                name="price"
                required
                value={price}
                id="price"
                autoComplete="price"
                label="Price"
                //onFocus={(e) => (e.currentTarget.type = "price")}
                //onBlur={(e) => (e.currentTarget.type = "text")}
                onChange={e => setPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
                <Typography component="h1" variant="subtitle1">
                    You are able to upload image here
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Button
                variant="contained"
                component="label"
            >
                Upload File
                <input
                    type="file"
                    hidden
                />
            </Button>
            </Grid>
           
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="acceptTerm" color="primary"  onChange={e => setacceptTerm(true)}/>}
                label="I Don't need to show my identity to others."
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
            Post
          </Button>
         
         
        </form>
      </div>
    </Container>
  );
}

