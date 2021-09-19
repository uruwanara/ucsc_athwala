import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Note from '../../image/note.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      }, 
      flex1: {
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
      },
   
  }));

export function Description(props){
    const classes = useStyles();

    

    
    
    return(
                        <Grid item sm={12} md={7} xs={12}>
                        <Card className={classes.card}>
                                <CardContent >
               
                                    <Typography variant="h3" className={classes.title}>
                                        {props.title}
                                    </Typography>
                                    <Typography variant="h6" className={classes.title}>
                                        Subject : {props.subject}
                                    </Typography>
                                    <Typography variant="h6" className={classes.title}>
                                        Year : {props.year} 
                                    </Typography>
                                    <Typography variant="h6" className={classes.title}>
                                        Lesson :  {props.lesson}
                                    </Typography>
                                    <Typography variant="h6" className={classes.title}>
                                        Posted Date : {props.postdate}
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.title}>
                                        {props.description}
                                    </Typography>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
    )
}
   
export function ContactDetails(props){
    const classes = useStyles();
    return(

       
            
         
        
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h4" className={classes.title}>Contact Details</Typography>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Name : </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.username}</Typography></div>  
                        </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Type :</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.userType}</Typography> </div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Contact Number :</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.contactnumber}</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Email:</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.email}</Typography></div>  
                    </div>
                                                        
                </CardContent>    
            </Card>


       
     
    )
}

