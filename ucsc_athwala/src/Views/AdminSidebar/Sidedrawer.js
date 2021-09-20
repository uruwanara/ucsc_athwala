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


const useStyles = makeStyles((theme) => ({
  Nounderline :{

    "&:hover": {
      textDecoration: "none"
    },
  }


}));

export default function Side(){
  const classes = useStyles();
    const theme = useTheme();

    return(
      <div>
          <List>
              <Link to="" className={classes.Nounderline}>
                <ListItem button >
                <ListItemIcon><DashboardIcon style={{ fill: "blue"}}/></ListItemIcon>
                <ListItemText primary="Dashboard" />
                </ListItem>
              </Link>
              
              <Link to="" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon><PeopleAltIcon style={{ fill: "blue"}}/></ListItemIcon>
                <ListItemText primary="Donation" />
                </ListItem>
              </Link>

              <Link to = "" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon>
                    <ShopIcon style={{ fill: "blue"}}/>
                </ListItemIcon>
                <ListItemText primary="Product" />
                </ListItem>
              </Link>

              <Link to = "" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon>
                    <GavelIcon style={{ fill: "blue"}}/>
                </ListItemIcon>
                <ListItemText primary="Auction" />
                </ListItem>
              </Link>

              <Link to = "" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon>
                    <GavelIcon style={{ fill: "blue"}}/>
                </ListItemIcon>
                <ListItemText primary="Union members" />
                </ListItem>
              </Link>

              <Link to="/admin/Admin_QA" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon>
                    <ChatIcon style={{ fill: "blue"}}/>
                </ListItemIcon>
                <ListItemText primary="QA Support" />
                </ListItem>
              </Link>

          </List>
      </div>



    );

}
