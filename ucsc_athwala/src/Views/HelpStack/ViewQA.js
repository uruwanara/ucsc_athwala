import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router';
import axios from "axios";

const useStyles = makeStyles({
    title:{
        color:"#546e7a",
        marginTop:40,
        fontSize:20,
        fontWeight:'normal'
      },
    votebutton:{
        backgroundColor: "#757de8",
        color: "#FFFFFF",
        padding:10,
        marginRight:10,
        border:'none',
        borderRadius:5,
    },
    span:{
        fontSize:20,
    },backlink: {
        color:"#546e7a",
        marginTop:30,
        marginBottom:20,
        fontSize:15,
    },
    answer:{
        color:"#000000",
        marginTop:40,
        fontSize:14,
        fontWeight:'normal',
        fontFamily:"Poppins, sans-serif",
        textAlign:'justify'
    },
    txtfield:{
        fontFamily:"Poppins, sans-serif",
    },
    answerby:{
        color:"#546e7a",
        marginTop:5,
        fontSize:14,
        fontWeight:'normal',
        fontFamily:"Poppins, sans-serif",
    }
})

export default function ViewQA(){
    const classes = useStyles();

    const search = useLocation().search;
    const[title, setTitle] = useState("");
    const[questionbody, setQuestionbody] = useState("");
    const[mapset, setMap] = useState([]);
    const[answer,setMyanswer] = useState("");

    const userData=JSON.parse(localStorage.getItem("userData"));
    const questionid = new URLSearchParams(search).get("id");
    useEffect(() => {
        
        fetchQuestion(questionid);
        fetchAnswers(questionid);
    },[]);

    const fetchQuestion = (questionid) => {
        axios.get("http://localhost:5000/api/helpstacks/viewquestion", {
        params: {questionid:questionid},
        }).then((response) => {
            console.log(response.data);
            setTitle(response.data[0].title);
            setQuestionbody(response.data[0].question);
        })
    };

    const fetchAnswers = (questionid) => {
        axios.get("http://localhost:5000/api/helpstacks/viewanswer", {
        params: {questionid:questionid},
        }).then((response) => {
            console.log(response.data);
            setMap(response.data);
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
console.log("hriii");
        const myanswer={
            "questionid":questionid,
            "userid": userData.id,
            "answer":answer,
        }
          axios.post("http://localhost:5000/api/helpstacks/answerquestion",myanswer,{
              headers:{
                  "access-control-allow-origin" : "*",
                  "Content-type": "application/json; charset=UTF-8"
              }
          }).then((response)=>{
              console.log(response.data);
              if(response.data==='success'){
                setMyanswer("");
                console.log("hriii");
                fetchQuestion(questionid);
                fetchAnswers(questionid);
              }
    
          }).catch((err)=>{
    
          })

    }

    return(
        <div>
            <Grid container md={12} spacing={4}>
                    <Grid item md={12}>
                        <div><Typography variant="h5" className={classes.title}>{title}</Typography></div>
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            autoComplete="question"
                            name="question"
                            variant="outlined"
                            id="question"
                            value={questionbody}
                            className={classes.txtfield}
                            fullWidth
                            multiline
                            rows ={5}
                            inputProps={
                                { readOnly: true, }
                            }                         
                        />  
                    </Grid>

                    {mapset.map(answer => (  
                        <>
                         <Grid item md={2}>
                         <Typography variant="h5" className={classes.title}>Answer By</Typography> 
                         <Typography variant="h5" className={classes.answerby}>{answer.fname} {answer.lname}</Typography> 
                         </Grid>
                         <Grid item md={10}>
                         <Typography variant="subtitle1" className={classes.answer}>{answer.answer}</Typography>   
                         </Grid >
                         </>
                    ))}
                    
                    
                    <Grid item md={12}>
                        <Link to ='/std/helpstack/default'>
                        <Typography variant="h5" className={classes.backlink}>Back to Top Questions</Typography>
                        </Link>
                    </Grid>

                    <Grid item md={12}>
                        <Divider />
                    </Grid>
                </Grid>

        <form  onSubmit={handleSubmit}>
        <Grid container  spacing ={3} >

            <Grid item md={12}>
                    <Typography variant="h5" className={classes.title}>Your Answer</Typography>
            </Grid>

            <Grid item md={12}>
            <TextField
                autoComplete="body"
                name="body"
                variant="outlined"
                id="body"
                label="body"
                value={answer}
                fullWidth
                multiline
                rows ={10}
                autoFocus
                onChange={e => setMyanswer(e.target.value)}
                
              />
              
            </Grid>
            
            <Grid item md={2}>
            <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Post Answer
                </Button>
                
            </Grid>

            

        </Grid>
        </form>

                    

        </div>
    );
}