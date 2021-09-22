import React ,{useEffect, useState} from 'react';
import './Donation.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Note from '../../image/note.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import  Button from '@material-ui/core/Button';
import {Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Description} from './details';
import {NoteDoneeDetails} from './adminaucdet';

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
        boxShadow:"none"
      },
      card1:{
        backgroundColor:"white",
        border:"none",
        boxShadow:"none",
        position: "relative",
        bottom:"10px",
        left: "30px",
        width:"550px"
      },


      labelname: {
          marginLeft:40,
          marginBottom:10,
          color:"000000",
          fontFamily:"Poppins, sans-serif",
          width:"150px"
      },

      labelvalue:{
        marginLeft:100,
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

export default function View_Notecause(){
    const { auction_id } = useParams();
    const history = useHistory();
  const classes = useStyles();
  const [mapset, SetMap] = useState([]);

  const [bid, setBid] = React.useState("");

  const handleSubmit = (event) => {
     event.preventDefault(); 
    console.log(`
    bid: ${bid}
    
    
    `);
     const userData=JSON.parse(localStorage.getItem("userData"));
    
    const requestNote={
        // "studentID":userData.id,
        "bid": bid,
    }
      axios.post("http://localhost:5000/api/ars/updatestatus",requestNote,{
        params: {id:auction_id},
          headers:{
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
              
          }
      }).then((response)=>{
          console.log(response.data);
          if(response.data==='success'){
            setBid("");
            if(userData.userType === "STUDENT"){
              history.push("/std/viewauc")
              }
              if(userData.userType === "UNIONST"){
                  history.push("/ustd/viewauc")
                  }
                  if(userData.userType === "ADMIN"){
                    history.push("/admin/admindashboard")
                    }
        
          }

      }).catch((err)=>{
        
      }) 
  }
    return(
        <div><form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    src= {Note}
                                />   
                            </Card>
                        </Grid>

                        <Description />
                    </Grid>
                    

                    <Grid container spacing={2} >
                        <NoteDoneeDetails />
                        
                        <Grid item xs={6}>
                        <Card className={classes.card1}>
                                <CardContent>
                                    <div>
                                        <Typography variant="h5" className={classes.title}>
                                        You can Approve The Auction 
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.title}>
                                        {/* Your bid value should greater than highest bid */}
                                    </Typography>
                                    </div>
                                    {/* <Grid item xs={12} >
                                <TextField
                                     autoComplete="title"
                                     name="title"
                                     variant="outlined"
                                     required
                                    // // fullWidth
                                     id="title"
                                    //  label="Title"
                                     value={title}
                                    // // autoFocus
                                    // onChange={e => setTitle(e.target.value)}
                                />
                                </Grid> */}
                                <br></br>
                                    <div>
                                    {/* <Typography variant="subtitle2" className={classes.title}>
                                       Or You can cotact donee to donate
                                    </Typography> */}
                                    <Button
            type="submit"
            // fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
            Approve The Auction
            
          </Button>
                                    <div id='button'>
                                    {/* <Button
                                        variant="contained"
                                        color="primary"
                                        component="label"
                                        className={classes.contactbtn}
                                        >
                                        Change remaining Days
                                    </Button> */}
                                    </div>
                                    </div>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
                    </Grid>
                    </form>
        </div>
    );
}
