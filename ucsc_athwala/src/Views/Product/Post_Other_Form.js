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
  const {enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [file,setfile] = React.useState("");
  
  const handleSubmit = (event) => {

    const rx_float = /^[+-]?\d*(?:[.,]\d*)?$/;

    if(rx_float.test(price) === false){
      console.log('im not float');
      enqueueSnackbar('Please enter valid amount', {
          variant: 'error', anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          }
      });
      setPrice("");
  }

  else if(parseFloat(price) <= 0){
    enqueueSnackbar('Please enter value for donate', {
        variant: 'error', anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        }
    });
    setPrice("");
}
else{

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
      "user_id":userData.id,
      "title": title,
      "description": description,
      "price": price,
      "information": information,
      "image": image,
      "show_or_hide_details": show_or_hide_details,
  } 



   
  axios.post("http://localhost:5000/api/products/sellOther",postProduct,{
    headers:{
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
    }
}).then((response)=>{
  console.log(response.data);
  console.log(response.data.states);
  console.log("nnnnnnnnnnnnnnnnn");
  if(response.data.states ==="success"){
      setTitle("");
      setDescription("");
      setReason("");
      setPrice("");
      setImage("");
      setacceptTerm(!show_or_hide_details);
      console.log("suuuuuuuu");
      console.log(response.data.product_id);
      const product_id = response.data.product_id;
      //setProductId(response.data.product_id);
      console.log(product_id);
      const formData=new FormData();
      formData.append('file',file)
      console.log(formData.file);

      axios.post("http://localhost:5000/api/productfiles/upload/"+product_id,formData,{
        headers:{
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((response) => {
        if(response.data.status === 'ok'){
            console.log("Sucesss -------------------");

            enqueueSnackbar('Create Successful', {
              variant: 'success', anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
              }
            })
  
            if(userData.userType === "STUDENT"){
              history.push("/std/ViewMyProduct") ;
            }
            else if(userData.userType === "UNIONST" ){
              history.push("/ustd/ViewMyProduct");
            }
          

        }
        else{
            console.log(response);
        }
    }).catch((err1)=>{
      console.log(err1);
  })
    }


}).catch((err)=>{

})


}
    
  }


  const onChangeHandler = (event)=>{
    console.log(event.target.files[0]);
   setfile(event.target.files[0]);
  
  //  const formData=new FormData()
  //   formData.append('file',file)
  console.log(file);
  
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
            <Grid item xs={12}>
                <Typography component="h1" variant="subtitle1">
                    You are able to upload image here
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Button
                variant="contained"
                component="label"
                //color="primary"
                className={classes.uploadbtn}
            >
              Upload File
                <input
                  type="file"
                  name="file"
                  onChange={onChangeHandler}
               />
            </Button>
            </Grid>
           
            <Grid item xs={12}>
              {/* <FormControlLabel
                control={<Checkbox name="acceptTerm" color="primary"  onChange={e => setacceptTerm(true)}/>}
                label="I Don't need to show my identity to others."
              /> */}
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

