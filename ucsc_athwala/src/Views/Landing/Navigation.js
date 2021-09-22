import React from 'react';
import clsx from 'clsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../../image/project_logo.jpg';
import Box from '@material-ui/core/Box';
import LandImage from '../../image/ucsc1.jpg';
import Button from '@material-ui/core/Button';

import {Link} from "react-router-dom";
import Public from '../Donation/Public_DonationPage';
import ViewPublicDonation from '../Donation/View_Public'
import Footer from '../Footer/Footer'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {useHistory } from "react-router-dom";




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   // backgroundImage:`url(${LandImage})`,
   backgroundColor:'white'
  }, flex1: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 36,
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
    //padding: theme.spacing(3),
  },
  Appbar:{
    backgroundColor:"#1976d2",
  },
  link:{
    color:'white',
    backgroundColor:'transparent',
    textTransform:'none',
    boxShadow:"none",
    border:"none",
    "&:hover": {
      backgroundColor: "transparent"
  }
  },
  Nounderline :{
    "&:hover": {
      textDecoration: "none"
    },
  },
  footer:{
    flexGrow: 1,
    backgroundColor:"#000a12",
    marginBottom:"0px",
    padding:20
  },
  title:{
    color:"#ffffff",
    marginTop:20,
    marginBottom:20,
    fontWeight: 'bold',
    fontFamily:"Poppins, sans-serif",
    textAlign:'center'
  },
  topic:{
    marginTop:'5px',
    marginBottom:'5px',
    fontFamily:"Poppins, sans-serif",
    fontSize:14,
    color:"#78909c",
    fontWeight:"normal",
    textAlign:'center'
  },
  footergrid:{
    padding:20
  }
  
}));





function Navbar() {

  const classes = useStyles();
  const history = useHistory();

  const [auth, setAuth] = React.useState(true);
  const [auth1, setAuth1] = React.useState(true);

  return (
    <Router>
    <div className={classes.root}> 
      <CssBaseline />

      <AppBar
        position="fixed"
        className={classes.Appbar}
      >

        <Toolbar>
          <Typography variant="h4" noWrap className={classes.flex1} ml={3}>
            UCSC අත්වැල
          </Typography>

          <div>
            <Box mr={2}>
            
            <Button variant="contained" 
            className={classes.link}
            onClick={() => history.push("/ucsc_athwala")}
            >
               Home
            </Button>
            
            </Box>
          </div>

            {/* <div>
                <Button variant="contained" 
                className={classes.link}
                onClick={() => history.push("/login")}
                >
                  Login
                </Button>
            </div>
            <div>
                <Button variant="contained" 
                className={classes.link}
                onClick={() => history.push("/signup")}
                >
                   SignUp
                </Button>
            </div> */}


        </Toolbar>

      </AppBar >
      

       <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/public/publicPage" exact>
              <Public />
          </Route>
          <Route path="/public/viewpublic" exact>
              <ViewPublicDonation /> 
          </Route>
        </Switch>
        
      </main> 

      
    </div >
    <AppBar position="static" className={classes.footer}>
          <Container >
            <Toolbar>
              <Grid container xs={12} spacing={6}>
                <Grid xs={4} className={classes.footergrid}>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                UCSC අත්වැල
                </Typography>
                    <Typography gutterBottom variant="subtitle1" component="h2" className={classes.topic}>
                    The major goal of this project is to help the newcomers of UCSC to resonate with the  environment,
                    culture of the university and the administration. Also to help the student  community to manage their essentials
                    throughout the university period and give  opportunities to help others in the student community.
                    </Typography>
                </Grid>
                <Grid xs={4} className={classes.footergrid}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    Contact Us
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="h2" className={classes.topic}>UCSC Building Complex,<br></br>35 Reid Ave,<br></br>Colombo 7</Typography>
                    <Typography gutterBottom variant="subtitle1" component="h2" className={classes.topic}>+94 112128932</Typography>
                    <Typography gutterBottom variant="subtitle1" component="h2" className={classes.topic}>ucscathwala@gmail.com</Typography>
                </Grid>
                <Grid xs={4} className={classes.footergrid}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    About Us
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="h2" className={classes.topic}>Uthpala Ruwanara</Typography>
                    <Typography gutterBottom variant="subtitle1" component="h2" className={classes.topic}>Danu Anjana</Typography>
                    <Typography gutterBottom variant="subtitle1" component="h2" className={classes.topic}>Abises Weerasekara</Typography>
                    <Typography gutterBottom variant="subtitle1" component="h2" className={classes.topic}>Anuradha Wikramasinhge</Typography>
                    <Typography gutterBottom variant="subtitle1" component="h2" className={classes.topic}>Nimasha Supunpraba</Typography>
                </Grid>

              </Grid>
            </Toolbar>
          </Container>
      </AppBar>
    </Router>
  );
}

export default Navbar;