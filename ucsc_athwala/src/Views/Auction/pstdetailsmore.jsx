import React ,{useEffect, useState} from 'react';
import './Donation.css';
import { makeStyles } from '@material-ui/core/styles';
import Note from '../../image/note.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      }, flex1: {
        flexGrow: 1,
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      title:{
        color:"#546e7a",
        marginTop:10,
        marginBottom:20,
        fontFamily:"Poppins, sans-serif",
      },

      card:{
        backgroundColor:"white",
        border:"none",
        boxShadow:"none",
        position: "relative",
        bottom: "0px",
        height:"300px",
        width:"500px",
        left:"10px"
      },

      labelname: {
          marginLeft:40,
          marginBottom:10,
          color:"000000",
          fontFamily:"Poppins, sans-serif",
          width:"150px"
      },

      labelvalue:{
        marginLeft:10,
        marginBottom:10,
        color:"000000",
        fontFamily:"Poppins, sans-serif",
        width:"200px"
      },

      contactbtn:{
          textTransform:"none",
          fontFamily:"Poppins, sans-serif",
      }
  
  }));
  export function NoteDoneeDetails(props){
    const history = useHistory();
    const classes = useStyles();
    const [mapset, SetMap] = useState([]);
  
    useEffect(() =>{
      fetchData();
    },[]);
    const { auction_id } = useParams();
    const fetchData = () => {
      const userData=JSON.parse(localStorage.getItem("userData"));
      // const auction_id = userData.id;
      
  
      axios.get("http://localhost:5000/api/auction/past", {
          params: {id:auction_id},
      }).then((response) => {
          console.log(response.data);
          SetMap(response.data);
          
      })
    };
  
  
  
    function FormRow (props){
      const userData=JSON.parse(localStorage.getItem("userData"));
      // var id = props.id;
  
       var link;
      // if(props.type == 'note'){
      //   link = "/std/viewNoteCause_details";
      // }
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
      // if(userData.userType === "STUDENT"){
      //   link = "/std/aucstop?id="+id;
      // }
      // if(userData.userType === "UNIONST"){
      //   link = "/std/aucstop?id="+id;
      // }

    //   var bid ;
    //   if(props.bid1 === 0){
    //     bid = "No one Bid Yet ";
        
    //   }
    //   else{
    //     bid = props.bid1;
    //   }
    return(
      
        <Grid item xs={6}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" className={classes.title}>Your Auction Has Been End </Typography>
                    <Typography variant="h5" className={classes.title}>Highest Bidder </Typography>
                    {/* <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Study year</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>2 nd year</Typography></div>  
                    </div> */}
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Name</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.fname} {props.lname}</Typography></div>  
                    </div>
                    { <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>E mail Address</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.email}</Typography></div>  
                    </div> }
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Winning Bid</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.bid1}</Typography></div>  
                    </div>                    
                </CardContent>    
            </Card>
        </Grid>
    );
  }
  return(
    <div className={classes.root}>
            
              
            {mapset.map(student => (  
                    <FormRow fname={student.fname} lname={student.lname} email={student.email} bid1={student.bid1} baseprice={student.baseprice} id={student.auction_id} bid1={student.bid1} description={student.description}/> 
            ))}
              
            
        </div>
    );
}