import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useHistory } from "react-router-dom";
import ShopIcon from '@material-ui/icons/Shop';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import HistoryIcon from '@material-ui/icons/History';



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

    const userData=JSON.parse(localStorage.getItem("userData"));

    var link;

    if(userData.userType === "STUDENT"){
      link = "/std/ViewProductEle";
    }
    if(userData.userType === "UNIONST" ){
      link = "/ustd/ViewProductEle";
    }
    if(userData.userType === "ADMIN" ){
      link = "/admin/ViewProductEle";
    }
    if(userData.userType === "ALUMNI" ){
      link = "/pst/ViewProductEle";
    }

    return(
        <Grid item s ={4}>
            <Button  size="large" 
            className={classes.productfilterbutton} 
            onClick={()=>{ history.push(link)}}
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

    const userData=JSON.parse(localStorage.getItem("userData"));

    var link;

    if(userData.userType === "STUDENT"){
      link = "/std/SelectAdPost";
    }
    if(userData.userType === "UNIONST" ){
      link = "/ustd/SelectAdPost";
    }
    if(userData.userType === "ADMIN" ){
      link = "/admin/SelectAdPost";
    }

    return(
        <Grid item s={4}>
            <Button  size="large" 
            className={classes.productfilterbutton} 
            onClick={()=>{ history.push(link)}}
                startIcon={<AddCircleIcon />}
            >
                Add Advertisment
            </Button>
        </Grid>
    );

}

export function MyProductButton(){
    const classes = useStyles();
    const history = useHistory();

    const userData=JSON.parse(localStorage.getItem("userData"));

    var link;

    if(userData.userType === "STUDENT"){
      link = "/std/ViewMyProduct";
    }
    if(userData.userType === "UNIONST" ){
      link = "/ustd/ViewMyProduct";
    }
    if(userData.userType === "ADMIN" ){
      link = "/admin/ViewMyProduct";
    }
    if(userData.userType === "ALUMNI" ){
        link = "/pst/ViewMyProductBuy";
    }
   
    return(
        <Grid item s={4}>
            <Button  size="large" 
            className={classes.productfilterbutton} 
            onClick={()=>{ history.push(link)}}
                startIcon={<ProductionQuantityLimitsIcon/>}
            >
                My Product
            </Button>
        </Grid>
    );

}

export function MyProductBuyButton(){
    const classes = useStyles();
    const history = useHistory();

    const userData=JSON.parse(localStorage.getItem("userData"));

    var link;

    if(userData.userType === "STUDENT"){
      link = "/std/ViewMyProductBuy";
    }
    if(userData.userType === "UNIONST" ){
      link = "/ustd/ViewMyProductBuy";
    }
    if(userData.userType === "ADMIN" ){
      link = "/admin/ViewMyProductBuy";
    }
    if(userData.userType === "ALUMNI" ){
      link = "/pst/ViewMyProductBuy";
    }
    return(
        <Grid item s={4}>
            <Button  size="large" 
            className={classes.productfilterbutton} 
            onClick={()=>{ history.push(link)}}
                startIcon={<HistoryIcon/>}
            >
                Payment Product History
            </Button>
        </Grid>
    );

}

export function MyProductSellButton(){
    const classes = useStyles();
    const history = useHistory();

    const userData=JSON.parse(localStorage.getItem("userData"));

    var link;

    if(userData.userType === "STUDENT"){
      link = "/std/ViewMyProduct";
    }
    if(userData.userType === "UNIONST" ){
      link = "/ustd/ViewMyProduct";
    }
    if(userData.userType === "ADMIN" ){
      link = "/admin/ViewMyProduct";
    }
    return(
        <Grid item s={4}>
            <Button  size="large" 
            className={classes.productfilterbutton} 
            onClick={()=>{ history.push(link)}}
                startIcon={<ProductionQuantityLimitsIcon/>}
            >
                My Product Advertisment
            </Button>
        </Grid>
    );

}