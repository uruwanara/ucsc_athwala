import React ,{useEffect, useState, useCallback} from 'react';
import {Link} from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LG from '../../image/coun.png';

import TextTruncate from 'react-text-truncate';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TextField from '@material-ui/core/TextField';
import PageviewIcon from '@material-ui/icons/Pageview';
import {RequestButton,MyDonationButton} from './lg_button';
//import Searchbar from './Donation_search';
//import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';


const useStyles = makeStyles((theme) =>({
    root: {
        marginTop:10,
        flexGrow: 1,
    },

    donateButton:{
        color: "#FFFFFF",
        backgroundColor: "transparent",
        textTransform: "none",


    },
    nounderline:{
        "&:hover": {
            textDecoration: "none"
        },
    },
    cardFooter: {
        backgroundColor: "#757de8",
    },

    filterbar: {
        float:"right",

    },

    textfilter:{
        width: '100%',
        backgroundColor:"#FFFFFF",
    },

    filterbutton: {
        backgroundColor: "#757de8",
        color: "#FFFFFF",
        textTransform: "none",
        paddingTop:5,
        border:"none",
        borderRadius:20,
        "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#757de8",
            border: "1px solid #757de8",
        },
    },
    title:{
        color:"#546e7a",
        marginTop:5,
        marginBottom:20,
    },
    topic:{
        marginTop:'30px',
        marginBottom:'20px',
    },
    formControl: {
        minWidth: 120,
        marginTop:'20px',
        marginLeft:'60px'
    },
}));


export default function Cases(){
    const classes = useStyles();

    const userData=JSON.parse(localStorage.getItem("userData"));

    const [mapset, SetMap] = useState([]);
    const [filter, setFilter] = React.useState('all');
    const [open, setOpen] = React.useState(false);
    const [search,Setsearch] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);

    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() =>{
        fetchData();
    },[]);

    let userId=userData.id;

    const fetchData = async () => {
        const searchtext = {
            "uId": userData.id
        }
        console.log(searchtext);

        axios.post("http://localhost:5000/api/couns/findall", searchtext, {
            headers: {
                "access-control-allow-origin": "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            console.log(response.data);
            SetMap(response.data);
        })

    }

    function FormRow (props){
        var id = props.id;
        var link="/conCoun?id="+id;
       // var link="/std/viewLg";
        var imglink="http://localhost:5000/SamplePath/1234.png"
        var name=props.fname+" "+props.lname;
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Card className={classes.root}>

                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100"
                                src={imglink}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions className={classes.cardFooter}>
                            <Link to={link} className={classes.nounderline}>
                                <Button size="small"
                                        className={classes.donateButton}
                                        startIcon={<VideoCameraBackIcon/>}
                                >
                                    Contact Now
                                </Button>
                            </Link>

                        </CardActions>

                    </Card>
                </Grid>
            </React.Fragment>
        );
    }

    return(
        <div>
            <Grid container spacing={2} className={classes.topic}>
                <Grid item md={6}><Typography variant="h5" className={classes.title}>Contact Counsellor</Typography></Grid>

            </Grid>

            <div>
                <div style={{float:"left"}}>
                    {/*<Grid container spacing={4}>*/}
                    {/*    {tabButton()}*/}
                    {/*</Grid>*/}

                </div>
            </div>

            <div className={classes.root}>
                <Grid container spacing={6}>
                    {mapset.map(student=> (
                        <FormRow fname={student.fname} lname={student.lname} id={student.id} />
                    ))}

                </Grid>
            </div>
        </div>

    );
}