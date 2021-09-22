

import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Vaniwilla from '../../image/Vaani-Vizha.jpg';
import Pirith from '../../image/Pirith.jpg';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { LinearProgress } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Divider } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import axios from "axios";
// import { useLocation } from 'react-router';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import { useHistory } from "react-router-dom";
// import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    details: {
        display: "flex",
        flexDirection: "column"
    },
    content: {
        flex: "1 0 auto"
    },
    cover: {
        // width: '75%',
    },
    media1: {
        height: '100%',
        marginLeft: theme.spacing(0.5),
    },
    progress: {
        height: 8,
        borderRadius: 10
    },
    controls: {
        display: "flex",
        alignItems: "center",
        // paddingLeft: theme.spacing(1),
        // paddingBottom: theme.spacing(1)
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

}
));

function UAvailable_fundraising() {
    const classes = useStyles();
    const theme = useTheme();

    // const search = useLocation().search;
    // const funddonationid = new URLSearchParams(search).get("id");
    // const userData = JSON.parse(localStorage.getItem("userData"));
    // const history = useHistory();
    // const [open, setOpen] = React.useState(false);
    // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
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
    // console.log(mapset);

    function Viewfund(props) {

        var link;
        var link1;
        var link2;
        var id = props.id;
        link = "/ustd/funddashboard/donate?id=" + id;
        link1 = "/ustd/funddashboard/edit?id=" + id;
        link2 = "/ustd/funddashboard/endforce?id=" + id;


        const handleDonate = (event) => {}






        return (
            <Box>
                <Paper>
                    <Box component="br" />
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
                                    <Typography gutterBottom variant="h6" color="primary">
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

                                            <Box mr={1}>
                                                <Link to={link1}>
                                                    <Button className={classes.filterbutton} variant="contained" color="secondary" size="medium" alignContent='flex-end'>
                                                        Edit now
                                                    </Button>
                                                </Link>
                                            </Box>
                                            <Box>
                                                <Link to={link2}>
                                                    <Button className={classes.filterbutton3} variant="contained" color="secondary" size="medium" alignContent='flex-end'>
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

            <Box component="br" />
            <Typography align="center" variant="h4" color="initial">
                Available Fundraisings
            </Typography>
            <Divider />
            <Box component="br" />
            <Link to="/ustd/funddashboard">
                <Button className={classes.filterbutton} variant="contained" color="primary" startIcon={<ArrowBackIosIcon />}>
                    Back to Fundrasing dashboard
                </Button>
            </Link>

            {/* <Box>
                <Paper>
                    <Box component="br" />
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

                                <Grid container spacing={1}>

                                    <Grid item sm={4} xm={12}>
                                        <Box justifyContent="flex-start">

                                            <Typography variant="subtitle2" color="initial">
                                                Goal Amount: Rs. 200,000
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
                                                <Link to="/ustd/funddashboard/edit">
                                                    <Button className={classes.filterbutton} variant="contained" color="secondary" size="medium" alignContent='flex-end'>
                                                        Edit now
                                                    </Button>
                                                </Link>
                                            </Box>
                                            <Box>
                                                <Button className={classes.filterbutton} variant="contained" color="secondary" size="medium" alignContent='flex-end'>
                                                    End now
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

            {mapset.map(student => (
                <Viewfund title={student.fundName} goalamount={student.fundGoalAmount} description={student.fundDescription} id={student.fundID} />
            ))}
        </React.Fragment>
    );
}

export default UAvailable_fundraising