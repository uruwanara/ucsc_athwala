
// import React from 'react';
// import './CreateFundraising.css';
// import Nav from '../Navbar/Navbar';
// import UnionStudentSidebar from '../UnionSidebar/UnionStudentSidebar';



// function EditFundraising() {
//     return (
//         <div>
//             <div><Nav /></div>
//             {/****************************devide the two main columns to sidebar and fundraising form by flex************************/}
//             <div style={{ display: 'flex' }}>

//                 <UnionStudentSidebar />

//                 <div className="container container-custom">
//                     <h2 className="text-center">Let's Create a New fundrasing programme</h2>
//                     <hr />

//                     <form className="row g-3 border border-primary pb-3 container-fluid">

//                         <div className="col-md-7 d-flex align-items-end justify-content-end">
//                             {/* <label htmlFor="inputTopic" className="form-label mt-3">Fundraising Event Topic</label>
//                             <input type="text" name="fund_topic" className="form-control" id="inputTopic" placeholder="Enter a topic" /> */}
//                             <div class="input-group">
//                                 <span style={{ color: '#081d62' }} class="input-group-text" id="basic-addon1"><b>Event Name</b></span>
//                                 <input type="text" class="form-control p-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
//                             </div>
//                         </div>
//                         <div className="col-md-5 d-flex align-items-end justify-content-end">
//                             <div class="input-group  mt-3">
//                                 <span style={{ color: '#081d62' }} class="input-group-text"><b>Upload an image</b></span>
//                                 <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
//                                 {/* <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button> */}
//                             </div>
//                         </div>


//                         <div className="col-md-12">
//                             {/* <label htmlFor="inputAddress" className="form-label mt-3">Fundraising Description</label>
//                             <input type="text" name="fund_description" className="form-control" id="inputAddress" placeholder="Enter a description" /> */}
//                             <div className="input-group mt-3">
//                                 {/* <label htmlFor="inputDescription" className="from-label mt-3">Fundraising Description</label> */}
//                                 <span style={{ color: '#081d62' }} className="input-group-text"><b>Fundraising Description</b></span>
//                                 {/* <label style={{ color: '#081d62' }} className="input-group-text"><b>Fundraising Description</b></label> */}
//                                 <textarea className="form-control" aria-label="With textarea" defaultValue={"Enter a detailed description"} />
//                             </div>
//                         </div>


//                         <div className="col-md-6  d-flex align-items-end justify-content-end">
//                             {/* <label htmlFor="inputBaseAmount" className="form-label mt-3">Base amount of fundraising</label>
//                             <input type="number" name="fund_base_amount" className="form-control" id="inputBaseAmount" placeholder="Enter an amount in rupees" /> */}
//                             <div class="input-group mt-3">
//                                 <span style={{ color: '#081d62' }} class="input-group-text"><b>Total goal amount in Rs.</b></span>
//                                 <input type="number" class="form-control" aria-label="Amount (to the nearest rupee)" />
//                                 <span class="input-group-text">.00</span>
//                             </div>
//                         </div>

//                         <div className="col-md-6  d-flex align-items-end justify-content-end">
//                             {/* <label htmlFor="inputBaseAmount" className="form-label mt-3">Base amount of fundraising</label>
//                             <input type="number" name="fund_base_amount" className="form-control" id="inputBaseAmount" placeholder="Enter an amount in rupees" /> */}
//                             <div class="input-group mt-3">
//                                 <span style={{ color: '#081d62' }} class="input-group-text"><b>Starting base amount in Rs.</b></span>
//                                 <input type="number" class="form-control" aria-label="Amount (to the nearest rupee)" />
//                                 <span class="input-group-text">.00</span>
//                             </div>
//                         </div>



//                         <div className="col-md-6 d-flex align-items-end justify-content-end">
//                             {/* <label htmlFor="inputExpireDate" className="form-label mt-3">Expired Date of fundraising</label>
//                             <input type="date" className="form-control" id="inputExpireDate" /> */}
//                             <div class="input-group mt-3">
//                                 <span style={{ color: '#081d62' }} class="input-group-text" id="basic-addon1"><b>Expired Date of fundraising</b></span>
//                                 <input type="time" class="form-control p-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
//                             </div>

