import React, {useEffect,useState} from 'react';
import SearchBar from './SearchBar'
import { Container, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import FQAList from './FQA_List';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import PageviewIcon from '@material-ui/icons/Pageview';

const useStyles = makeStyles ({
    title:{
        color:"#546e7a",
        marginTop:20,
        marginBottom:20,
        fontSize:40,
      },
      textfilter:{
        marginLeft:150,
        width: '80%',
        backgroundColor:"#FFFFFF",
      },
    
      filterbutton: {
        backgroundColor: "#757de8",
        color: "#FFFFFF",
        textTransform: "none",
        paddingTop:5,
        border:"none",
        borderRadius:20,
        "&:hover": {
          color: "#FFFFFF",
          backgroundColor: "#757de8",
          border: "1px solid #757de8",
        },
      },
  
})



const students = [  
    
    {  
        'title' : 'vission of the UCSC' , 
        'answer': 'Be a global leader in computing, advancing the frontiers of new knowledge through learning and research.',   
    },  
    {  
        'title' : 'Mission of the UCSC' , 
        'answer': 'To advance and enhan computing knowledge,fostering global strategic alliances,promoting crossdisciplinary research,producing socially responsibleprofessionalswith entrepreneurial skills,leadership qualities and integrity contributing to position the country  as a knowledge hub in the region.',   
    },  
    {  
        'title' : 'Internal Undergraduate Degree Programmes' , 
        'answer': 'Bachelor of Science in Computer Science (BSc. in CS) , Bachelor of Science Honours in Computer Science (BSc. (Hons) in CS) , Bachelor of Science Honours in Software Engineering (BSc. (Hons) in SE) , Bachelor of Science in Information Systems (BSc. in IS) , Bachelor of Science Honours in Information Systems (BSc. (Hons) in IS)',   
    },  
    {  
        'title' : 'Postgraduate Degree Programmes' , 
        'answer': 'Master of Computer Science (MCS) , Master of Science in Computer Science (MSc. in CS) , Master of Information Technology (MIT) , Master of Information Security (MIS) , Master of Business Analytics (MBAnalytics) , Master of Cybersecurity (MC)',   
    },  
    {  
        'title' : 'Postgraduate Research Degrees' , 
        'answer': 'Doctor of Philosophy (PhD) , Master of Philosophy (MPhil)',   
    },  
];




export default function QAform(){
    const classes = useStyles();
    const [mapset, SetMap] = useState([]);
   
    const userData=JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
    const [search,Setsearch] = useState("");
    

    const [questionset, SetQuestion] = useState([]);

  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = async () => {
        
    const response = await fetch(`http://localhost:5000/api/faqs/viewallquestion`, {
      method: "GET",
    });
    const result = await response.json();
    
    console.log(result);
    SetQuestion(result);

  };

  const searchSubmit = (searchtxt) => {
    Setsearch(searchtxt);
    console.log(search);

    const searchtext={
      "search": search,
  }
  axios.post("http://localhost:5000/api/faqs/faqsearch",searchtext,{
          headers:{
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
            }
          }).then((response) => {
              console.log(response.data);
              SetQuestion(response.data);
          });
  };


  const searchbar = () => {
    return (

      <Grid container spacing={1} >
      <Grid item md={10}>
  
          <TextField 
          id="outlined-basic" 
          variant="outlined" 
          size="small" 
          className={classes.textfilter}
          value={search}
          placeholder="Search.."
          onChange={e => Setsearch(e.target.value)}
          />
      
      </Grid>
      <Grid item md={2}>
  
          <Button
          type="submit"
          size="large" 
          className={classes.filterbutton} 
          startIcon={<PageviewIcon sx={{ fontSize: 40 }}/>}
          onClick={() => {
              searchSubmit(search);
          }}
          >
            search
          </Button>
      
      </Grid>
    </Grid>
  
    );
  }

        function FormRow (props){

           const  title = props.title;
           const  answer = props.answer;
             
            return (
                <React.Fragment>
                        <FQAList title={title} answer={answer}/>
                </React.Fragment>
               // <div></div>
            );
          }
        
        return(
            <Container>
                <div>{searchbar()}</div>
                <div><Typography variant="h5" className={classes.title}>FAQ</Typography></div>
                
                <div>
                <Grid container spacing={6}>
                {questionset.map(student => (  
                      <FormRow title={student.questions} answer={student.answer}/> 
                ))}
                
          </Grid>
          </div>
            </Container>
        );
}
