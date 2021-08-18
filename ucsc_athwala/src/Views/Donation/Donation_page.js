import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Donation.css';
import Cause from './Donation_Causes';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      }, flex1: {
        flexGrow: 1,
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      title:{
        color:"#546e7a",
        marginTop:5,
        marginBottom:20,
      }
  
  }));

export default function View_Allcause(){
    const classes = useStyles();
    return(
      <div >
        <Cause />               
      </div>
  );
}