import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel  from '@material-ui/core/InputLabel';
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
  formcontrol:{
    width:'100%',
  },
}));



export default function RequestCloth() {
  const classes = useStyles();

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [clothType, setClothType] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [size, setSize] = React.useState("");
  const [date, setDate] = React.useState("");
  const [acceptTerm, setacceptTerm] = React.useState(false);

  const handleSubmit = (event) => {
     event.preventDefault(); 
    console.log(`
        title: ${title}
        description: ${description}
        clothType: ${clothType}
        gender: ${gender}
        size: ${size}
        date: ${date}
        acceptTerm: ${acceptTerm}
    `); 

    const userData=JSON.parse(localStorage.getItem("userData"));
    
    const requestCloth={
        "studentID":userData.id,
        "title": title,
        "description": description,
        "clothType": clothType,
        "gender": gender,
        "size": size,
        "date":date,
    }
      axios.post("http://localhost:5000/api/donations/clothrequest",requestCloth,{
          headers:{
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
          }
      }).then((response)=>{
          console.log(response.data);
          if(response.data==='success'){
            setTitle("");
            setDescription("");
            setClothType("");
            setGender("");
            setSize("");
            setDate("");
            setacceptTerm(false);
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
          Request Cloths
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
                id="clothType"
                label="Cloth type"
                name="clothType"
                value={clothType}
                autoComplete="clothType"
                onChange={e => setClothType(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
            <FormControl className={classes.formcontrol}>
            <InputLabel id="gender-user">Gender</InputLabel>
              <Select
                variant="outlined"
                required
                fullWidth
                name="gender"
                labelId="gender-user"
                value={gender}
                id="gender"
                autoComplete="gender"
                onChange={e => setGender(e.target.value)}
              >
                <option aria-label="None" value="" />
                <option value={'Male'}>Male</option>
                <option value={'Female'}>Female</option>
                <option value={'NotSay'}>I prefer not to say</option>
              </Select></FormControl>
            </Grid>

            <Grid item xs={12}>
            <FormControl className={classes.formcontrol}>
            <InputLabel id="cloth-size">Size</InputLabel>
            <Select
                variant="outlined"
                required
                fullWidth
                name="size"
                labelId="cloth-size"
                value={size}
                id="size"
                autoComplete="size"
                placeholder="size"
                onChange={e => setSize(e.target.value)}
              >
                <option aria-label="" value=""></option>
                <option value={'XS'}>XS (Width:16" Length:24")</option>
                <option value={'S'}>S (Width:18" Length:26")</option>
                <option value={'M'}>M (Width:20" Length:28")</option>
                <option value={'L'}>L (Width:22" Length:29")</option>
                <option value={'XL'}>XL (Width:23" Length:31")</option>
                <option value={'2XL'}>2XL (Width:25" Length:33")</option>
              </Select></FormControl>
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

