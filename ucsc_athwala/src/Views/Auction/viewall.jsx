import React ,{useEffect, useState} from 'react';
import Link from '@material-ui/core/Link';
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
import Phone from '../../image/phone.jpg';
import Money from '../../image/money.jpg';
import Charger from '../../image/charger.jpg';
import Mobile from '../../image/mobileS.jpg';
import Note from '../../image/note.jpg';
import Other from '../../image/other.jpg';
import TextTruncate from 'react-text-truncate';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TextField from '@material-ui/core/TextField';
import FilterListIcon from '@material-ui/icons/FilterList';
import {RequestButton,MyCauseButton,MyDonationButton,PastButton} from './Donation_button';
import GavelIcon from '@material-ui/icons/Gavel';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useHistory } from 'react-router-dom';
import axios from 'axios';




const useStyles = makeStyles((theme) =>({
  root: {
    marginTop:10,
    flexGrow: 1,
  },

  donateButton:{
    color: "#FFFFFF",
    backgroundColor: "transparent",
    textTransform: "none"
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

const students = [  
    {  
      //  'id': 1,
      //  'title': 'Mobile Phone',   
      //  'description': 'i am 2nd year student.I need DSA 2 lecture note' , 
      'image' :Phone,
    },  
     
    // {  
    //   'id': 3,    
    //   'title': 'Laptop',   
    //    'description': 'I am a first year student. i need mobile phone' ,
    //   'image' :Device,   
    // }, 
    // {  
    //   'id': 4,    
    //   'title': 'Charger',   
    //    'description': 'help with money for course fees' , 
    //   'image' :Charger, 
    // }, 
    // {  
    //   'id': 5,    
    //   'title': 'DSA Lecture note',   
    //   // 'description': 'im 2nd year student.I need DSA 2 lecture note' ,  
    //   'image' :Note,
    // },
    // {  
    //   'id': 6,  
    //   'type' : 'other' ,  
    //   'title': 'help for my ',   
    //   'description': 'I am a second year student. My brother got accident last month.' , 
    //   'image' :Other,  
    // },
    // {  
    //   'id': 7,    
    //   'title': 'Database Lecture note',   
    //   // 'description': 'im 2nd year student.I need database lecture note' ,  
    //   'image' :Note, 
    // },
    // {  
    //   'id': 2,    
    //   'title': 'Office Trousers',   
    //   // 'description': 'i am 2nd year student.I need Office Trousers' , 
    //   'image' :Cloth,
    // }, 
]; 
export default function Cases(){
  const classes = useStyles();

  const userData=JSON.parse(localStorage.getItem("userData"));

  const [mapset, SetMap] = useState([]);

  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const userData=JSON.parse(localStorage.getItem("userData"));
    const stid = userData.id;
        
    axios.get("http://localhost:5000/api/auction/viewall", {
    params: {id:stid},
    }).then((response) => {
        console.log(response.data);
        SetMap(response.data);
        
    })
  };
  

  function FormRow (props){
  
    let history = useHistory();
    
     var imglink;
     if(props.year == 'First Year'){
      imglink = Device;
     }
     if(props.year == 'Second Year'){
      imglink = Charger;
     }
     if(props.year == 'Third Year'){
      imglink = Mobile;
     }
     if(props.year == 'Fourth Year'){
      imglink = Note;
     }
    // else if (props.type == 'cloth'){
    //   link = "/std/viewClothCause_details";
    // }
    // else if (props.type == 'device'){
    //   link = "/std/viewDeviceCause_details";
    // }
    // else if (props.type == 'money'){
    //   link = "/std/viewMoneyCause_details";
    // }
    // else if (props.type == 'other'){
    //   link = "/std/viewOtherCause_details";
    // }

    const viewMore=(id)=>{
      const userData=JSON.parse(localStorage.getItem("userData"));
      if(userData.userType === "STUDENT"){
      history.push(`/std/bid/${id}`);
      }
      if(userData.userType === "UNIONST"){
        history.push(`/ustd/bid/${id}`);
      }
    }
    console.log("aaaa");
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
            </CardContent>
          </CardActionArea>
          

          <CardActions className={classes.cardFooter}>
            {/* { <Link to={link}> } */}
            
            <Button size="small" 
            className={classes.donateButton} 
            startIcon={<GavelIcon />}
            color='secondary'
            onClick={()=>viewMore(props.id)}
            >
              Bid Now
            </Button>
           {/* { </Link>  } */}

          </CardActions>

      </Card>
        </Grid>
      </React.Fragment>
    );
  }
    return(
    <div>
        <div><Typography variant="h5" className={classes.title}>All Auctions</Typography></div>
            <div>
              <div style={{float:"left"}}>
              <Grid container spacing={4}>
                <RequestButton  />
                <MyCauseButton />
                 <MyDonationButton />
                 {<PastButton />}
              </Grid>
              
              </div>

              <div className={classes.filterbar}>
                {/* <Grid container spacing={1} alignItems="flex-end" >
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
                </Grid> */}
              </div>
            </div>
              
            <div className={classes.root}>
          <Grid container spacing={6}>
            {mapset.map(student => (  
                      <FormRow  title={student.title } year={student.year } id={student.auction_id } image={student.image}/> 
              ))}
                
          </Grid>
        </div>
    </div>

    );
}