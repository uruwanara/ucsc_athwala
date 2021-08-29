import React from 'react'
import {Link, useHistory } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./searchbar.css";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    filterbar: {
        //float:"right",
        width:800,
        //display:'flex',
        //justifyContent:'center',
        bottom:38,
        left:170,
        position:'relative',
        //alignItems:'center',
     },
    

});

export default function ProductViews(){

    const history = useHistory();
    const classes = useStyles();

    return(

        
        <div  className="searchArea" >
            <Grid item xs={12} sm={12}>
                
                <SearchBar
                className="search"
               // value={results}
                //onChange={(value) => setResults(value)}
                placeholder="Search Products ..."
                closeIcon={
                <Button  className="closeIcon">
                    X
                </Button>
                }
            />
              
           
            </Grid>
            
        </div>

    );
}

