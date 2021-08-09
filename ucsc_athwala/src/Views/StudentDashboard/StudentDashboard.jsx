

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
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ButtonBase } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    rootdiv: {
        flexGrow: 1,
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
}));

function StudentDashboard() {

    const classes = useStyles();

    return (
        <React.Fragment>

            <Typography variant="h4" align="center" color="initial" gutterBottom>
                Student Dashboard
            </Typography>
            <Typography variant="h6" align="right" color="initial" gutterBottom display="block">
                Hi Uthpala Ruwanara Welcome!!!
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
                                            // className={classes.button}
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
                                            // className={classes.button}
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
                                            // className={classes.button}
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
                                            // className={classes.button}
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
            <Box mt={4}>
                <Typography variant="h5" color="initial" >
                    Fundraising Events
                </Typography>
            </Box>


            <div className={classes.rootdiv}>

                <Paper className={classes.paper2}>

                    <Grid container spacing={2} md={12}>
                        <Grid item>
                            <ButtonBase className={classes.image} style={{ height: 'fixed' }}>
                                <img className={classes.img} alt="vaniwilla" src={Vaniwilla} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>

                            <Grid item xs container direction="column" spacing={2}>

                                <Grid item xs>
                                    <Typography gutterBottom variant="h6" color="primary">
                                        Vani Vizha Tamil Festival 2021
                                    </Typography>
                                    <Typography variant="body1" gutterBottom align="justify">
                                        First year students of UCSC organize Vani Viza tamil festival every year.In this year they are planing to held it on
                                        23rd of August, 2021. This event will be a good opperunity to create unity among the badges.
                                    </Typography>
                                    <Box mb={1}>
                                        <LinearProgress variant="determinate" value={50} />
                                    </Box>
                                    
                                    <div className={classes.rootdiv}>
                                        <Grid container spacing={1}>

                                            <Grid item md={4}>
                                                <Typography variant="subtitle2" color="initial">
                                                    Raised amount Rs. 100,000
                                                </Typography>
                                            </Grid>
                                            <Grid item md={4}>
                                                <Typography variant="subtitle2" color="initial">
                                                    Goal amount Rs. 200,000
                                                </Typography>
                                            </Grid>
                                            <Grid item md={4}>
                                                <Box flexDirection="row">
                                                    <Button variant="contained" color="primary" size="medium" fullWidth >
                                                        View & Donate Now
                                                    </Button>
                                                </Box>
                                            </Grid>

                                        </Grid>
                                    </div>

                                </Grid>
                                {/* <Grid item>
                                    <Typography variant="subtitle2" style={{ cursor: 'pointer' }}>
                                        Goal
                                    </Typography>
                                </Grid> */}
                            </Grid>

                            {/* <Grid item>
                                <Typography variant="subtitle1">Raised Rs.10000</Typography>
                                <Typography variant="subtitle1">Goal Rs.15000</Typography>

                            </Grid> */}

                        </Grid>
                    </Grid>

                </Paper>

            </div>
{/********************** End of the Fundraising part **********************************/}


        </React.Fragment>
    );
}

export default StudentDashboard;