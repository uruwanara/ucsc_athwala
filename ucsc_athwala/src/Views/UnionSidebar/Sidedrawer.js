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
              <Link to="/ustd/ustddashboard" className={classes.Nounderline}>
                <ListItem button >
                <ListItemIcon><DashboardIcon className={classes.Listicon}/></ListItemIcon>
                <ListItemText primary="Dashboard" />
                </ListItem>
              </Link>
              
              <Link to="/ustd/viewcauses" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon><PeopleAltIcon className={classes.Listicon}/></ListItemIcon>
                <ListItemText primary="Donation" />
                </ListItem>
              </Link>

              <Link to = "/ViewEleProduct" className={classes.Nounderline}>
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

              <Link to = "/ustd/funddashboard" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon>
                    <GavelIcon className={classes.Listicon}/>
                </ListItemIcon>
                <ListItemText primary="Fundraising" />
                </ListItem>
              </Link>

              <Link to="/ustd/JobOpertunity" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon>
                    <PanToolIcon className={classes.Listicon}/>
                </ListItemIcon>
                <ListItemText primary="Job oppertunity" />
                </ListItem>
              </Link>

              <Link to="/lrngrp" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon>
                    <VideocamIcon className={classes.Listicon}/>
                </ListItemIcon>
                <ListItemText primary="Learning Groups" />
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

              <Link to="/ustd/helpstack/default" className={classes.Nounderline}> 
                <ListItem button>
                <ListItemIcon>
                    <ForumIcon className={classes.Listicon}/>
                </ListItemIcon>
                <ListItemText primary="UCSC help stack" />
                </ListItem>
              </Link>

              <Link to="" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon>
                    <HelpIcon className={classes.Listicon}/>
                </ListItemIcon>
                <ListItemText primary="QA support" />
                </ListItem>
              </Link>

              <Link to="/contactcoun" className={classes.Nounderline}>
                <ListItem button>
                <ListItemIcon>
                    <HelpIcon className={classes.Listicon}/>
                </ListItemIcon>
                <ListItemText primary="Contact Councellor" />
                </ListItem>
              </Link>

          </List>
      </div>



    );

}
