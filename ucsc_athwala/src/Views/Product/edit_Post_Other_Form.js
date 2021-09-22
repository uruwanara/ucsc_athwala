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
import { useLocation } from 'react-router';
import {Link, useHistory } from "react-router-dom";
import {useSnackbar} from "notistack";


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
  const history = useHistory();

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [information, setReason] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [image, setImage] = React.useState("");
  const [show_or_hide_details, setacceptTerm] = React.useState(false);
  const search = useLocation().search;
  console.log(show_or_hide_details);

  const product_id = new URLSearchParams(search).get("id");
  const type = new URLSearchParams(search).get("type");

  const {enqueueSnackbar, closeSnackbar } = useSnackbar();
  const userData=JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    fetchDetails(product_id,type);
    console.log(type);
  },[]);

  const fetchDetails = (product_id,type) => {
    const description={
        "product_id": product_id,
    }
    axios.post("http://localhost:5000/api/products/viewdetail",description,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data);
                setTitle(response.data[0].title);
                setDescription(response.data[0].description);
                setPrice(response.data[0].price);
                setacceptTerm(response.data[0].show_or_hide_details);

                const detail={
                    "product_id": product_id,
                    "p_type":"p_other",
                }
                axios.post("http://localhost:5000/api/products/viewdetailmore",detail,{
                headers:{
                    "access-control-allow-origin" : "*",
                    "Content-type": "application/json; charset=UTF-8"
                }
                }).then((response) => {
                console.log(response.data);
                setReason(response.data[0].information_product);
                //setBrand(response.data[0].brand);
                //setDate(response.data[0].before_date);
            })


    });
}


  const handleSubmit = (event) => {
     event.preventDefault(); 
    console.log(`
        title: ${title}
        description: ${description}
        information: ${information}
        price: ${price}
        image: ${image}
        show_or_hide_details: ${show_or_hide_details}
    `); 

    const userData=JSON.parse(localStorage.getItem("userData"));
    
    const postProduct={
        "product_id":product_id,
        "title": title,
        "description": description,
        "price": price,
        "information": information,
        "image": image,
        "show_or_hide_details": show_or_hide_details,
    }
      axios.post("http://localhost:5000/api/products/productOtherFormEdit",postProduct,{
          headers:{
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
          }
      }).then((response)=>{
          console.log(response.data);
          if(response.data==='success'){
            setTitle("");
            setDescription("");
            setReason("");
            setPrice("");
            setImage("");
            setacceptTerm(!show_or_hide_details);
          }

          enqueueSnackbar('Successfully Update', {
            variant: 'success', anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center',
            }
          })

          if(userData.userType === "STUDENT"){
            history.push("/std/ViewMyProductDetailsOther?id="+product_id) ;
          }
          else if(userData.userType === "UNIONST" ){
            history.push("/ustd/ViewMyProductDetailsOther?id="+product_id);
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
        Others Advertisement
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
                multiline
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
                multiline
                fullWidth
                id="information"
                label="Information"
                name="information"
                value={information}
                autoComplete="information"
                onChange={e => setReason(e.target.value)}
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
                onChange={e => setPrice(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12}>
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
            </Grid> */}
           
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
           Update Post
          </Button>
         
        </form>
      </div>
    </Container>
  );
}

