import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    title:{
        color:"#546e7a",
        marginTop:5,
        marginBottom:20,
    },
    grid:{
        marginTop:20,
        marginBottom:20,
    },
    gridContainer:{
        marginTop:15,
    },
    jobtitle:{
        textAlign:'center',
        color:'#3f51b5',

    },
    jobdecription:{
        marginTop:15,
        marginLeft:20,
        textAlign:'justify',
    },
    list:{
        paddingLeft:150,
    },
})

export default function Viewjobs(){
    const classes = useStyles();

    return(
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
         <Typography variant="h5" className={classes.title}>Job Oppertunity</Typography>
         <Grid container className={classes.gridContainer} spacing={2}>
             <Grid item xs={12} className={classes.grid}>
             <Typography variant="h5" className={classes.jobtitle}>Software Engineer (Java)</Typography>
             <Typography variant="subtitle1" className={classes.jobdecription}>Hiring now for Software Engineer (Java) at Hitachi Digital Payment Solutions Ltd Apply today.
             We are looking for Software Engineering Interns to join our Research and Development center in Colombo. You are required to work with the Technical Leadership team.</Typography>
             </Grid>

             <Grid item xs={6} className={classes.grid}>
                <Typography variant="h5" className={classes.jobtitle}>Requirements</Typography>
                <List>
                    <ListItem>
                        <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary="Following Bachelor’s Degree in Software Engineering, or relevant degree from a recognized University" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary="Experience in developing with Java" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary="Ability to learn quickly; IQ and be self-motivated" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary="Have strong analytical and problem solving skills." />
                    </ListItem>
                </List>
             </Grid>

             <Grid item xs={6} className={classes.grid}>
                <Typography variant="h5" className={classes.jobtitle}>Contact Details</Typography>
                <List className={classes.list}>
                    <ListItem >
                        <ListItemIcon><CallIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary="077-125781"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><EmailIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary="careers@Hitachi.com"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><LanguageIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary="https://Hitachi.com"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><LinkedInIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary="https://www.linkedin.com/jobs/search"/>
                    </ListItem>
                </List>
             </Grid>
         </Grid>
      </Container>
    </React.Fragment>
    );
}