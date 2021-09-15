import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useHistory } from "react-router-dom";
import ShopIcon from '@material-ui/icons/Shop';
import AddCircleIcon from '@material-ui/icons/AddCircle';



const useStyles = makeStyles({
    productfilterbutton: {
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


export function ProductButton(){
    const classes = useStyles();
    const history = useHistory();
    return(
        <Grid item s ={4}>
            <Button  size="large" 
            className={classes.productfilterbutton} 
            onClick={()=>{ history.push("/std/ViewProductEle")}}
                startIcon={<ShopIcon />}
            >
                Products
            </Button>
        </Grid>
    );

}

export function ProductPostButton(){
    const classes = useStyles();
    const history = useHistory();
    return(
        <Grid item s={4}>
            <Button  size="large" 
            className={classes.productfilterbutton} 
            onClick={()=>{ history.push("/std/SelectAdPost")}}
                startIcon={<AddCircleIcon />}
            >
                Add Advertisment
            </Button>
        </Grid>
    );

}