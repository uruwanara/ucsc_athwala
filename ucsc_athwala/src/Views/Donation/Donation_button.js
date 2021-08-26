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
    return(
        <Grid item s={4}>
            <Button size="large" 
            className={classes.filterbutton} 
            onClick={()=>{ history.push("/std/requestcategories")}}
                startIcon={<QueueIcon />}
            >
                Request Donation
            </Button>
        </Grid>
    );

}

export function MyCauseButton(){
    const classes = useStyles();
    const history = useHistory();
    return(
        <Grid item s={4}>
                      <Button size="large" 
                        className={classes.filterbutton} 
                        onClick={()=>{ history.push("/std/viewMyrequest")}}
                        startIcon={<FavoriteBorderIcon />}
                        >
                          My Causes
                        </Button>
                </Grid>
    );

}

export function MyDonationButton(){
    const classes = useStyles();
    const history = useHistory();
    return(
        <Grid item s={4}>
                      <Button size="large" 
                        className={classes.filterbutton} 
                        onClick={()=>{ history.push("/std/myDonation")}}
                        startIcon={<FavoriteBorderIcon />}
                        >
                          My Donations
                        </Button>
</Grid>
    );

}

export function AllCauseButton(){
    const classes = useStyles();
    const history = useHistory();
    return(
        <Grid item s={4}>
              <Button size="large" 
                className={classes.filterbutton} 
                onClick={()=>{ history.push("/std/viewcauses")}}
                startIcon={<FavoriteBorderIcon />}
                >
                  All Causes
                </Button>
        </Grid>
    );

}

