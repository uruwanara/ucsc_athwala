import React ,{useEffect,useState} from 'react';
import {Link, useHistory } from "react-router-dom";
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
import QueueIcon from '@material-ui/icons/Queue';
import FilterListIcon from '@material-ui/icons/FilterList';
import PageviewIcon from '@material-ui/icons/Pageview';
import {RequestButton,AllCauseButton,MyDonationButton} from './Donation_button';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) =>({
  root: {
    marginTop:10,
    flexGrow: 1,
  },

  donateButton:{
    color: "#FFFFFF",
    backgroundColor: "transparent",
    textTransform: "none",
  },

  statusbutton:{
    color: "#FFFFFF",
    backgroundColor: "transparent",
    textTransform: "none",
    width:"max-width"
  },

  cardFooter: {
    backgroundColor: "#757de8",
    display:"flex",
  },

  filterbar: {
     float:"right",
  
  },

  textfilter:{
    width: '100%',
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
  },
  topic:{
    marginTop:'30px',
    marginBottom:'20px',
  },
  formControl: {
    minWidth: 120,
    marginTop:'20px',
    marginLeft:'60px'
  },
}));

{/*const students = [  
    {  
      'id': 1,
      'type' : 'cloth' ,   
      'title': 'Office Trousers',   
      'description': 'i am 2nd year student.I need Office Trousers' , 
      'image' :Cloth,
      'status':'Not received',
    },  
    {  
      'id': 2, 
      'type' : 'note' , 
      'title': 'DSA Lecture note',   
      'description': 'i am 2nd year student.I need DSA 2 lecture note' , 
      'image' :Note,
      'status':'Not received',
    },  
    {  
      'id': 3, 
       'type' : 'money' ,   
      'title': 'Course fees',   
      'description': 'help with money for course fees' , 
      'image' :Money,
      'status':'received',   
    }, 
    {  
      'id': 4, 
      'type' : 'device' ,   
      'title': 'Mobile phone',   
      'description': 'I am a first year student. i need mobile phone' ,
      'image' :Device,
      'status':'Pending',
      
    }, 
    {  
      'id': 5,
      'type' : 'other' ,  
      'title': 'help for my brothers recovery',   
      'description': 'I am a second year student. My brother got accident last month.' , 
      'image' :Other,
      'status':'Not received', 
    },
];*/}

export default function MyCases(){
  const history = useHistory();
  const classes = useStyles();
  const [mapset, SetMap] = useState([]);
  const [filter, setFilter] = React.useState('all');
  const [open, setOpen] = React.useState(false);
  const [search,Setsearch] = useState("");
  const userData=JSON.parse(localStorage.getItem("userData"));

  const handleChange = (event) => {
    event.preventDefault(); 
    setFilter(event.target.value);

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = () => {
    
    const stid = userData.id;

    axios.get("http://localhost:5000/api/donations/viewmyall", {
    params: {id:stid},
    }).then((response) => {
        console.log(response.data);
        SetMap(response.data);
        
    })
  };

  useEffect(() => {
    filterposts();
  }, [filter]);

  const filterposts = () => {

    const filtertext = {
      "type":filter,
      "id": userData.id
    }
    
    axios.post("http://localhost:5000/api/donations/myfilter",filtertext,{
      headers:{
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((response) => {
        console.log(response.data);
        SetMap(response.data);
    });
  };

  const searchSubmit = (searchtxt) => {
    Setsearch(searchtxt);
    console.log(search);

    const searchtext={
      "search": search,
      "userid":userData.id
  }
  axios.post("http://localhost:5000/api/donations/mysearch",searchtext,{
          headers:{
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
            }
          }).then((response) => {
              console.log(response.data);
              SetMap(response.data);
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
  };


  const FormRow = (props)=> {
    const userData=JSON.parse(localStorage.getItem("userData"));
    var id = props.id;
    var imglink;
    var link;
    if(props.type == 'note'){
      imglink = Note;
    }
    else if (props.type == 'cloth'){
      imglink = Cloth;
    }
    else if (props.type == 'device'){
      imglink = Device;
    }
    else if (props.type == 'money'){
      imglink = Money;
    }
    else if (props.type == 'other'){
      imglink = Other;
    }
    if(userData.userType === "STUDENT"){
      link = "/std/viewdetails_mydonation?id="+id;
    }
    if(userData.userType === "UNIONST"){
      link = "/ustd/viewdetails_mydonation?id="+id;
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
            <Button size="small" 
            className={classes.statusbutton} 
            startIcon={<PageviewIcon />}
            onClick={()=>{ history.push(link)}}
            >
              View Details
            </Button>
          </CardActions>

      </Card>
        </Grid>
      </React.Fragment>
    );
  }
  
    return(
    <div>
      <Grid container spacing={2} className={classes.topic}>
          <Grid item md={2}><Typography variant="h5" className={classes.title}>My Causes</Typography></Grid>
          <Grid item md={8}>{searchbar()}</Grid>
          <Grid item md={2}>
            <form autoComplete="off">
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={filter}
                  onChange={handleChange}
                >
                  <MenuItem value='all'>All</MenuItem>
                  <MenuItem value='note'>Lecture notes</MenuItem>
                  <MenuItem value='cloth'>Cloths</MenuItem>
                  <MenuItem value='device'>Devices</MenuItem>
                  <MenuItem value='money'>Money</MenuItem>
                  <MenuItem value='other'>Other</MenuItem>
                </Select>
              </FormControl>
             </form> 
          </Grid>
        </Grid>
    <div>
      <div style={{float:"left"}}>
      <Grid container spacing={4}>
        <RequestButton />
        <AllCauseButton />
        <MyDonationButton />
      </Grid>
      
      </div>

      {/*<div className={classes.filterbar}>
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
    </div>*/}
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