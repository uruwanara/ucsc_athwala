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
  const [BasePrice, setbaseprice] = React.useState("");
  const [date, setDate] = React.useState("");
  const [acceptTerm, setacceptTerm] = React.useState(false);

  const handleSubmit = (event) => {
     event.preventDefault(); 
    console.log(`
        title: ${title}
        description: ${description}
        year: ${year}
        subject: ${subject}
        Baseprice: ${BasePrice}
        date: ${date}
        acceptTerm: ${acceptTerm}
    `); 
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
                id="stdyear"
                label="Study year"
                name="stdyear"
                value={year}
                autoComplete="stdyear"
                onChange={e => setYear(e.target.value)}
              />
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
                variant="outlined"
                required
                fullWidth
                name="Baseprice"
                label="Base price"
                value={BasePrice}
                id="lesson"
                autoComplete="lesson"
                onChange={e => setbaseprice(e.target.value)}
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
            <Button
            fullWidth
                variant="contained"
                component="label">
                Upload File
              <input
                type="file"/>
                </Button>
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

