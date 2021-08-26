import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    textfilter : {
        width: '100%',
        backgroundColor:"#FFFFFF",     
    },

    filterbutton :{
        backgroundColor: "#757de8",
        color: "#FFFFFF",
        textTransform: "none",
        paddingTop:5,
        paddingLeft:10,
        paddingRight:10,
        border:"none",
        borderRadius:15,
        "&:hover": {
          color: "#FFFFFF",
          backgroundColor: "#757de8",
          border: "1px solid #757de8",
        },    
    },

})

export default function SearchBar(){
    const classes = useStyles();
  return (
    <Grid container spacing={1} >
    <Grid item md={10}>
    <TextField id="outlined-basic" variant="outlined" size="small" className={classes.textfilter}/>
    </Grid>
    <Grid item md={2}>
        <Button size="large" 
          className={classes.filterbutton} 
          startIcon={<FilterListIcon />}
          >
           Search
          </Button>
    </Grid>
  </Grid>
  );
}
