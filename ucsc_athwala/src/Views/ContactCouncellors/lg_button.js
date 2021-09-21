import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useHistory } from "react-router-dom";
import QueueIcon from '@material-ui/icons/Queue';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
    filterbutton: {
        backgroundColor: "#757de8",
        color: "#FFFFFF",
        textTransform: "none",
        paddingTop:5,
        paddingLeft:10,
        paddingRight:10,
        border:"none",
        borderRadius:10,
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

    if(userData.userType === "STUDENT" ||userData.userType === "UNIONST" ){
      link = "/createlg";
    }

    return(
        <Grid item s={4}>
            <Button size="large" 
            className={classes.filterbutton} 
            onClick={()=>{ history.push(link)}}
                startIcon={<QueueIcon />}
            >
                Create Learning Group
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
      link = "/std/myDonation";
    }
    if(userData.userType === "UNIONST" ){
      link = "/ustd/myDonation";
    }

    return(
        <Grid item s={4}>
                      <Button size="large"
                        className={classes.filterbutton}
                        onClick={()=>{ history.push(link)}}
                        startIcon={<FavoriteBorderIcon />}
                        >
                          All Learning Groups
                        </Button>
</Grid>
    );

}

export function AllCauseButton(){
    const classes = useStyles();
    const history = useHistory();

    const userData=JSON.parse(localStorage.getItem("userData"));

    var link;

    if(userData.userType === "STUDENT"){
      link = "/std/viewcauses";
    }
    if(userData.userType === "UNIONST" ){
      link = "/ustd/viewcauses";
    }

    return(
        <Grid item s={4}>
              <Button size="large"
                className={classes.filterbutton}
                onClick={()=>{ history.push(link)}}
                startIcon={<FavoriteBorderIcon />}
                >
                  All Causes
                </Button>
        </Grid>
    );

}

