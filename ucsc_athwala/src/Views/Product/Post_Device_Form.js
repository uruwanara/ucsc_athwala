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



export default function SignUp() {
  const classes = useStyles();

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [model, setModel] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [price, setDate] = React.useState("");
  const [acceptTerm, setacceptTerm] = React.useState(false);

  const handleSubmit = (event) => {
     event.preventDefault(); 
    console.log(`
        title: ${title}
        description: ${description}
        model: ${model}
        brand: ${brand}
        price: ${price}
        acceptTerm: ${acceptTerm}
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
        Electronic devices Advertisement Form
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
                name="price"
                required
                value={price}
                id="price"
                autoComplete="price"
                label="Price"
                onFocus={(e) => (e.currentTarget.type = "price")}
                onBlur={(e) => (e.currentTarget.type = "text")}
                onChange={e => setDate(e.target.value)}
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
                control={<Checkbox required name="acceptTerm" color="primary"  onChange={e => setacceptTerm(true)}/>}
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

