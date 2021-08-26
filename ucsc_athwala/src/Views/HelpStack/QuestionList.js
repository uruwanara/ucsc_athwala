import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HelpIcon from '@material-ui/icons/Help';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import BlueGrey from '@material-ui/core/colors/blueGrey'
import Blue from '@material-ui/core/colors/blue'

const useStyles = makeStyles((theme) => ({
  link:{
    backgroundColor:'#ffffff',
    border: '1px solid #c5cae9'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  Nounderline :{
    fontWeight:'bolder',
    fontFamily:'Poppins, sans-serif',
    
    "&:hover": {
      textDecoration: "none"
    },
  },
  linktext:{
    color:BlueGrey[800],
    "&:hover": {
        color:Blue[800],
      },
  }
}));

export default function NestedList() {
  const classes = useStyles();
  return (
    
        <Grid item md={12}>
            <List >

            <ListItem className={classes.link}>
                <ListItemIcon><HelpIcon color="secondary"/></ListItemIcon>
                    <Grid item md={10}>
                        <Link to='/std/helpstack/viewQuestionAnswer' className={classes.Nounderline}>
                            <ListItemText className={classes.linktext}>how can I get field and value from nested array and query them to find doc in mongodb?</ListItemText>
                        </Link>
                    </Grid>
                    <Grid item md={2}>
                        <Link to='' className={classes.Nounderline}>
                            <ListItemText >2 Answers</ListItemText>
                        </Link>
                    </Grid>
                    
                    
            </ListItem>
            
            </List>

           
        </Grid>
    
  );
}