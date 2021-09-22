import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LandImage from '../../image/ucsc1.jpg'


const useStyles = makeStyles((theme) =>({
    root: {
      marginTop:10,
      flexGrow: 1,
      padding: theme.spacing(1)
    },

    title:{
      color:"#303f9f",
      marginTop:5,
      marginBottom:20,
      fontWeight: 'bold',
      fontFamily:"Poppins, sans-serif",
    },
    topic:{
      marginTop:'20px',
      marginBottom:'20px',
      fontFamily:"Poppins, sans-serif",
      fontSize:14,
      color:"#78909c",
      fontWeight:"normal"
    },
    formControl: {
      minWidth: 120,
      marginTop:'20px',
      marginLeft:'60px'
    },
    gridcontainer:{
      backgroundColor:'white',
      width:'100%'
    },
    descriptioncard:{
      backgroundColor:'#fafafa',
      height:"100%"
    },
    imgcard:{
      backgroundImage:`url(${LandImage})`, 
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      boxShadow:'none' 
    },
    carddes:{
      backgroundColor:"transparent",
      marginTop:0,
      flexGrow: 1,
      padding: theme.spacing(10),
      textAlign:"center"
    },
    sectionlbl:{
      textAlign:"center",
      marginTop:'30px',
      marginBottom:'0px',
      fontFamily:"Poppins, sans-serif",
      fontSize:24,
      color:"#102027",
      fontWeight:"bold"
    }
  }));


export default function StartSection(){
    const classes = useStyles();

    return (
        <Grid container sm={12} className={classes.gridcontainer}>
        <Grid item sm={6} className={classes.descriptioncard}>
        <Card className={classes.carddes}>
            <CardActionArea style={{backgroundColor:"transparent"}}>
                <CardContent style={{backgroundColor:"transparent"}}>
                    <Typography gutterBottom variant="h3" component="h2" className={classes.title}>
                      Together We can <br></br>
                      Make it <p style={{color:"#c51162"}}>Better..</p>
                    </Typography>
                    <Typography gutterBottom variant="h3" component="h2" className={classes.topic}>
                    we are third year undergraduate of university Of Colombo 
            School of Computing.our team members are Uthpala,Anuradha,Abises,Nimasha and Dhanu. 
            'UCSC Athwala' is our third year group project.
            The major goal of this project is to help the newcomers of UCSC to resonate with the  
            environment, culture of the university and the administration. Also to help the student 
             community to manage their essentials throughout the university period and give  opportunities to 
             help others in the student community.
             
                    </Typography>
                </CardContent>
            </CardActionArea>
          </Card>

        </Grid>
          <Grid item sm={6} className={classes.imgcard}></Grid>
      </Grid>
    )


}