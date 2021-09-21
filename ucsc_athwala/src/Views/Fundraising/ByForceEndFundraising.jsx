


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
import { Divider, Container } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useLocation } from 'react-router';
import axios from "axios";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";

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

function ByforceEndFundraising() {
    const classes = useStyles();
    const theme = useTheme();

    const search = useLocation().search;
    const funddonationid = new URLSearchParams(search).get("id");
    const userData = JSON.parse(localStorage.getItem("userData"));
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

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


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = (event) => {
        setOpen(false);
        event.preventDefault();
        const endbyforce = {
            "fundID": funddonationid,
            "endedby": userData.username,
        }

        axios.post("http://localhost:5000/api/fundraising/endbyforce", endbyforce, {
            headers: {
                "access-control-allow-origin": "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            if (response.data === 'success') {
                // console.log("hkjkdf");
                // console.log(product_id);
                enqueueSnackbar('Successfully Ended the fundraising', {
                    variant: 'success', anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    }
                })

                if (userData.userType === "UNIONST") {
                    history.push("/ustd/funddashboard/ended");
                }

            }
        });

    }

    return (
        <React.Fragment>

            <Box component="br" />
            <Typography align="center" variant="h4" color="initial">
                Let's End this fundraising
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
                                <LinearProgress variant="determinate" value={50} />
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
                            <Box>
                                <Button onClick={handleClickOpen} className={classes.filterbutton} variant="contained" color="primary">
                                    End by force now
                                </Button>
                            </Box>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">Do you want to end this fundraising?</DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        No
                                    </Button>
                                    <Button onClick={handleConfirm} color="primary" autoFocus>
                                        Yes
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Box>

                    </Grid>


                </Grid>

            </Paper>


        </React.Fragment>
    );
}

export default ByforceEndFundraising;