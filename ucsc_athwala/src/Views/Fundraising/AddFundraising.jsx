
// import React from 'react';
// import './CreateFundraising.css';
// import Nav from '../Navbar/Navbar';
// import UnionStudentSidebar from '../UnionSidebar/UnionStudentSidebar';



// function AddFundraising() {
// return (
// <div>
//     <div><Nav /></div>
//     {/****************************devide the two main columns to sidebar and fundraising form by flex************************/}
//     <div style={{ display: 'flex' }}>

//         <UnionStudentSidebar />

//         <div className="container container-custom">
//             <h2 className="text-center">Let's Create a New fundrasing programme</h2>
//             <hr />

//             <form className="row g-3 border border-primary pb-3">

//                 <div className="col-md-7 d-flex align-items-end justify-content-end">
//                     {/* <label htmlFor="inputTopic" className="form-label mt-3">Fundraising Event Topic</label>
//                     <input type="text" name="fund_topic" className="form-control" id="inputTopic" placeholder="Enter a topic" /> */}
//                     <div class="input-group">
//                         <span style={{ color: '#081d62' }} class="input-group-text" id="basic-addon1"><b>Event Name</b></span>
//                         <input type="text" class="form-control p-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
//                     </div>
//                 </div>
//                 <div className="col-md-5 d-flex align-items-end justify-content-end">
//                     <div class="input-group  mt-3">
//                         <span style={{ color: '#081d62' }} class="input-group-text"><b>Upload an image</b></span>
//                         <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
//                         {/* <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button> */}
//                     </div>
//                 </div>


//                 <div className="col-md-12">
//                     {/* <label htmlFor="inputAddress" className="form-label mt-3">Fundraising Description</label>
//                     <input type="text" name="fund_description" className="form-control" id="inputAddress" placeholder="Enter a description" /> */}
//                     <div className="input-group mt-3">
//                         {/* <label htmlFor="inputDescription" className="from-label mt-3">Fundraising Description</label> */}
//                         <span style={{ color: '#081d62' }} className="input-group-text"><b>Fundraising Description</b></span>
//                         {/* <label style={{ color: '#081d62' }} className="input-group-text"><b>Fundraising Description</b></label> */}
//                         <textarea className="form-control" aria-label="With textarea" defaultValue={"Enter a detailed description"} />
//                     </div>
//                 </div>


//                 <div className="col-md-6  d-flex align-items-end justify-content-end">
//                     {/* <label htmlFor="inputBaseAmount" className="form-label mt-3">Base amount of fundraising</label>
//                     <input type="number" name="fund_base_amount" className="form-control" id="inputBaseAmount" placeholder="Enter an amount in rupees" /> */}
//                     <div class="input-group mt-3">
//                         <span style={{ color: '#081d62' }} class="input-group-text"><b>Total goal amount in Rs.</b></span>
//                         <input type="number" class="form-control" aria-label="Amount (to the nearest rupee)" />
//                         <span class="input-group-text">.00</span>
//                     </div>
//                 </div>

//                 <div className="col-md-6  d-flex align-items-end justify-content-end">
//                     {/* <label htmlFor="inputBaseAmount" className="form-label mt-3">Base amount of fundraising</label>
//                     <input type="number" name="fund_base_amount" className="form-control" id="inputBaseAmount" placeholder="Enter an amount in rupees" /> */}
//                     <div class="input-group mt-3">
//                         <span style={{ color: '#081d62' }} class="input-group-text"><b>Starting base amount in Rs.</b></span>
//                         <input type="number" class="form-control" aria-label="Amount (to the nearest rupee)" />
//                         <span class="input-group-text">.00</span>
//                     </div>
//                 </div>



//                 <div className="col-md-6 d-flex align-items-end justify-content-end">
//                     {/* <label htmlFor="inputExpireDate" className="form-label mt-3">Expired Date of fundraising</label>
//                     <input type="date" className="form-control" id="inputExpireDate" /> */}
//                     <div class="input-group mt-3">
//                         <span style={{ color: '#081d62' }} class="input-group-text" id="basic-addon1"><b>Expired Date of fundraising</b></span>
//                         <input type="time" class="form-control p-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
//                     </div>

