

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
import Fundraising from '../../image/fundraising.jpg';
import Pirith from '../../image/Pirith.jpg';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { LinearProgress } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Divider } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AddFundraising from "./AddFundraising";
import UStuFundraising from './UStuViewFundraising';





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

function Union_Fund_dashboard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <Typography variant="h4" color="initial" align="center">
                Fundraising Viewer
            </Typography>


            <Box my={2}>
                <Grid container>
                    <Grid item sm={3}>
                        <Link to="/ustd/funddashboard/create">
                            <Button variant="contained" className={classes.filterbutton} size="medium" startIcon={<AddCircleOutlineOutlinedIcon />}>
                                Create fundraising
                            </Button>
                        </Link>
                    </Grid>


                    <Grid item sm={3}>
                        <Link to="/ustd/funddashboard/available">
                            <Button variant="contained" className={classes.filterbutton} size="medium" startIcon={<AddCircleOutlineOutlinedIcon />}>
                                Available fundraising
                            </Button>
                        </Link>
                    </Grid>


                    <Grid item sm={3}>
                        <Link to ="/ustd/funddashboard/expired">
                            <Button variant="contained" className={classes.filterbutton} size="medium" startIcon={<AddCircleOutlineOutlinedIcon />}>
                                Expired fundraising
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item sm={3}>
                        <Link to="/ustd/funddashboard/ended">
                            <Button variant="contained" className={classes.filterbutton} size="medium" startIcon={<AddCircleOutlineOutlinedIcon />}>
                                Ended fundraising
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>

            <Divider />

            <Box component="br" />

            <Grid container spacing={1}>

                <Grid item md={12} sm={12} xm={12}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image={Fundraising}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Fundraising objectives
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Normally, Students who are in the n the University of Colombo school of computing may faces some unbearble situations in their universiy carrer life. So most of them are realted to the economical barriers.
                                Here, as union students now you have a chance to create a fundrasing event for those problems. You have the priviledge to create fundrasing. Let's serve to our own collegues.
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>



            </Grid>




        </React.Fragment >
    );
}

export default Union_Fund_dashboard