//                         </div>               
//                         <div className="col-md-6 d-flex align-items-end justify-content-end">
//                             {/* <label htmlFor="inputExpireTime" className="form-label mt-3">Expired Time of fundraising</label>
//                             <input type="time" className="form-control" id="inputExpireTime" /> */}
//                             <div class="input-group mt-3">
//                                 <span style={{ color: '#081d62' }} class="input-group-text" id="basic-addon1"><b>Expired Time of fundraising </b></span>
//                                 <input type="time" class="form-control p-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
//                             </div>

//                         </div>



//                         <div className="col-12 d-flex flex-row-reverse mt-4 ml-1">
//                             <div><button input type="submit" className="btn btn1 m-1">Update Fundraising</button>
//                             </div>
//                             <div><button input type="reset" className=" btn btn1 m-1">Reset Details</button>
//                             </div>
//                         </div>

//                     </form>

//                 </div>

//             </div>
//         </div>
//     );

// }

// export default EditFundraising;


import React from 'react';
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
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            prefix="Rs "

        />
    );
}


NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};


function EditFundraising() {

    const classes = useStyles();
    const [values, setValues] = React.useState({
        // textmask: '(1  )    -    ',
        numberformat: '',
    });


    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    //set date_value
    // const [date_value, setDate_Value] = React.useState(null);

    //set time_value
    // const [time_value, setTime_Value] = React.useState(null);
    const defaultProps = {
        bgcolor: 'background.paper',
        m: 1,
        border: 1,
        // style: { width: '5rem', height: '5rem' },
    };

    // const classes_time = use_timeStyles();

    return (

        <React.Fragment>
            <Typography variant="h4" align="center" color="initial">Edit your fundrasing programme</Typography>
            <Divider />
            <Box component="br" />
            
            <Link to="/ustd/funddashboard/">
                <Button variant="contained" className={classes.filterbutton} startIcon={<ArrowBackIosIcon />}>
                    Back to Fundrasing dashboard
                </Button>
            </Link>
           

            
            <Box component="br" />

            <Box borderColor="primary.main" {...defaultProps}>
                <Box m={1}>
                    <form className={classes.root}>
                        <Card>
                            <Box component="div" m={1}>
                                <Grid m={1} container justify="space-between" spacing={3}>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            id="outlined-textarea"
                                            label="Fundraising Name"
                                            placeholder="Enter meaningful topic"
                                            multiline
                                            variant="outlined"
                                            fullWidth
                                        // dataType="date"
                                        />
                                    </Grid>


                                    <Grid item xs={12} sm={9}>
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Fundraising Description"
                                            multiline
                                            rows={3}
                                            placeholder="Why/Who organise etc.."
                                            variant="outlined"
                                            fullWidth

                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={3}>
                                        {/* <label for="input_image"><h6 style="color:black;">Upload an Image</h6></label> */}
                                        <Typography variant="subtitle1" color="primary">Upload an image
                                            <input id="input_image" required type="file" name="myImage" accept="image/png, image/gif, image/jpeg" />
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={3}>

                                        <TextField
                                            label="Goal Amount in Rs."
                                            value={values.numberformat}
                                            onChange={handleChange}
                                            name="numberformat"
                                            id="formatted-numberformat-input"
                                            InputProps={{
                                                inputComponent: NumberFormatCustom,
                                            }}
                                            multiline
                                            variant="outlined"
                                            placeholder="Rs 10000"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>

                                        <TextField
                                            label="Starting Amount in Rs."
                                            disabled
                                            value={values.numberformat}
                                            onChange={handleChange}
                                            name="numberformat"
                                            id="formatted-numberformat-input"
                                            InputProps={{
                                                inputComponent: NumberFormatCustom,
                                            }}
                                            multiline
                                            variant="outlined"
                                            placeholder="Rs 100"
                                            fullWidth

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>

                                        <TextField
                                            id="date"
                                            label="Expire Date"
                                            type="date"
                                            defaultValue="weqwe"
                                            // className={classes_time.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                            fullWidth
                                        />

                                    </Grid>

                                    <Grid item xs={12} sm={3}>
                                        <TextField
                                            id="time"
                                            label="Expire Time"
                                            type="time"

                                            // className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12}>
                                        <Box display="flex" justifyContent="flex-end">

                                            <Box>
                                                <Button className={classes.filterbutton} variant="contained" color="primary" endIcon={<CheckCircleIcon>send</CheckCircleIcon>}>
                                                    Update Fundraising
                                                </Button>
                                            </Box>


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


export default EditFundraising;
