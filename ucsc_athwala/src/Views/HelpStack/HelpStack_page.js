import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import QuestionList from './QuestionList';
import {Link} from "react-router-dom";

const useStyles = makeStyles ({
    title:{
        color:"#546e7a",
        marginTop:50,
        marginBottom:20,
        fontSize:25,
      },
      filterbutton :{
        backgroundColor: "#757de8",
        color: "#FFFFFF",
        textTransform: "none",
        paddingTop:5,
        paddingLeft:10,
        paddingRight:10,
        marginTop:50,
        marginBottom:20,
        marginRight:90,
        float:"right",
        border:"none",
        "&:hover": {
          color: "#FFFFFF",
          backgroundColor: "#757de8",
          border: "1px solid #757de8",
        },    
    },
})



export default function QAform(){
    const classes = useStyles();
    const userData=JSON.parse(localStorage.getItem("userData"));

    const askbutton = () => {
        if(userData.userType == "STUDENT" || userData.userType == "UNIONST" ){
            return(
                <div>
                            <Link to = '/std/helpstack/askQuestion'>
                            <Button size="large" 
                            className={classes.filterbutton} 
                            >
                            Ask Question
                            </Button>
                            </Link>
                </div>
            )
        }
        else if (userData.userType == "ALUMNI"){
            return(
                <div>
                </div>
            )

        }
    }
        return(
                <div>

                <Grid container md={12} spacing={10}>
                    <Grid item md={6}>
                        <div><Typography variant="h5" className={classes.title}>Top Questions</Typography></div>
                    </Grid>

                    <Grid item md={6}>
                        {askbutton()}
                    </Grid>
                </Grid>
                <Grid container md={12} spacing={2}>
                    <QuestionList />
                </Grid>
                
                </div>
        );
}
