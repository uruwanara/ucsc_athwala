
import React from 'react';
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



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    rootdiv: {
        flexGrow: 1,
    },
    media1: {
        height: '100%',
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
}));

function UnionStudentDashboard() {

    const classes = useStyles();
    //retrieve data from localstorage
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);

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
                <Link to="/ustd/addfundraising">
                    <Button className={classes.filterbutton} variant="contained" color="primary" size="medium" startIcon={<AddCircleOutlineOutlinedIcon />}>
                        Create a new fundraising event
                    </Button>
                </Link>
            </Box>

            {/* <div> */}

            <Paper>

                <Grid container m={1} spacing={1}>
                    <Grid item sm={4} xs={12}>
                        {/* <ButtonBase className={classes.image} style={{ height: 'fixed' }}>
                            <img className={classes.img} alt="vaniwilla" src={Vaniwilla} />
                        </ButtonBase> */}

                        <CardMedia
                            className={classes.media1}
                            image={Vaniwilla}
                            title="Paella dish"
                        />

                    </Grid>


                    <Grid item sm={8} xs={12} container direction="row">

                        <Grid item xs={12}>
                            <Box mr={1}>
                                <Typography gutterBottom variant="h6" color="primary">
                                    Vani Vizha Tamil Festival 2021
                                </Typography>
                                <Typography variant="body1" gutterBottom align="justify">
                                    First year students of UCSC organize Vani Viza tamil festival every year.In this year they are planing to held it on
                                    23rd of August, 2021. This event will be a good opperunity to create unity among the badges.
                                </Typography>
                            </Box>
                            <Box mb={1} mr={1}>
                                <Typography variant="body2" color="initial">50% completed
                                </Typography>
                                <LinearProgress variant="determinate" value={50} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            {/* <div className={classes.rootdiv}> */}
                            <Grid container spacing={1}>

                                <Grid item sm={4} xm={12}>
                                    <Box justifyContent="flex-start">
                                        {/* <Box> */}
                                        <Typography variant="subtitle2" color="initial">
                                            Goal Amount: Rs. 200,000
                                        </Typography>
                                        {/* </Box> */}
                                    </Box>
                                </Grid>
                                <Grid item sm={8} xm={12}>
                                    <Box display="flex" justifyContent="flex-end" mr={1} mb={1}>
                                        <Box mr={1}>
                                            <Button className={classes.filterbutton} variant="contained" color="primary" size="medium" >
                                                View & Donate
                                            </Button>
                                        </Box>

                                        <Box mr={1}>
                                            <Button className={classes.filterbutton} variant="contained" color="secondary" size="medium" alignContent='flex-end'>
                                                End now
                                            </Button>
                                        </Box>
                                        <Box>
                                            <Button className={classes.filterbutton} variant="contained" color="secondary" size="medium" alignContent='flex-end'>
                                                Edit now
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>

                            </Grid>
                            {/* </div> */}

                        </Grid>

                    </Grid>
                </Grid>

            </Paper>


            {/* </div> */}
            {/********************** End of the Fundraising part **********************************/}


        </React.Fragment>
    );
}

export default UnionStudentDashboard;




