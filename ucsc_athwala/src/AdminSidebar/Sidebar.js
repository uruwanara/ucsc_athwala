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
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Navbar from '../Navbar/Navbar';
import ShopIcon from '@material-ui/icons/Shop';
import GavelIcon from '@material-ui/icons/Gavel';
import ChatIcon from '@material-ui/icons/Chat';
import HelpIcon from '@material-ui/icons/Help';
import UnionIcon from '@material-ui/icons/SupervisedUserCircle';
import ReportIcon from '@material-ui/icons/Description';

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
                  <PeopleAltIcon style={{ fill: "orange"}}/>
              </ListItemIcon>
              <ListItemText primary="Donation" />
              </ListItem>
  
              <ListItem button>
              <ListItemIcon>
                  <ShopIcon style={{ fill: "orange"}}/>
              </ListItemIcon>
              <ListItemText primary="Product" />
              </ListItem>
  
              <ListItem button>
              <ListItemIcon>
                  <GavelIcon style={{ fill: "orange"}}/>
              </ListItemIcon>
              <ListItemText primary="Auction" />
              </ListItem>
  
              <ListItem button>
              <ListItemIcon>
                  <UnionIcon style={{ fill: "orange"}}/>
              </ListItemIcon>
              <ListItemText primary="Union Members" />
              </ListItem>
   
              <ListItem button>
              <ListItemIcon>
                  <ChatIcon style={{ fill: "orange"}}/>
              </ListItemIcon>
              <ListItemText primary="Notification" />
              </ListItem>
  
              <ListItem button>
              <ListItemIcon>
                  <HelpIcon style={{ fill: "orange"}}/>
              </ListItemIcon>
              <ListItemText primary="QA support center" />
              </ListItem>

              <ListItem button>
              <ListItemIcon>
                  <ReportIcon style={{ fill: "orange"}}/>
              </ListItemIcon>
              <ListItemText primary="Report" />
              </ListItem>
  
              </List>
          </div>
        </Drawer>


        {/*<Dashboard />*/}
      </div>
    );
  }
