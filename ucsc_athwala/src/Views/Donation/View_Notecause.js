import React from 'react';
import './Donation.css';
import { makeStyles } from '@material-ui/core/styles';
import Note from '../../image/note.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import  Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      }, flex1: {
        flexGrow: 1,
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
        padding: theme.spacing(3),
      },
      title:{
        color:"#546e7a",
        marginTop:10,
        marginBottom:20,
        fontFamily:"Poppins, sans-serif",
      },

      card:{
        backgroundColor:"white",
        border:"none",
        boxShadow:"none"
      },

      labelname: {
          marginLeft:40,
          marginBottom:10,
          color:"000000",
          fontFamily:"Poppins, sans-serif",
          width:"150px"
      },

      labelvalue:{
        marginLeft:100,
        marginBottom:10,
        color:"000000",
        fontFamily:"Poppins, sans-serif",
        width:"200px"
      },

      contactbtn:{
          textTransform:"none",
          fontFamily:"Poppins, sans-serif",
      }
  
  }));

export default function View_Notecause(){
   const classes = useStyles();
    return(
        <div>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    src= {Note}
                                />   
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card className={classes.card}>
                                <CardContent >
                                    <Typography variant="h3" className={classes.title}>
                                        DSA Lecture note
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.title}>
                                        I,m a second year student. I have exam on next month. I miss some lectures because i was in sick condition.
                                        so i need DSA part 02 lecture notes.
                                    </Typography>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} >
                        <Grid item xs={6}>
                            <Card className={classes.card}>
                            <CardContent>
                                    <Typography variant="h5" className={classes.title}>
                                       Donee's details
                                    </Typography>
                                    <div style={{display:"flex"}}>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelname}>Study year</Typography> 
                                        </div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelvalue}>2 nd year</Typography> 
                                        </div>  
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelname}>Subject</Typography> 
                                        </div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelvalue}>DSA part 02</Typography> 
                                        </div>  
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelname}>Specific lessons</Typography> 
                                        </div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelvalue}>All the lessons</Typography> 
                                        </div>  
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelname}>Before around</Typography> 
                                        </div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.labelvalue}>2021-10-13</Typography> 
                                        </div>  
                                    </div>
                                    
                                    
                                </CardContent>    
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card className={classes.card}>
                                <CardContent>
                                    <div>
                                        <Typography variant="h5" className={classes.title}>
                                        Donate Now
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.title}>
                                        Donate by uploading notes
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        >
                                        Upload File
                                        <input
                                            type="file"
                                        />
                                    </Button>
                                    </div>
                                    <div>
                                    <Typography variant="subtitle2" className={classes.title}>
                                       Or You can cotact donee to donate
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component="label"
                                        className={classes.contactbtn}
                                        >
                                        Contact to pickup
                                    </Button>
                                    </div>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
                    </Grid>
        </div>
    );
}