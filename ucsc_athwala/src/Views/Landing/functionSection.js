import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LandImage from '../../image/ucsc1.jpg';
import Donimg from '../../image/donationimg.jpg';
import Bid from '../../image/bid.jpg';
import Learning from '../../image/lergroup.jpg';
import Video from '../../image/video.jpg';
import Product from '../../image/productimg.jpg';
import Fund from '../../image/fund.jpg'


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
      textAlign:'center'
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
      width:'100%',
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
      fontSize:30,
      color:"#102027",
      fontWeight:"bold"
    },
    media: {
        height: 140,
      },
  }));


export default function StartSection(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
           <Grid xs={12}><Typography gutterBottom variant="h3" component="h5" className={classes.sectionlbl}>We Provide</Typography> </Grid>
        <Grid container spacing={2}>
        
            <Grid item xs={4}>
            <Card className={classes.root}>

                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200"
                        src= {Donimg}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                            Donation
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
            <Card className={classes.root}>

                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200"
                        src= {Product}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                           Products
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
            <Card className={classes.root}>

                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200"
                        src= {Bid}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                            Auctions
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
              
        </Grid>

        <Grid container spacing={2}>
        
            <Grid item xs={4}>
            <Card className={classes.root}>

                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200"
                        src= {Fund}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                            Fundrasing
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
            <Card className={classes.root}>

                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200"
                        src= {Video}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                           Video Conference and Chat
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
            <Card className={classes.root}>

                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200"
                        src= {Learning}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                            Learning Groups
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
              
        </Grid>

      </div>
    )


}