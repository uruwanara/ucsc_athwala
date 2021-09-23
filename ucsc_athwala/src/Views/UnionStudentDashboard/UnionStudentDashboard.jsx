
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//Images
import Lecturenote from '../../image/note.jpg';
import Cloths from '../../image/cloth.jpg';
import ElectronicDevice from '../../image/device.jpg';
import Money from '../../image/money.jpg';
import Vaniwilla from '../../image/Vaani-Vizha.jpg';

import { Container, LinearProgress } from '@material-ui/core';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ButtonBase } from '@material-ui/core';
import { Divider, Dialog, DialogTitle } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Land from '../LandingPage/home'  //Change the logout direction here


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    rootdiv: {
        flexGrow: 1,
    },
    media1: {
        height: '100%',
        marginLeft: theme.spacing(0.5),
    },
    media: {
        height: 140,
    },
    button: {
        margin: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper1: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
    },
    paper2: {
        padding: theme.spacing(1),
        margin: 'auto',
        maxWidth: '100%',
    },
    image: {
        height: 160,
    },
    progress: {
        height: 8,
        borderRadius: 10
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    filterbutton: {
        backgroundColor: "#757de8",
        color: "#FFFFFF",
        textTransform: "none",

        border: "none",
        borderRadius: 20,
        "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#757de8",
        },
    },
    filterbutton3: {
        backgroundColor:"#b71c1c",
        color: "#FFFFFF",
        textTransform: "none",

        border: "none",
        
        borderRadius: 20,
        "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#e53935",
        },
    },
}));

