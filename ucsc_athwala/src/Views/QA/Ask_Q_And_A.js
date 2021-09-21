import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import  TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useSnackbar} from "notistack";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import {Link, useHistory } from "react-router-dom";

const useStyles = makeStyles ({
    title:{
        color:"#546e7a",
        marginTop:50,
        marginBottom:20,
        fontSize:25,
      },
      filterbutton :{
        backgroundColor: "#757de8",
        color: "#FFFFFF",
        textTransform: "none",
        paddingTop:5,
        paddingLeft:10,
        paddingRight:10,
        marginTop:50,
        marginBottom:20,
        marginRight:90,
        float:"right",
        border:"none",
        "&:hover": {
          color: "#FFFFFF",
          backgroundColor: "#757de8",
          border: "1px solid #757de8",
        },    
    },

    backlink: {
        color:"#546e7a",
        marginTop:30,
        marginBottom:20,
        fontSize:15,
    }
})

export default function AskQuestion(){
    const classes = useStyles();
    const history = useHistory();

const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [tag, setTag] = React.useState('');
  const userData=JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const {enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const handleSubmit = (event) => {
     event.preventDefault(); 
     
    console.log(`
        question: ${question}
        answer: ${answer}
        tag: ${tag}
    `);

    const adminquestion={
        "question":question,
        "answer":answer,
        "tag": tag,
    }
      axios.post("http://localhost:5000/api/faqs/createQA",adminquestion,{
          headers:{
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
          }
      }).then((response)=>{
          console.log(response.data);
          if(response.data==='success'){
            setQuestion("");
            setAnswer("");
            setTag("");
            enqueueSnackbar('Successfully Post your Question And Answer', {
                variant: 'success', anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'center',
                }
              })
              if(userData.userType === "ADMIN"){
                history.push("/admin/AdminViewQA") ;
              }
          }

      }).catch((err)=>{

      })
 }

    return(
        <div>
        <Grid container spacing ={3}>
            <Grid item md={6}>
                <Typography variant="h5" className={classes.title}>Create Public Question And Answer</Typography>
            </Grid>
        </Grid> 
        <form onSubmit={handleSubmit} >
        <Grid container  spacing ={3} justify="center" >

            <Grid item md={10}>
                
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tag</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tag}
                    label="Tag"
                    required
                    onChange={handleChange}
                    >
                    <MenuItem value={"academic"}>Academic</MenuItem>
                    <MenuItem value={"non-academic"}>Non-Academic</MenuItem>
                    <MenuItem value={"history"}>History</MenuItem>
                    </Select>
                </FormControl>

            </Grid>
            <Grid item md={10}>
            <TextField
                autoComplete="question"
                name="question"
                variant="outlined"
                required
                fullWidth
                //size="small"
                id="question"
                multiline
                rows ={3}
                label="Question "
                value={question}
                onChange={e => setQuestion(e.target.value)}
                autoFocus
                
              />
            </Grid>
            <Grid item md={10}>
            <TextField
                autoComplete="answer"
                name="answer"
                variant="outlined"
                id="answer"
                label="Answer"
                value={answer}
                fullWidth
                multiline
                rows ={10}
                autoFocus
                onChange={e => setAnswer(e.target.value)}
                
              />
            </Grid>
            
            <Grid item md={10}>
            <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Post Question
                </Button>
                
            </Grid>

            

        </Grid>
        </form>

        <Grid container spacing ={3}>
            <Grid item md={6}>
                <Link to ='/admin/AdminViewQA'>
                <Typography variant="h5" className={classes.backlink}>Back to FAQ</Typography>
                </Link>
            </Grid>
        </Grid>

        </div>
             

        

    );
}