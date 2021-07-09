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
import PanToolIcon from '@material-ui/icons/PanTool';
import VideocamIcon from '@material-ui/icons/Videocam';
import ChatIcon from '@material-ui/icons/Chat';
import ForumIcon from '@material-ui/icons/Forum';
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
                  <PanToolIcon style={{ fill: "orange"}}/>
              </ListItemIcon>
              <ListItemText primary="Fundraising" />
              </ListItem>
  
              <ListItem button>
              <ListItemIcon>
                  <VideocamIcon style={{ fill: "orange"}}/>
              </ListItemIcon>
              <ListItemText primary="Video Conference" />
              </ListItem>
  
              <ListItem button>
              <ListItemIcon>
                  <ChatIcon style={{ fill: "orange"}}/>
              </ListItemIcon>
              <ListItemText primary="Chat" />
              </ListItem>
  
              <ListItem button>
              <ListItemIcon>
                  <ForumIcon style={{ fill: "orange"}}/>
              </ListItemIcon>
              <ListItemText primary="UCSC help stack" />
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
