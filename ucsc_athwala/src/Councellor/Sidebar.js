import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Navbar from '../Navbar/Navbar';
import VideocamIcon from '@material-ui/icons/Videocam';
import HelpIcon from '@material-ui/icons/Help';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));


  export default function Sidebar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        
        {<AppBar position="fixed" className={classes.appBar}>
          <Navbar />
        </AppBar>}
        
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
              <List>
  
              <ListItem button href="#">
              <ListItemIcon>
                  <DashboardIcon style={{ fill: "orange"}}/>  
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
              </ListItem>
 
              <ListItem button>
              <ListItemIcon>
                  <VideocamIcon style={{ fill: "orange"}}/>
              </ListItemIcon>
              <ListItemText primary="Video Conference" />
              </ListItem>

              <ListItem button>
              <ListItemIcon>
                  <HelpIcon style={{ fill: "orange"}}/>
              </ListItemIcon>
              <ListItemText primary="QA support" />
              </ListItem>
  
              </List>
          </div>
        </Drawer>


        {/*<Dashboard />*/}
      </div>
    );
  }
