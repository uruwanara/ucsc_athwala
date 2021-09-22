


import React, { useEffect, useState } from "react";
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
import { Divider, Container, TextField } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useLocation } from 'react-router';
import axios from "axios";

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

}
));

function UStudonate_fundraising() {
    const classes = useStyles();
    const theme = useTheme();
    const [description, setDescription] = useState();
    const [title, setTitle] = useState();
    const [goalamount, setGoalamount] = useState();
    const [startamount, setStartamount] = useState();
    const [startdate, setStartDate] = useState();
    const [starttime, setStartTime] = useState();
    const [expiredate, setExpireDate] = useState();
    const [expiretime, setExpireTime] = useState();
    const [createdby, setCreatedBy] = useState();
    const [currentamount, setCurrentAmount] = useState();


    const search = useLocation().search;


    useEffect(() => {
        const funddonationid = new URLSearchParams(search).get("id");
        fetchDescription(funddonationid);
        // fetchDetails(funddonationid);
    }, []);

    const fetchDescription = (funddonationid) => {
        const description = {
            "fundID": funddonationid,
        }
        axios.post("http://localhost:5000/api/fundraising/getfund", description, {
            headers: {
                "access-control-allow-origin": "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            console.log(response.data);
            setDescription(response.data[0].fundDescription);
            setTitle(response.data[0].fundName);
            setGoalamount(response.data[0].fundGoalAmount)
            setStartamount(response.data[0].fundStartAmount);
            setStartDate(response.data[0].fundStartDate)
            setStartTime(response.data[0].fundStartTime)
            setExpireDate(response.data[0].fundExpireDate)
            setExpireTime(response.data[0].fundExpireTime)
            setCreatedBy(response.data[0].fundStartedBy)
            setCurrentAmount(response.data[0].fundCurrentAmount)
        })
    };


    return (
        <React.Fragment>

            <Box component="br" />
            <Typography align="center" variant="h4" color="initial">
                Donate Now
            </Typography>
            <Divider />
            <Box component="br" />
            <Link to="/ustd/funddashboard">
                <Button className={classes.filterbutton} variant="contained" color="primary" startIcon={<ArrowBackIosIcon />}>
                    Back to Available fundraising
                </Button>
            </Link>


            <Paper>
                <Box component="br" />
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
                                <Typography align="center" gutterBottom variant="h4" color="primary">
                                    {title}
                                </Typography>
                                <Typography variant="h6" gutterBottom align="justify">
                                    {description}
                                </Typography>
                            </Box>

                            <Box mb={1} mr={1}>
                                <Typography variant="subtitle1" color="initial">50% completed
                                </Typography>
                                <LinearProgress variant="determinate" value={50} className={classes.progress}/>
                            </Box>

                        </Grid>
                        <Grid item xs={12}>
                            {/* <div className={classes.rootdiv}> */}
                            <Grid container spacing={1}>

                                <Grid item sm={4} xm={12}>
                                    <Box>
                                        {/* <Box> */}
                                        <Typography variant="subtitle1" color="initial">
                                            Goal Amount: Rs. {goalamount}
                                        </Typography>
                                        {/* </Box> */}
                                    </Box>
                                </Grid>
                                <Grid item sm={4} xm={12}>
                                    <Box>
                                        {/* <Box> */}
                                        <Typography variant="subtitle1" color="initial">
                                            Started Amount: Rs. {startamount}
                                        </Typography>
                                        {/* </Box> */}
                                    </Box>
                                </Grid>
                                <Grid item sm={4} xm={12}>
                                    <Box>
                                        {/* <Box> */}
                                        <Typography variant="subtitle1" color="initial">
                                            Current Amount : Rs. {currentamount}
                                        </Typography>
                                        {/* </Box> */}
                                    </Box>
                                </Grid>

                            </Grid>
                            {/* </div> */}

                        </Grid>

                    </Grid>




                    <Grid item container ml={1} spacing={1}>
                        <Grid item sm={3} xs={6}>
                            <Box>
                                {/* <Box> */}
                                <Typography variant="subtitle1" color="initial">
                                    Started Date : {startdate}
                                </Typography>
                                {/* </Box> */}
                            </Box>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Box>
                                {/* <Box> */}
                                <Typography variant="subtitle1" color="initial">
                                    Started Time: {starttime}
                                </Typography>
                                {/* </Box> */}
                            </Box>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Box>
                                {/* <Box> */}
                                <Typography variant="subtitle1" color="initial">
                                    Expire Date: {expiredate}
                                </Typography>
                                {/* </Box> */}
                            </Box>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Box>
                                {/* <Box> */}
                                <Typography variant="subtitle1" color="initial">
                                    Expire Time: {expiretime}
                                </Typography>
                                {/* </Box> */}
                            </Box>
                        </Grid>

                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box display="flex" justifyContent="flex-start">
                            <Box>
                                <Typography variant="h6" color="initial">
                                    This Fundraising is created by: {createdby}
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box display="flex" justifyContent="flex-end" mr={1}>
                            <Box mr={1}>
                                <TextField
                                    variant="outlined"
                                    required
                                    // multiline
                                    // fullWidth
                                    id="amount"
                                    label="Donation amount"
                                    name="amount"
                                    
                                    // autoComplete="description"
                                    
                                />
                            </Box>
                            <Box>

                                <Button color="primary" variant="contained" color="primary">
                                    Donate now
                                </Button>

                            </Box>

                        </Box>

                    </Grid>


                </Grid>

            </Paper>


        </React.Fragment>
    );
}

export default UStudonate_fundraising;