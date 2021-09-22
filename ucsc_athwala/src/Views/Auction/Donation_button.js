import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useHistory } from "react-router-dom";
import QueueIcon from '@material-ui/icons/Queue';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FlagIcon from '@material-ui/icons/Flag';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AlarmOffIcon from '@material-ui/icons/AlarmOff';
const useStyles = makeStyles({
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

});

export function RequestButton(){
    const classes = useStyles();
    const history = useHistory();
    const userData=JSON.parse(localStorage.getItem("userData"));

    var link;

    if(userData.userType === "STUDENT"){
      link = "/std/crtauc";
    }
     if(userData.userType === "UNIONST" ){
       link = "/ustd/crtauc";
     }
    // if(userData.userType === "ALUMNI"){
    //   link = "/pst/myDonation";
    // }
    return(
        <Grid item s={4}>
            <Button size="large" 
            className={classes.filterbutton} 
            onClick={()=>{ history.push(link)}}
                startIcon={<AddCircleIcon />}
            >
                Create Auction
            </Button>
        </Grid>
    );

}

export function MyCauseButton(){
    const classes = useStyles();
    const history = useHistory();
    const userData=JSON.parse(localStorage.getItem("userData"));

    var link;

    if(userData.userType === "STUDENT"){
      link = "/std/myauc";
    }
     if(userData.userType === "UNIONST" ){
       link = "/ustd/myauc";
     }
    // if(userData.userType === "ALUMNI"){
    //   link = "/pst/myDonation";
    // }
    return(
        <Grid item s={4}>
                      <Button size="large" 
                        className={classes.filterbutton} 
                        onClick={()=>{ history.push(link)}}
                        startIcon={<AccountBalanceWalletIcon />}
                        >
                          My Auctions
                        </Button>
                </Grid>
    );

}

 export function MyDonationButton(){
     const classes = useStyles();
     const history = useHistory();
     const userData=JSON.parse(localStorage.getItem("userData"));

    var link;

    if(userData.userType === "STUDENT"){
      link = "/std/mybid";
    }
     if(userData.userType === "UNIONST" ){
       link = "/ustd/mybid";
     }
    // if(userData.userType === "ALUMNI"){
    //   link = "/pst/myDonation";
    // }
     return(
         <Grid item s={4}>
                       <Button size="large" 
                         className={classes.filterbutton} 
                         onClick={()=>{ history.push(link)}}
                         startIcon={<FlagIcon />}
                         >
                           Bid History
                         </Button>
 </Grid>
     );

 }
 export function PastButton(){
    const classes = useStyles();
    const history = useHistory();
    const userData=JSON.parse(localStorage.getItem("userData"));

    var link;

    if(userData.userType === "STUDENT"){
      link = "/std/mypstauc";
    }
     if(userData.userType === "UNIONST" ){
       link = "/ustd/mypstauc";
     }
    // if(userData.userType === "ALUMNI"){
    //   link = "/pst/myDonation";
    // }
    return(
        <Grid item s={4}>
                      <Button size="large" 
                        className={classes.filterbutton} 
                        onClick={()=>{ history.push(link)}}
                        startIcon={<AlarmOffIcon />}
                        >
                          Past Auctions
                        </Button>
</Grid>
    );

}

// export function AllCauseButton(){
//     const classes = useStyles();
//     const history = useHistory();
//     return(
//         <Grid item s={4}>
//               <Button size="large" 
//                 className={classes.filterbutton} 
//                 onClick={()=>{ history.push("/std/viewcauses")}}
//                 startIcon={<FavoriteBorderIcon />}
//                 >
//                   All Causes
//                 </Button>
//         </Grid>
//     );

// }