function UnionStudentDashboard() {

    const classes = useStyles();
    //retrieve data from localstorage
    const userData = JSON.parse(localStorage.getItem("userData"));
    // console.log(userData);

    const [mapset, SetMap] = useState([]);

    //use Effect is a hook which allows to perform side effects insode the components
    //Here we use useEffect to access the function which call to the backend
    //normally when the page is loaded it will run for a once
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const response = await fetch(`http://localhost:5000/api/fundraising/viewall`, {
            method: "GET",
        });
        const result = await response.json();
        // console.log(result);
        SetMap(result);
    };
    console.log(mapset);



    function Viewfund(props) {

        var link;
        var link1;
        var link2;
        var id = props.id;
        link = "/ustd/funddashboard/donate?id=" + id;
        //link for edit fundraising
        link1 = "/ustd/funddashboard/edit?id=" + id;
        //link for end by force
        link2 = "/ustd/funddashboard/endforce?id=" + id;
        var imglink="http://localhost:5000/Fund/"+Math.floor(Math.random() * 10)+".jpg";

        return (
            <Box my={2}>
                <Paper>

                    <Grid container m={1} spacing={1}>
                        <Grid item sm={4} xs={12}>


                            <CardMedia
                                className={classes.media1}
                                image={imglink}
                                title="Paella dish"
                            />

                        </Grid>


                        <Grid item sm={8} xs={12} container direction="row">

                            <Grid item xs={12}>
                                <Box mr={1}>
                                    <Typography align="center" gutterBottom variant="h5" color="primary">
                                        {props.title}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom align="justify">
                                        {props.description}
                                    </Typography>
                                </Box>
                                <Box mb={1} mr={1}>
                                    <Typography variant="body2" color="initial">50% completed
                                    </Typography>
                                    <LinearProgress variant="determinate" value={50} className={classes.progress} />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>

                                <Grid container spacing={1}>

                                    <Grid item sm={4} xm={12}>
                                        <Box justifyContent="flex-start">

                                            <Typography variant="subtitle2" color="initial">
                                                Goal Amount: Rs. {props.goalamount}
                                            </Typography>

                                        </Box>
                                    </Grid>
                                    <Grid item sm={8} xm={12}>
                                        <Box display="flex" justifyContent="flex-end" mr={1} mb={1}>
                                            <Box mr={1}>
                                                <Link to={link}>

                                                    <Button className={classes.filterbutton} variant="contained" color="primary" size="medium" >
                                                        View & Donate
                                                    </Button>
                                                </Link>
                                            </Box>
                                            {/* 
                                            <Box>
                                                <Button className={classes.filterbutton} variant="contained" color="secondary" size="medium" aligncontent='flex-end'>
                                                    End now
                                                </Button>
                                            </Box> */}
                                            <Box mr={1}>
                                                <Link to={link1}>
                                                    <Button className={classes.filterbutton} variant="contained" color="secondary" size="medium" aligncontent='flex-end'>
                                                        Edit now
                                                    </Button>
                                                </Link>
                                            </Box>


                                            <Box>
                                                <Link to={link2}>
                                                    <Button className={classes.filterbutton3} variant="contained" color="secondary" size="medium" aligncontent='flex-end'>
                                                        End now
                                                    </Button>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Grid>

                                </Grid>


                            </Grid>

                        </Grid>
                    </Grid>

                </Paper>
            </Box>
        );
    }

    return (
        <React.Fragment>

            <Typography variant="h4" align="center" color="initial" gutterBottom>
                Union Student Dashboard
            </Typography>

            <Typography variant="h6" align="right" color="initial" gutterBottom display="block">
                Hi {userData.username} Welcome!!!
            </Typography>


            {/******************************* Start of the Explore more cards **********************/}
            <Typography variant="h5" align="left" color="initial">
                Explore and Donate today
            </Typography>


            <div className={classes.rootdiv}>

                <Grid container >

                    <Grid item xs={12} md={3}>
                        <Paper className={classes.paper}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={Lecturenote}
                                        title="Lecture note"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" align="center" component="h2">
                                            Lecture Notes
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions style={{ justifyContent: 'center' }}>
                                    <Box mt={-1}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            className={classes.filterbutton}
                                            endIcon={<CardGiftcardIcon>donate</CardGiftcardIcon>}
                                        >
                                            Donate Now
                                        </Button>
                                    </Box>
                                    {/* </Typography> */}
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>



                    <Grid item xs={12} md={3}>
                        <Paper className={classes.paper}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={Cloths}
                                        title="cloths"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" align="center" component="h2">
                                            Cloths
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions style={{ justifyContent: 'center' }}>
                                    <Box mt={-1}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            className={classes.filterbutton}
                                            endIcon={<CardGiftcardIcon>donate</CardGiftcardIcon>}
                                        >
                                            Donate Now
                                        </Button>
                                    </Box>
                                    {/* </Typography> */}
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>


                    <Grid item xs={12} md={3}>
                        <Paper className={classes.paper}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={ElectronicDevice}
                                        title="electronic_device"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" align="center" component="h2">
                                            Electronic Devices
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions style={{ justifyContent: 'center' }}>
                                    <Box mt={-1}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            className={classes.filterbutton}
                                            endIcon={<CardGiftcardIcon>donate</CardGiftcardIcon>}
                                        >
                                            Donate Now
                                        </Button>
                                    </Box>
                                    {/* </Typography> */}
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>


                    <Grid item xs={12} md={3}>
                        <Paper className={classes.paper}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={Money}
                                        title="money"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" align="center" component="h2">
                                            Money
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions style={{ justifyContent: 'center' }}>
                                    <Box mt={-1}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            className={classes.filterbutton}
                                            endIcon={<CardGiftcardIcon>donate</CardGiftcardIcon>}
                                        >
                                            Donate Now
                                        </Button>
                                    </Box>
                                    {/* </Typography> */}
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>

                </Grid>

            </div>
            {/********************** End of the Explore more cards **********************************/}


            {/********************** Start of the Fundraising part **********************************/}
            <Box mt={5}>
                <Divider light={true} component="h2" color="secondary" />
            </Box>
            <Box mt={3}>
                <Typography variant="h5" color="initial" >
                    Fundraising Events
                </Typography>
            </Box>
            <Box display="flex" flexDirection="row" my={2}>
                <Link to="/ustd/funddashboard/create">
                    <Button className={classes.filterbutton} variant="contained" color="primary" size="medium" startIcon={<AddCircleOutlineOutlinedIcon />}>
                        Create a new fundraising event
                    </Button>
                </Link>
            </Box>

            {/* <div> */}




            {/* <Box id = {student.fundID} my={2}>
                <Paper>

                    <Grid container m={1} spacing={1}>
                        <Grid item sm={4} xs={12}>
                           

                            <CardMedia
                                className={classes.media1}
                                image={Vaniwilla}
                                title="Paella dish"
                            />

                        </Grid>


                        <Grid item sm={8} xs={12} container direction="row">

                            <Grid item xs={12}>
                                <Box mr={1}>
                                    <Typography align="center" gutterBottom variant="h5" color="primary">
                                        {student.fundName}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom align="justify">
                                        {student.fundDescription}
                                    </Typography>
                                </Box>
                                <Box mb={1} mr={1}>
                                    <Typography variant="body2" color="initial">50% completed
                                    </Typography>
                                    <LinearProgress variant="determinate" value={50} />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                               
                                <Grid container spacing={1}>

                                    <Grid item sm={4} xm={12}>
                                        <Box justifyContent="flex-start">
                                          
                                            <Typography variant="subtitle2" color="initial">
                                                Goal Amount: Rs. {student.fundGoalAmount}
                                            </Typography>
                                          
                                        </Box>
                                    </Grid>
                                    <Grid item sm={8} xm={12}>
                                        <Box display="flex" justifyContent="flex-end" mr={1} mb={1}>
                                            <Box mr={1}>
                                                <Link to="/ustd/funddashboard/donate">
                                              
                                                    <Button className={classes.filterbutton} variant="contained" color="primary" size="medium" >
                                                        View & Donate
                                                    </Button>
                                                </Link>
                                            </Box>

                                            <Box mr={1}>
                                                <Button className={classes.filterbutton} variant="contained" color="secondary" size="medium" aligncontent='flex-end'>
                                                    End now
                                                </Button>
                                            </Box>
                                            <Box>
                                                <Button className={classes.filterbutton} variant="contained" color="secondary" size="medium" aligncontent='flex-end'>
                                                    Edit now
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Grid>

                                </Grid>
                              

                            </Grid>

                        </Grid>
                    </Grid>

                </Paper>
            </Box> */}



            {/* </div> */}
            {/********************** End of the Fundraising part **********************************/}
            {mapset.map(student => (
                <Viewfund title={student.fundName} goalamount={student.fundGoalAmount} description={student.fundDescription} id={student.fundID} />
            ))}
        </React.Fragment>
    );
}

export default UnionStudentDashboard;




