import React, {useState} from 'react'
import {Link, useHistory } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./searchbar.css";
import Grid from '@material-ui/core/Grid';
import axios from "axios";

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

export default function DonationSearch(){

    const[searchmsg,setSearchmsg] = useState([]);



    {/*const fetchSearch = (search) => {
        setSearchmsg(search);
        const searchdetails={
            "search": searchmsg,
        }
        axios.post("http://localhost:5000/api/donations/search",searchdetails,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data);
                setSearchmsg(response.data);
            })
    };*/}

    return(

        
        <div  className="searchArea" >
            <Grid item xs={12} sm={12}>
                
                <SearchBar
                className="search"
                //value={searchmsg}
                //onClick={e => fetchSearch(e.target.value)}
                placeholder="Search Donations..."
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

