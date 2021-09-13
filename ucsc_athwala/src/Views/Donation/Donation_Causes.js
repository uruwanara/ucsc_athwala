import React ,{useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Cloth from '../../image/cloth.jpg';
import Device from '../../image/device.jpg';
import Money from '../../image/money.jpg';
import Note from '../../image/note.jpg';
import Other from '../../image/other.jpg';
import TextTruncate from 'react-text-truncate';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TextField from '@material-ui/core/TextField';
import FilterListIcon from '@material-ui/icons/FilterList';
import {RequestButton,MyCauseButton,MyDonationButton} from './Donation_button';
import axios from "axios";



const useStyles = makeStyles((theme) =>({
  root: {
    marginTop:10,
    flexGrow: 1,
  },

  donateButton:{
    color: "#FFFFFF",
    backgroundColor: "transparent",
    textTransform: "none",
    "&:hover": {
      textDecoration: "none"
    },

  },
  cardFooter: {
    backgroundColor: "#757de8",
  },

  filterbar: {
     float:"right",
  
  },

  textfilter:{
    width: '20ch',
    backgroundColor:"#FFFFFF",
  },

  filterbutton: {
    backgroundColor: "#757de8",
    color: "#FFFFFF",
    textTransform: "none",
    paddingTop:5,
    paddingLeft:10,
    paddingRight:10,
    border:"none",
    borderRadius:20,
    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: "#757de8",
      border: "1px solid #757de8",
    },
  },
  title:{
    color:"#546e7a",
    marginTop:5,
    marginBottom:20,
  }
}));

{/*const students = [  
    {  
      'id': 1,
      'type' : 'note' , 
      'title': 'DSA Lecture note',   
      'description': 'i am 2nd year student.I need DSA 2 lecture note' , 
      'image' :Note,
    },  
     
    {  
      'id': 3, 
      'type' : 'device' ,   
      'title': 'Mobile phone',   
      'description': 'I am a first year student. i need mobile phone' ,
      'image' :Device,   
    }, 
    {  
      'id': 4, 
      'type' : 'money' ,   
      'title': 'Course fees',   
      'description': 'help with money for course fees' , 
      'image' :Money, 
    }, 
    {  
      'id': 5,
      'type' : 'note' ,    
      'title': 'DSA Lecture note',   
      'description': 'im 2nd year student.I need DSA 2 lecture note' ,  
      'image' :Note,
    },
    {  
      'id': 6,  
      'type' : 'other' ,  
      'title': 'help for my brothers recovery',   
      'description': 'I am a second year student. My brother got accident last month.' , 
      'image' :Other,  
    },
    {  
      'id': 7,  
      'type' : 'note' ,  
      'title': 'Database Lecture note',   
      'description': 'im 2nd year student.I need database lecture note' ,  
      'image' :Note, 
    },
    {  
      'id': 2, 
      'type' : 'cloth' ,   
      'title': 'Office Trousers',   
      'description': 'i am 2nd year student.I need Office Trousers' , 
      'image' :Cloth,
    }, 
]; */}



export default function Cases(){
  const classes = useStyles();

  const userData=JSON.parse(localStorage.getItem("userData"));

  const [mapset, SetMap] = useState([]);

  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = async () => {
        
    const response = await fetch(`http://localhost:5000/api/donations/viewall`, {
      method: "GET",
    });
    const result = await response.json();
    console.log(result);
    SetMap(result);
  };

  const tabButton =() =>{
    if(userData.userType === "STUDENT"){
      return(
        <>
        <RequestButton />
        <MyCauseButton />
        <MyDonationButton />
        </>
      );
    }
    if(userData.userType === "ALUMNI"){
      return(
        <>
        <MyDonationButton />
        </>
      );
    }

  }

  

  function FormRow (props){
    var link;
    var id = props.id;
    var imglink;
    if(props.type == 'note'){
      link = "/std/viewNoteCause_details?id="+id;
      imglink = Note;
    }
    else if (props.type == 'cloth'){
      link = "/std/viewClothCause_details?id="+id;
      imglink = Cloth;
    }
    else if (props.type == 'device'){
      link = "/std/viewDeviceCause_details?id="+id;
      imglink = Device;
    }
    else if (props.type == 'money'){
      link = "/std/viewMoneyCause_details?id="+id;
      imglink = Money;
    }
    else if (props.type == 'other'){
      link = "/std/viewOtherCause_details?id="+id;
      imglink = Other;
    }
    return (
      <React.Fragment>
        <Grid item xs={4}>
        <Card className={classes.root}>

          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              src= {imglink}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              
              <TextTruncate
                  line={1}
                  element="span"
                  truncateText="…"
                  text={props.description}
              />
            </CardContent>
          </CardActionArea>

          <CardActions className={classes.cardFooter}>
            <Link to={link}>
            <Button size="small" 
            className={classes.donateButton} 
            startIcon={<FavoriteBorderIcon />}
            >
              Donate Now
            </Button>
           </Link> 

          </CardActions>

      </Card>
        </Grid>
      </React.Fragment>
    );
  }

    return(
    <div>
        <div><Typography variant="h5" className={classes.title}>All Causes</Typography></div>
            <div>
              <div style={{float:"left"}}>
              <Grid container spacing={4}>
                  {tabButton()}
              </Grid>
              
              </div>

              <div className={classes.filterbar}>
                <Grid container spacing={1} alignItems="flex-end" >
                  <Grid item>
                  <TextField id="outlined-basic" variant="outlined" size="small" className={classes.textfilter}/>
                  </Grid>
                  <Grid item>
                      <Button size="large" 
                        className={classes.filterbutton} 
                        startIcon={<FilterListIcon />}
                        >
                          Filter
                        </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
              
        <div className={classes.root}>
          <Grid container spacing={6}>
            {mapset.map(student => (  
                      <FormRow title={student.title} description={student.description} type={student.donationType} id={student.donationID}/> 
              ))}
                
          </Grid>
        </div>
    </div>

    );
}