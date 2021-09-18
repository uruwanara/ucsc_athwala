

import React from "react";
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

function Expired__fundraising() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>

            <Box component="br" />
            <Typography align="center" variant="h4" color="initial">
                Expired Fundraising
            </Typography>
            <Divider />
            <Box component="br" />
            <Link to="/ustd/funddashboard">
                <Button className={classes.filterbutton} variant="contained" color="primary" startIcon={<ArrowBackIosIcon />}>
                    Back to Fundrasing dashboard
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
                                    <Box>
                                        {/* <Box> */}
                                        <Typography variant="subtitle2" color="initial">
                                            Goal Amount: Rs. 200,000
                                        </Typography>
                                        {/* </Box> */}
                                    </Box>
                                </Grid>
                                <Grid item sm={4} xm={12}>
                                    <Box>
                                        {/* <Box> */}
                                        <Typography variant="subtitle2" color="initial">
                                            Started Amount: Rs. 200
                                        </Typography>
                                        {/* </Box> */}
                                    </Box>
                                </Grid>
                                <Grid item sm={4} xm={12}>
                                    <Box>
                                        {/* <Box> */}
                                        <Typography variant="subtitle2" color="initial">
                                            Current Amount : Rs.3000000
                                        </Typography>
                                        {/* </Box> */}
                                    </Box>
                                </Grid>

                            </Grid>
                            {/* </div> */}

                        </Grid>

                    </Grid>

           
                    <Grid container>
                        <Box alignItems="center">
                            <Typography variant="h6" color="initial" align="center" ml={1}>This fundraisng was created by Abises Weerasekera</Typography>
                        </Box>
                    </Grid>

                    <Grid item container ml={1} spacing={1}>
                        <Grid item sm={3} xs={6}>
                            <Box>
                                {/* <Box> */}
                                <Typography variant="subtitle2" color="initial">
                                    Start Date: 2021/09/02
                                </Typography>
                                {/* </Box> */}
                            </Box>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Box>
                                {/* <Box> */}
                                <Typography variant="subtitle2" color="initial">
                                    Started Time: 02.00p.m
                                </Typography>
                                {/* </Box> */}
                            </Box>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Box>
                                {/* <Box> */}
                                <Typography variant="subtitle2" color="initial">
                                    Expired Date: 2021/09/02
                                </Typography>
                                {/* </Box> */}
                            </Box>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Box>
                                {/* <Box> */}
                                <Typography variant="subtitle2" color="initial">
                                    Expired Time: 12.00p.m
                                </Typography>
                                {/* </Box> */}
                            </Box>
                        </Grid>

                    </Grid>


                </Grid>

            </Paper>


        </React.Fragment>
    );
}

export default Expired__fundraising;