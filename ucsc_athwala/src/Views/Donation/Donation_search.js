import React , {useState} from 'react';
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

});

export default function SearchBar({searchSubmit}){
    const classes = useStyles();

    const [search,Setsearch] = useState("");


  return (

    <Grid container spacing={1} >
    <Grid item md={10}>

        <TextField 
        id="outlined-basic" 
        variant="outlined" 
        size="small" 
        className={classes.textfilter}
        value={search}
        onChange={e => Setsearch(e.target.value)}
        />
    
    </Grid>
    <Grid item md={2}>

        <Button
        type="submit"
        size="large" 
        className={classes.filterbutton} 
        startIcon={<FilterListIcon />}
        onClick={() => {
            searchSubmit(search);
        }}
        >
        Search
        </Button>
    
    </Grid>
  </Grid>

  );
}

{/*import React, {useState} from 'react'
import {Link, useHistory } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import Button from '@material-ui/core/Button';
import "./searchbar.css";
import Grid from '@material-ui/core/Grid';

export default function DonationSearch(props){

    const [search,Setsearch] = useState("");

    const searchSubmit = () => {
        props.searchSubmit(search);
    }

    return(

        
        <div  className="searchArea" >
            <Grid item xs={12} sm={12}>
                
                <SearchBar
                className="search"
                placeholder="Search Donations..."
                value={search}
                onChange={(newValue) => Setsearch(newValue)}
                onRequestSearch={searchSubmit}
                closeIcon={
                <Button  className="closeIcon">
                    X
                </Button>
                }
            />
              
           
            </Grid>
            
        </div>

    );
}*/}

