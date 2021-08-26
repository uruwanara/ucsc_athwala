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



export default function CreateJob() {
  const classes = useStyles();

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [requirement1, setRequirement1] = React.useState("");
  const [requirement2, setRequirement2] = React.useState("");
  const [requirement3, setRequirement3] = React.useState("");
  const [requirement4, setRequirement4] = React.useState("");
  const [other, setOther] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [web, setWeb] = React.useState("");
  const [linkdin, setLinkdin] = React.useState("");

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
            Submit
          </Button>
         
        </form>
      </div>
    </Container>
  );
}

