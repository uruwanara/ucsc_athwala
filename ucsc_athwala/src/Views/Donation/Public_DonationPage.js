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
import LandImage from '../../image/ucsc1.jpg'


const useStyles = makeStyles((theme) =>({
  root: {
    marginTop:10,
    flexGrow: 1,
    padding: theme.spacing(1)
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
    color:"#303f9f",
    marginTop:5,
    marginBottom:20,
    fontWeight: 'bold',
    fontFamily:"Poppins, sans-serif",
  },
  topic:{
    marginTop:'20px',
    marginBottom:'20px',
    fontFamily:"Poppins, sans-serif",
    fontSize:14,
    color:"#78909c",
    fontWeight:"normal"
  },
  formControl: {
    minWidth: 120,
    marginTop:'20px',
    marginLeft:'60px'
  },
  gridcontainer:{
    backgroundColor:'white',
    width:'100%'
  },
  descriptioncard:{
    backgroundColor:'#fafafa',
    height:"100%"
  },
  imgcard:{
    backgroundImage:`url(${LandImage})`, 
    boxShadow:'none' 
  },
  carddes:{
    backgroundColor:"transparent",
    marginTop:0,
    flexGrow: 1,
    padding: theme.spacing(10),
    textAlign:"center"
  },
  sectionlbl:{
    textAlign:"center",
    marginTop:'30px',
    marginBottom:'0px',
    fontFamily:"Poppins, sans-serif",
    fontSize:24,
    color:"#102027",
    fontWeight:"bold"
  }
}));


export default function Cases(){
  const classes = useStyles();

  const [mapset, SetMap] = useState([]);

  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = async () => {
        
    const response = await fetch(`http://localhost:5000/api/donations/publicall`, {
      method: "GET",
    });
    const result = await response.json();
    console.log(result);
    SetMap(result);
  };

  function FormRow (props){ 
      var link = "/public/viewpublic?id="+props.id;
    return (
      <React.Fragment>
        <Grid item xs={4}>
        <Card className={classes.root}>

          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              src= {Money}
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

    return(
    <div >
      <Grid container sm={12} className={classes.gridcontainer}>
        <Grid item sm={6} className={classes.descriptioncard}>
        <Card className={classes.carddes}>
            <CardActionArea style={{backgroundColor:"transparent"}}>
                <CardContent style={{backgroundColor:"transparent"}}>
                    <Typography gutterBottom variant="h3" component="h2" className={classes.title}>
                      Give a Little, <br></br>
                      Help a Lot..
                    </Typography>
                    <Typography gutterBottom variant="h3" component="h2" className={classes.topic}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    </Typography>
                </CardContent>
            </CardActionArea>
          </Card>

        </Grid>
          <Grid item sm={6} className={classes.imgcard}></Grid>
      </Grid> 
      <Grid item sm={12}>
      <Typography gutterBottom variant="h3" component="h5" className={classes.sectionlbl}>Featured Causes</Typography>
      </Grid>           
        <div className={classes.root}>
          <Grid container spacing={2}>
            {mapset.map(student => (  
                      <FormRow title={student.title} description={student.description} type={student.donationType} id={student.donationID}/> 
              ))}
                
          </Grid>
        </div>
    </div>

    );
}