import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ShopIcon from '@material-ui/icons/Shop';
import GavelIcon from '@material-ui/icons/Gavel';
import PanToolIcon from '@material-ui/icons/PanTool';
import VideocamIcon from '@material-ui/icons/Videocam';
import ChatIcon from '@material-ui/icons/Chat';
import ForumIcon from '@material-ui/icons/Forum';
import HelpIcon from '@material-ui/icons/Help';
import Teal from '@material-ui/core/colors/teal';
import Blue from '@material-ui/core/colors/blue'


const useStyles = makeStyles((theme) => ({
  Nounderline :{

    "&:hover": {
      textDecoration: "none"
    },
  },
  Listicon:{
    color:Blue[600],
  },


}));

export default function Side(){
  const classes = useStyles();
    const theme = useTheme();

    return(
      <div>
          <List>
              <Link to="/admin/admindashboard" className={classes.Nounderline}>
                <ListItem button >
                <ListItemIcon><DashboardIcon className={classes.Listicon}/></ListItemIcon>
                <ListItemText primary="Dashboard" />
                </ListItem>
              </Link>
              
              <Link to="/admin/viewcauses" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon><PeopleAltIcon className={classes.Listicon}/></ListItemIcon>
                <ListItemText primary="Donation" />
                </ListItem>
              </Link>

              <Link to = "" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon>
                    <ShopIcon className={classes.Listicon}/>
                </ListItemIcon>
                <ListItemText primary="Product" />
                </ListItem>
              </Link>

              <Link to = "" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon>
                    <GavelIcon className={classes.Listicon}/>
                </ListItemIcon>
                <ListItemText primary="Auction" />
                </ListItem>
              </Link>

              <Link to = "" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon>
                    <GavelIcon className={classes.Listicon}/>
                </ListItemIcon>
                <ListItemText primary="Union members" />
                </ListItem>
              </Link>

              <Link to="/chat" className={classes.Nounderline}>
                  <ListItem button>
                      <ListItemIcon>
                          <ChatIcon className={classes.Listicon}/>
                      </ListItemIcon>
                      <ListItemText primary="Chat" />
                  </ListItem>
              </Link>
              <Link to="/admin/Admin_QA" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon>
                    <ChatIcon className={classes.Listicon}/>
                </ListItemIcon>
                <ListItemText primary="QA Support" />
                </ListItem>
              </Link>

          </List>
      </div>



    );

}
