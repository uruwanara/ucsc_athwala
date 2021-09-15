import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import {Link, useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Cloth from '../../image/cloth.jpg';
import Device from '../../image/device.jpg';
import Money from '../../image/money.jpg';
import Note from '../../image/note.jpg';
import Other from '../../image/other.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {ProductButton,ProductPostButton} from './Product_button';

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
          textAlign:"center",
          marginTop:10,
          fontFamily:"Poppins, sans-serif",
          fontWeight:"bold",
      },
      subtitle:{
        textAlign:"center",
        marginTop:10,
        fontFamily:"Poppins, sans-serif",
        fontWeight:"normal",
      },
      categorylist:{
          margin:60,
      },
      cardtopic:{
          color:"#757de8",
      },
      categoryButton:{
        color: "#FFFFFF",
        backgroundColor: "transparent",
        textTransform: "none"
      },
      categorycardFooter: {
        backgroundColor: "#757de8",
      },
      myrequestbutton: {
        backgroundColor: "#757de8",
        color: "#FFFFFF",
        textTransform: "none",
        paddingTop:5,
        paddingLeft:10,
        paddingRight:10,
        border:"none",
        borderRadius:20,
        marginLeft:60,
        "&:hover": {
          color: "#FFFFFF",
          backgroundColor: "#757de8",
          border: "1px solid #757de8",
        },
    }
  
  }));

export default function View_Allcause(){
    const classes = useStyles();
    const history = useHistory();

    function FormRow1() {
        return (
          <React.Fragment>
            <Grid item xs={4}>
            <Link to={'/std/PostDeviceForm'}>
                <Card>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        src= {Note}
                    />

                    <CardContent>   
                    <Typography variant="h4" component="h4" className={classes.cardtopic}>
                        
                        Electronic devices
                    </Typography>
                    </CardContent>

                    </CardActionArea>
                    <CardActions className={classes.categorycardFooter}>
                        <Button size="small" 
                            className={classes.categoryButton} 
                            startIcon={<AddCircleIcon />}
                            onClick={()=>{ history.push("/std/PostDevice")}}
                            >
                               Create Advertisment
                        </Button>
                    </CardActions>
                </Card>
                </Link>
            </Grid>
            <Grid item xs={4}>
            <Link to={'/std/PostNoteForm'}>
            <Card>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        src= {Cloth}
                    />

                    <CardContent>   
                    <Typography variant="h4" component="h4" className={classes.cardtopic}>
                    Lecture Notes
                    </Typography>
                    </CardContent>

                    </CardActionArea>
                    <CardActions className={classes.categorycardFooter}>
                        <Button size="small" 
                            className={classes.categoryButton} 
                            startIcon={<AddCircleIcon />}
                            onClick={()=>{ history.push("/std/PostNote")}}
                            >
                                Create Advertisment
                        </Button>
                    </CardActions>
                </Card>
                </Link>
            </Grid>
            <Grid item xs={4}>
            <Link to={'/std/PostOtherForm'}>
            <Card>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        src= {Device}
                    />

                    <CardContent>   
                    <Typography variant="h4" component="h4" className={classes.cardtopic}>
                        Others
                    </Typography>
                    </CardContent>

                    </CardActionArea>
                    <CardActions className={classes.categorycardFooter}>
                        <Button size="small" 
                            className={classes.categoryButton} 
                            startIcon={<AddCircleIcon />}
                            onClick={()=>{ history.push("/std/PostOther")}}
                            >
                                Create Advertisment
                        </Button>
                    </CardActions>
                </Card>
                </Link>
            </Grid>
          </React.Fragment>
        );
      }

    return(
        <div>
                <Typography variant="h5" component="h2" className={classes.title}>
                    Select the category 
                </Typography>
                <Typography variant="subtitle1" component="h2" className={classes.subtitle}>
                    Please Select the category to post the Advertisment
                </Typography>

                <div style={{float:"left"}}>
                    <Grid container spacing={4}>
                        <ProductButton />
                        <ProductPostButton />
                        
                    </Grid>  
                </div>
                        <br></br>
                        <br></br>
                        <br></br>
                <div className={classes.categorylist}>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                   
                    <FormRow1 />
                    </Grid>
                </Grid>
                </div>
        </div>
    );
}

