import React from 'react';
import SearchBar from './SearchBar'
import { Container, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import FQAList from './FQA_List';

const useStyles = makeStyles ({
    title:{
        color:"#546e7a",
        marginTop:20,
        marginBottom:20,
        fontSize:40,
      }
})



export default function QAform(){
    const classes = useStyles();
        return(
            <Container>
                <div><SearchBar /></div>
                <div><Typography variant="h5" className={classes.title}>FAQ</Typography></div>
                <div><FQAList /></div>
                

            </Container>
        );
}