//                 </div>               
//                 <div className="col-md-6 d-flex align-items-end justify-content-end">
//                     {/* <label htmlFor="inputExpireTime" className="form-label mt-3">Expired Time of fundraising</label>
//                     <input type="time" className="form-control" id="inputExpireTime" /> */}
//                     <div class="input-group mt-3">
//                         <span style={{ color: '#081d62' }} class="input-group-text" id="basic-addon1"><b>Expired Time of fundraising </b></span>
//                         <input type="time" class="form-control p-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
//                     </div>

//                 </div>



//                 <div className="col-12 d-flex flex-row-reverse mt-4">
//                     <div><button input type="submit" className="btn btn1 m-1">Create Fundrasing</button>
//                     </div>
//                     <div><button input type="reset" className=" btn btn1 m-1">Reset Details</button>
//                     </div>
//                 </div>

//             </form>

//         </div>

//     </div>
//         // </div>
//     );

// }

// export default AddFundraising;

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import { Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import NumberFormat from 'react-number-format';
import { Restore } from '@material-ui/icons';
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import DatePicker from '@material-ui/lab/DatePicker';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Divider } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from "react-router-dom";
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
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

// const use_timeStyles = makeStyles((theme) => ({
//     container: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     textField: {
//     //   marginLeft: theme.spacing(1),
//     //   marginRight: theme.spacing(1),
//     //   width: 200,
//     },
//   }));

// function NumberFormatCustom(props) {
//     const { inputRef, onChange, ...other } = props;

//     return (
//         <NumberFormat
//             {...other}
//             getInputRef={inputRef}
//             onValueChange={(values) => {
//                 onChange({
//                     target: {
//                         name: props.name,
//                         value: values.value,
//                     },
//                 });
//             }}
//             thousandSeparator
//             isNumericString
//             prefix="Rs "

//         />
//     );
// }

// NumberFormatCustom.propTypes = {
//     inputRef: PropTypes.func.isRequired,
//     name: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };



