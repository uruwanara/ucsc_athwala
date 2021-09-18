import React , {useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {useSnackbar} from "notistack";
import {useHistory } from "react-router-dom";
import { useLocation } from 'react-router';

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
    marginBottom: 100,
  },
}));



export default function CreateJob() {
  const classes = useStyles();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [requirement1, setRequirement1] = useState("");
  const [requirement2, setRequirement2] = useState("");
  const [requirement3, setRequirement3] = useState("");
  const [requirement4, setRequirement4] =useState("");
  const [other, setOther] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [web, setWeb] = useState("");
  const [linkdin, setLinkdin] = useState("");
  const search = useLocation().search;

  const {enqueueSnackbar, closeSnackbar } = useSnackbar();

  const jobpostid = new URLSearchParams(search).get("id");

    useEffect(() => {
        fetchDetails(jobpostid);
    },[]);

    const fetchDetails = (jobpostid) => {
        const postdetails={
            "postid": jobpostid,
        }
        axios.post("http://localhost:5000/api/jobposts/viewpost",postdetails,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data);
                setTitle(response.data[0].title);
                setDescription(response.data[0].description);
                setCompany(response.data[0].company);
                setRequirement1(response.data[0].req1);
                setRequirement2(response.data[0].req2);
                setRequirement3(response.data[0].req3);
                setRequirement4(response.data[0].req4);
                setOther(response.data[0].reqOther);
                setPhone(response.data[0].tel);
                setEmail(response.data[0].mail);
                setWeb(response.data[0].website);
                setLinkdin(response.data[0].linkdin);

            })
    };

  const handleSubmit = (event) => {
     event.preventDefault(); 
    console.log(`
        title: ${title}
        description: ${description}
        company:${company}
        requirement1: ${requirement1}
        requirement2: ${requirement2}
        requirement3: ${requirement3}
        requirement4: ${requirement4}
        other: ${other}
        phone: ${phone}
        email: ${email}
        web: ${web}
        linkdin: ${linkdin}
    `); 

    const userData=JSON.parse(localStorage.getItem("userData"));
    
    const jobpost={
      "postID":jobpostid,
      "title": title,
      "description": description,
      "company":company,
      "requirement1":requirement1,
      "requirement2": requirement2,
      "requirement3": requirement3,
      "requirement4": requirement4,
      "other": other,
      "phone": phone,
      "email": email,
      "web": web,
      "linkdin":linkdin
    }

    axios.post("http://localhost:5000/api/jobposts/update",jobpost,{
          headers:{
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
          }
      }).then((response)=>{
          console.log(response.data);
          if(response.data==='success'){
            enqueueSnackbar('Successfully Update', {
              variant: 'success', anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
              }
            })
            history.push("/pst/myJobOpertunity")    
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
          Create Job Posts
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

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="company"
                label="Company"
                name="company"
                value={company}
                autoComplete="company"
                onChange={e => setCompany(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="requirement1"
                label="Requirement 01"
                name="requirement1"
                value={requirement1}
                autoComplete="requirement1"
                onChange={e => setRequirement1(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="requirement2"
                label="Requirement 02"
                value={requirement2}
                id="requirement2"
                autoComplete="requirement2"
                onChange={e => setRequirement2(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="requirement3"
                label="Requirement 03"
                value={requirement3}
                id="requirement3"
                autoComplete="requirement3"
                onChange={e => setRequirement3(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="requirement4"
                label="Requirement 04"
                value={requirement4}
                id="requirement4"
                autoComplete="requirement4"
                onChange={e => setRequirement4(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="other"
                label="Other Requirements"
                value={other}
                id="other"
                autoComplete="other"
                onChange={e => setOther(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Tel phone number"
                value={phone}
                id="phone"
                autoComplete="phone"
                onChange={e => setPhone(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="email"
                label="Email address"
                value={email}
                id="email"
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="web"
                label="Web site"
                value={web}
                id="web"
                autoComplete="web"
                onChange={e => setWeb(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="linkdin"
                label="Linkdin"
                value={linkdin}
                id="linkdin"
                autoComplete="linkdin"
                onChange={e => setLinkdin(e.target.value)}
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
            Update
          </Button>
         
        </form>
      </div>
    </Container>
  );
}

