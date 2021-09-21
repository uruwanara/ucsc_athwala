import React ,{useEffect, useState, useCallback} from 'react';
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
import PageviewIcon from '@material-ui/icons/Pageview';
import {RequestButton,MyCauseButton,MyDonationButton} from './Donation_button';
import Searchbar from './Donation_search';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';


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
  nounderline:{
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
    width: '100%',
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


export default function Cases(){
  const classes = useStyles();

  const userData=JSON.parse(localStorage.getItem("userData"));

  const [mapset, SetMap] = useState([]);
  const [filter, setFilter] = React.useState('all');
  const [open, setOpen] = React.useState(false);
  const [search,Setsearch] = useState("");

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

  const fetchData = async () => {
        
    const response = await fetch(`http://localhost:5000/api/donations/viewall`, {
      method: "GET",
    });
    const result = await response.json();
    console.log(result);
    SetMap(result);
  };

  const tabButton =() =>{
    if(userData.userType === "STUDENT" ||userData.userType === "UNIONST" ){
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

  };

  useEffect(() => {
    filterposts();
  }, [filter]);

  const filterposts = () => {
    
    axios.get("http://localhost:5000/api/donations/filter", {
    params: {type:filter},
    }).then((response) => {
        console.log(response.data);
        SetMap(response.data);
        console.log(filter);
    })
  }

  const searchSubmit = (searchtxt) => {
    Setsearch(searchtxt);
    console.log(search);

    const searchtext={
      "search": search,
  }
  axios.post("http://localhost:5000/api/donations/search",searchtext,{
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
  }


  function FormRow (props){
    var link;
    var id = props.id;
    var imglink;
    if(props.type == 'note'){
      if(userData.userType === "STUDENT"){
        link = "/std/viewNoteCause_details?id="+id;
      }
      else if(userData.userType === "UNIONST" ){
        link = "/ustd/viewNoteCause_details?id="+id;
      }
      else if(userData.userType === "ALUMNI" ){
        link = "/pst/viewNoteCause_details?id="+id;
      }
      else if(userData.userType === "ADMIN"){
        link = "/admin/viewcausesdetails?id="+id;
      }
      imglink = Note;
    }
    else if (props.type == 'cloth'){
      if(userData.userType === "STUDENT"){
        link = "/std/viewClothCause_details?id="+id;
      }
      else if(userData.userType === "UNIONST" ){
        link = "/ustd/viewClothCause_details?id="+id;
      }
      else if(userData.userType === "ALUMNI" ){
        link ="/pst/viewClothCause_details?id="+id;
      }
      else if(userData.userType === "ADMIN"){
        link = "/admin/viewcausesdetails?id="+id;
      }
      imglink = Cloth;
    }
    else if (props.type == 'device'){
      if(userData.userType === "STUDENT"){
        link = "/std/viewDeviceCause_details?id="+id;
      }
      else if(userData.userType === "UNIONST" ){
        link = "/ustd/viewDeviceCause_details?id="+id;
      }
      else if(userData.userType === "ALUMNI" ){
        link = "/pst/viewDeviceCause_details?id="+id;
      }
      else if(userData.userType === "ADMIN"){
        link = "/admin/viewcausesdetails?id="+id;
      }
      imglink = Device;
    }
    else if (props.type == 'money'){
      if(userData.userType === "STUDENT"){
        link = "/std/viewMoneyCause_details?id="+id;
      }
      else if(userData.userType === "UNIONST" ){
        link = "/ustd/viewMoneyCause_details?id="+id;
      }
      else if(userData.userType === "ALUMNI" ){
        link = "/pst/viewMoneyCause_details?id="+id;
      }
      else if(userData.userType === "ADMIN"){
        link = "/admin/viewcausesdetails?id="+id;
      }
      imglink = Money;
    }
    else if (props.type == 'other'){
      if(userData.userType === "STUDENT"){
        link = "/std/viewOtherCause_details?id="+id;
      }
      else if(userData.userType === "UNIONST" ){
        link = "/ustd/viewOtherCause_details?id="+id;
      }
      else if(userData.userType === "ALUMNI" ){
        link = "/pst/viewOtherCause_details?id="+id;
      }
      else if(userData.userType === "ADMIN"){
        link = "/admin/viewcausesdetails?id="+id;
      }
      imglink = Other;
    }
    if(userData.userType === "ADMIN"){
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
              <Link to={link} className={classes.nounderline}>
              <Button size="small" 
              className={classes.donateButton} 
              startIcon={<FavoriteBorderIcon />}
              >
                View Details
              </Button>
             </Link> 
  
            </CardActions>
  
        </Card>
          </Grid>
        </React.Fragment>
      );
    }
    else{
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
            <Link to={link} className={classes.nounderline}>
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
   
  }

    return(
    <div>
        <Grid container spacing={2} className={classes.topic}>
          <Grid item md={2}><Typography variant="h5" className={classes.title}>All Causes</Typography></Grid>
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
                  {tabButton()}
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