function AddFundraising() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        // textmask: '(1  )    -    ',
        numberformat: '',
    });

    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();


    const [fundname, setFundname] = React.useState("");
    const [funddescription, setFunddescription] = React.useState("");
    const [goalamount, setGoalamount] = React.useState("");
    const [startamount, setStartamount] = React.useState("");
    const [expiredate, setExpiredate] = React.useState("");
    const [image, setImage] = React.useState("");
    const [expiretime, setExpiretime] = React.useState("");

    const userData = JSON.parse(localStorage.getItem("userData"));


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        setOpen(false);
        event.preventDefault();
        const postFundraising = {
            "create_by": userData.username,
            "fundname": fundname,
            "funddescription": funddescription,
            "image": image,
            "goalamount": goalamount,
            "startamount": startamount,
            "expiredate": expiredate,
            "expiretime": expiretime,
        }
        axios.post("http://localhost:5000/api/fundraising/create", postFundraising, {
            headers: {
                "access-control-allow-origin": "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            console.log(response.data);
            if (response.data === 'success') {
                setFundname("");
                setFunddescription("");
                setGoalamount("");
                setStartamount("");
                setExpiredate("");
                setImage("");
                setExpiretime("");

                enqueueSnackbar('Successfully Created the new fundraising', {
                    variant: 'success', anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    }
                })


                if (userData.userType === "UNIONST") {
                    history.push("/ustd/funddashboard/available");
                }

            }

        }).catch((err) => {

        })
    }

    const defaultProps = {
        bgcolor: 'background.paper',
        m: 1,
        border: 1,
        // style: { width: '5rem', height: '5rem' },
    };

    // const classes_time = use_timeStyles();

    return (

        <React.Fragment>
            <Typography variant="h4" align="center" color="initial">Let's Create a New fundrasing programme</Typography>
            <Divider />
            <Box component="br" />

            <Link to="/ustd/funddashboard">
                <Button className={classes.filterbutton} variant="contained" color="primary" startIcon={<ArrowBackIosIcon />}>
                    Back to Fundrasing dashboard
                </Button>
            </Link>

            <Box component="br" />
            <Box borderColor="primary.main" {...defaultProps}>
                <Box m={1}>
                    <form className={classes.root} onSubmit={handleSubmit}>
                        <Card>
                            <Box component="div" m={1}>
                                <Grid m={1} container justify="space-between" spacing={3}>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            id="fundname"
                                            label="Fundraising Name"
                                            placeholder="Enter meaningful topic"
                                            multiline
                                            name="fundname"
                                            variant="outlined"
                                            fullWidth
                                            onChange={e => setFundname(e.target.value)}
                                        // dataType="date"
                                        />
                                    </Grid>


                                    <Grid item xs={12} sm={9}>
                                        <TextField
                                            id="funddescription"
                                            label="Fundraising Description"
                                            multiline
                                            rows={3}
                                            name="funddescription"
                                            placeholder="Why/Who organise etc.."
                                            variant="outlined"
                                            fullWidth
                                            onChange={e => setFunddescription(e.target.value)}

                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={3}>
                                        {/* <label for="input_image"><h6 style="color:black;">Upload an Image</h6></label> */}
                                        <Typography variant="subtitle1" color="primary">Upload an image
                                            <input id="image" type="file" name="image" accept="image/png, image/gif, image/jpeg" />
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={3}>

                                        <TextField
                                            label="Goal Amount in Rs."
                                            // value={values.numberformat}
                                            // onChange={handleChange}
                                            name="goalamount"
                                            id="goalamount"
                                            // InputProps={{
                                            //     inputComponent: NumberFormatCustom,
                                            // }}
                                            multiline
                                            variant="outlined"
                                            placeholder="Rs 10000"
                                            fullWidth
                                            onChange={e => setGoalamount(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>

                                        <TextField
                                            label="Starting Amount in Rs."
                                            // value={values.numberformat}
                                            // onChange={handleChange}
                                            name="startamount"
                                            id="startamount"
                                            // InputProps={{
                                            //     inputComponent: NumberFormatCustom,
                                            // }}
                                            multiline
                                            variant="outlined"
                                            placeholder="Rs 100"
                                            fullWidth
                                            onChange={e => setStartamount(e.target.value)}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>

                                        <TextField
                                            id="expiredate"
                                            label="Expire Date"
                                            type="date"
                                            value={expiredate}
                                            inputProps={{
                                                min: "2021-09-23"
                                              }}
                                            //   autoComplete="date"
                                            name="expiredate"
                                            defaultValue="weqwe"
                                            // className={classes_time.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                            fullWidth
                                            onChange={e => setExpiredate(e.target.value)}
                                        />

                                    </Grid>

                                    <Grid item xs={12} sm={3}>
                                        <TextField
                                            id="expiretime"
                                            label="Expire Time"
                                            type="time"
                                            name="expiretime"
                                            // className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            variant="outlined"
                                            fullWidth
                                            onChange={e => setExpiretime(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12}>
                                        <Box display="flex" justifyContent="flex-end">

                                            <Box>
                                                <Button onClick={handleClickOpen} className={classes.filterbutton} variant="contained" color="primary" endIcon={<CheckCircleIcon>send</CheckCircleIcon>}>
                                                    Create Fundraising
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
                                                    <DialogContentText id="alert-dialog-description">Do you want to Create a new fundraising?</DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleClose} color="primary">
                                                        No
                                                    </Button>
                                                    <Button onClick={handleSubmit} color="primary" autoFocus>
                                                        Yes
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>


                                        </Box>
                                    </Grid>


                                </Grid>
                            </Box>
                        </Card>
                    </form>
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default AddFundraising
{/* <Paper className={classes.paper}>xs=6 sm=3</Paper> */ }