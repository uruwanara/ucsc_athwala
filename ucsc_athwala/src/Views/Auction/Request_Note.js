import React from 'react';
import Noteform from './Request_Noteform';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
  
const useStyles = makeStyles({
  title:{
    margin:20,
  }

});


export default function RequestNote(){
  const classes = useStyles();
    return(
        
        <div>
            <Noteform />       
        </div>
    );
}

