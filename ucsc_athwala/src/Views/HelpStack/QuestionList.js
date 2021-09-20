import React ,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HelpIcon from '@material-ui/icons/Help';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import BlueGrey from '@material-ui/core/colors/blueGrey';
import Blue from '@material-ui/core/colors/blue';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PageviewIcon from '@material-ui/icons/Pageview';

const useStyles = makeStyles((theme) => ({
  link:{
    backgroundColor:'#ffffff',
    border: '1px solid #c5cae9'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  Nounderline :{
    fontWeight:'bolder',
    fontFamily:'Poppins, sans-serif',
    
    "&:hover": {
      textDecoration: "none"
    },
  },
  linktext:{
    color:BlueGrey[800],
    "&:hover": {
        color:Blue[800],
      },
  },
  textfilter : {
    width: '100%',
    backgroundColor:"#FFFFFF",     
},

filterbutton :{
    backgroundColor: "#757de8",
    color: "#FFFFFF",
    textTransform: "none",
    paddingTop:5,
    paddingLeft:10,
    paddingRight:10,
    border:"none",
    borderRadius:15,
    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: "#757de8",
      border: "1px solid #757de8",
    },    
},
}));

export default function NestedList() {
  const classes = useStyles();

  const [questionset, SetQuestion] = useState([]);
  const [search, Setsearch] = useState("");

  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = async () => {
        
    const response = await fetch(`http://localhost:5000/api/helpstacks/viewallquestion`, {
      method: "GET",
    });
    const result = await response.json();
    console.log(result);
    SetQuestion(result);

  };

  const searchSubmit = (searchtxt) => {
      Setsearch(searchtxt);

    const searchtext={
        "search": search,
    }
    axios.post("http://localhost:5000/api/helpstacks/search",searchtext,{
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
          <Grid item md={6}>
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
              size="large" 
              className={classes.filterbutton} 
              startIcon={<PageviewIcon sx={{ fontSize: 40 }}/>}
              onClick={() => {
                  searchSubmit(search);
              }}
                >
                 Search
                </Button>
          </Grid>
        </Grid>
        );
  }

  function Questionlist(props){
    const id = props.id;
    var link = "/std/helpstack/viewQuestionAnswer?id="+id;
    return(     
      <List >
      <ListItem className={classes.link}>
          <ListItemIcon><HelpIcon color="secondary"/></ListItemIcon>
              <Grid item md={10}>
                  <Link to={link} className={classes.Nounderline}>
                      <ListItemText className={classes.linktext}>{props.title}</ListItemText>
                  </Link>
              </Grid>
              <Grid item md={2}>
                  <Link to={link} className={classes.Nounderline}>
                      <ListItemText >{props.ansCount} answers</ListItemText>
                  </Link>
              </Grid>       
      </ListItem>
      </List>
    );

  }


  return (
    <>
          <Grid item md={12}>
              {searchbar()}
          </Grid>
    
        <Grid item md={12}>
            {questionset.map(question => (  
                      <Questionlist id={question.q_id} title={question.title} ansCount={question.ansCount}/> 
              ))}
        </Grid>
    </>
    
  );
}