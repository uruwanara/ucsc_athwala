// import React from 'react';
// import Event from '../../image/Vaani-Vizha.jpg';
// import UnionStudentSidebar from '../UnionSidebar/UnionStudentSidebar';
// import Nav from '../Navbar/Navbar';
// import Pirith from '../../image/Pirith.jpg';
// import './ViewStuFundraising.css';
// import { Link, useHistory } from "react-router-dom";



// function StuFundraising() {
//     const history = useHistory();
//     return (
//         <div>
//             <div><Nav /></div>
//             <div style={{ display: 'flex' }}>
//                 <UnionStudentSidebar />



//                 <div className="container container-custom">

//                     <h2 style={{ fontFamily: 'Poppins' }} className="text-center">View Availble Fundraising events</h2>
//                     <div class="card border-secondary mt-4">
//                         <h5 style={{ fontFamily: 'Poppins' }} class="card-header text-center">Ongoing Fundraising</h5>

//                         <div class="row no-gutters">

//                             <div class="col-md-4">
//                                 <img src={Pirith} class="card-img m-2" alt="..." />
//                             </div>

//                             <div class="col-md-8">
//                                 <div class="card-body m-3">
//                                     <h5 class="card-title">Fundraising for the Annual Pirith ceremony</h5>
//                                     <p class="card-text">The annual pirith ceremony which is conducted by second year students will be held on Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque modi rem culpa? Iusto dignissimos dicta molestias neque, necessitatibus et repellat perspiciatis? Est numquam labore sequi similique expedita harum asperiores.</p>
//                                     {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
//                                 </div>
//                             </div>
//                             <p class="card-text ml-2"><small class="text-muted">Last updated 3 mins ago</small></p>
//                         </div>

//                         <ul class="list-group list-group-flush" >
//                             <li class="list-group-item">
//                                 <label><h6 style={{ fontFamily: 'Poppins' }}>Completed amount Progress sofar</h6></label>
//                                 <progress className="w-100 bg-success" id="file" max="100" value="20" ></progress>
//                                 <h6 style={{ fontFamily: 'Poppins' }}><b>Current amount: Rs 60,000</b></h6>
//                             </li>

//                             <li class="list-group-item">
//                                 <div className="row">
//                                     <div className="col-md-6"><h6 style={{ fontFamily: 'Poppins' }}>This Fundraising was placed on <b>23/07/2021 at 10.00 a.m</b></h6></div>
//                                     <div className="col-md-6"><h6 style={{ fontFamily: 'Poppins' }}>This Fundraising will be expired on <b>28/09/2021 at 10.00 a.m</b></h6></div>
//                                 </div>
//                             </li>

//                             <li class="list-group-item">
//                                 <div className="row">
//                                     <div className="col-md-4"><h6 style={{ fontFamily: 'Poppins' }}>Started base amount: Rs 3,000</h6></div>
//                                     <div className="col-md-4"><h6 style={{ fontFamily: 'Poppins' }}>Final Expected amount: Rs 300,000</h6></div>
//                                     <div className="col-md-4"><h6 style={{ fontFamily: 'Poppins' }}>To be recieved amount: Rs 240,000</h6></div>
//                                     {/* d-flex flex-row-reverse will put the button at the edn of the div tag */}
//                                     <div className="mt-3 col-md-12 d-flex flex-row-reverse">
//                                         {/* <button type="button" class="btn btn-md">Edit Fundraising</button> */}
//                                         {/* <div className="ml-1">
//                                             <Link to="/editfundraising">
//                                             <button input style={{ fontColor: 'red' }} type="button" className="btn btn1">Edit Fundraising</button>
//                                             </Link>
//                                         </div>
//                                         <div className="ml-1">
//                                             <button input type="button" className="btn btn1">End by force</button>
//                                         </div> */}
//                                         <div className="ml-1">
//                                             <button input type="button" className="btn btn1">Donate fundraising</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </li>

//                         </ul>


//                     </div>






//                     <div class="card border-secondary mt-4">
//                         <h5 style={{ fontFamily: 'Poppins' }} class="card-header text-center">Ongoing Fundraising</h5>

//                         <div class="row no-gutters">

//                             <div class="col-md-4">
//                                 <img src={Event} class="card-img m-2" alt="..." />
//                             </div>

//                             <div class="col-md-8">
//                                 <div class="card-body m-3">
//                                     <h5 class="card-title">Fundraising for the Vani Vizha Tamil Festival</h5>
//                                     <p class="card-text">The annual Vani Vizha tamil festival which is conducted by first year students will be held on Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque modi rem culpa? Iusto dignissimos dicta molestias neque, necessitatibus et repellat perspiciatis? Est numquam labore sequi similique expedita harum asperiores.</p>
//                                     {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
//                                 </div>
//                             </div>
//                             <p class="card-text ml-2"><small class="text-muted">Last updated 5 mins ago</small></p>
//                         </div>

//                         <ul class="list-group list-group-flush" >
//                             <li class="list-group-item">
//                                 <label><h6 style={{ fontFamily: 'Poppins' }}>Completed amount Progress sofar</h6></label>
//                                 <progress className="w-100 bg-success" id="file" max="100" value="50" ></progress>
//                                 <h6 style={{ fontFamily: 'Poppins' }}><b>Current amount: Rs 100,000</b></h6>
//                             </li>

//                             <li class="list-group-item">
//                                 <div className="row">
//                                     <div className="col-md-6"><h6 style={{ fontFamily: 'Poppins' }}>This Fundraising was placed on <b>23/07/2021 at 10.00 a.m</b></h6></div>
//                                     <div className="col-md-6"><h6 style={{ fontFamily: 'Poppins' }}>This Fundraising will be expired on <b>28/09/2021 at 10.00 a.m</b></h6></div>
//                                 </div>
//                             </li>

//                             <li class="list-group-item">
//                                 <div className="row">
//                                     <div className="col-md-4"><h6 style={{ fontFamily: 'Poppins' }}>Started base amount: Rs 5,000</h6></div>
//                                     <div className="col-md-4"><h6 style={{ fontFamily: 'Poppins' }}>Final Expected amount: Rs 200,000</h6></div>
//                                     <div className="col-md-4"><h6 style={{ fontFamily: 'Poppins' }}>To be recieved amount: Rs 100,000</h6></div>
//                                     {/* d-flex flex-row-reverse will put the button at the edn of the div tag */}
//                                     <div className="mt-3 col-md-12 d-flex flex-row-reverse">
//                                         {/* <button type="button" class="btn btn-md">Edit Fundraising</button> */}
//                                         {/* <div className="ml-1">
//                                             <Link to="/editfundraising">
//                                             <button input type="button" className="btn btn1">Edit Fundrasing</button>
//                                             </Link>
//                                         </div>
//                                         <div className="ml-1"><button input type="button" className="btn btn1">End by force</button>
//                                         </div> */}
//                                         <div className="ml-1"><button input type="button" className="btn btn1">Donate fundraising</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </li>

//                         </ul>


//                     </div>




//                 </div>
//             </div>
//         </div>
//     );
// }

// export default StuFundraising;

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
    controls: {
        display: "flex",
        alignItems: "center",
        // paddingLeft: theme.spacing(1),
        // paddingBottom: theme.spacing(1)
    },

}
));

function StuViewFundraising() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <Typography variant="h2" color="initial" align="center">
                Fundraising Viewer
            </Typography>

            <Card className={classes.root} mt={4}>

                <CardMedia
                    className={classes.cover}
                    // image={Vaniwilla}
                    image={Vaniwilla}
                    title="Live from space album cover"
                    alt="dadd"
                    style={{ width: '25%' }}
                />
                <Box className={classes.details} style={{ width: '75%' }}>
                    <CardContent className={classes.content}>
                        <Box>
                            <Typography variant="h4" color="primary" align="center">
                                Vani Vizha Tamil Festival 2021
                            </Typography>
                            <Typography variant="subtitle1" color="initial" justify="center" align="left" style={{ margin: theme.spacing(1) }}>
                                First year students of UCSC organize Vani Viza tamil festival every year.In this year they are planing to held it on                             23rd of August, 2021. This event will be a good opperunity to create unity among the badges.
                            </Typography>

                        </Box>


                        <Box className={classes.controls} style={{ margin: theme.spacing(1) }}>
                            <Typography variant="h6" color="initial" style={{ width: '33.3333%' }} >Raised : Rs. 100,000</Typography>
                            <Typography variant="h6" color="initial" style={{ width: '33.3333%' }} >Goal : Rs. 200,000</Typography>
                            <Typography variant="h6" color="initial" style={{ width: '33.3333%' }} >start from : Rs. 100 </Typography>
                        </Box >
                        <Box style={{ margin: theme.spacing(1) }}>
                            <Typography variant="subtitle1">50% completed</Typography>
                            <LinearProgress variant="determinate" value={50} />
                        </Box>
                        <Box className={classes.controls} style={{ margin: theme.spacing(1) }}>
                            <Typography variant="h6" color="initial" style={{ width: '75%' }} >End on 2021/10/02 3.00 p.m</Typography>

                            <Button variant="contained" color="primary" style={{ width: '25%' }, { margin: theme.spacing(1) }}>
                                Donate
                            </Button>
                            {/* <Button variant="contained" color="secondary" style={{ width: '16.6666%' }, { margin: theme.spacing(1) }}>
                                End
                            </Button>
                            <Button variant="contained" color="warning.main" style={{ width: '16.6666%' }}>
                                Edit
                            </Button> */}

                        </Box>


                    </CardContent>
                </Box>

            </Card>

            <Box component="br" />
            <Box component="br" />

            <Card className={classes.root} mt={4}>

                <CardMedia
                    className={classes.cover}
                    // image={Vaniwilla}
                    image={Pirith}
                    title="Live from space album cover"
                    alt="dadd"
                    style={{ width: '25%' }}
                />
                <Box className={classes.details} style={{ width: '75%' }}>
                    <CardContent className={classes.content}>
                        <Box>
                            <Typography variant="h4" color="primary" align="center">
                                Annual Pirith Ceremony
                            </Typography>
                            <Typography variant="subtitle1" color="initial" justify="center" align="left" style={{ margin: theme.spacing(1) }}>
                                Second year students of UCSC Pirith Ceremony every year. In this year they are planing to held it on                             23rd of August, 2021. This event will be a good opperunity to create unity among the badges.
                            </Typography>

                        </Box>


                        <Box className={classes.controls} style={{ margin: theme.spacing(1) }}>
                            <Typography variant="h6" color="initial" style={{ width: '33.3333%' }} >Raised : Rs. 200,000</Typography>
                            <Typography variant="h6" color="initial" style={{ width: '33.3333%' }} >Goal : Rs. 400,000</Typography>
                            <Typography variant="h6" color="initial" style={{ width: '33.3333%' }} >start from : Rs. 500 </Typography>
                        </Box >
                        <Box style={{ margin: theme.spacing(1) }}>
                            <Typography variant="subtitle1">50% completed</Typography>
                            <LinearProgress variant="determinate" value={50} />
                        </Box>
                        <Box className={classes.controls} style={{ margin: theme.spacing(1) }}>
                            <Typography variant="h6" color="initial" style={{ width: '75%' }} >End on 2021/10/02 3.00 p.m</Typography>

                            <Button variant="contained" color="primary" style={{ width: '25%' }, { margin: theme.spacing(1) }}>
                                Donate
                            </Button>
                            {/* <Button variant="contained" color="secondary" style={{ width: '16.6666%' }, { margin: theme.spacing(1) }}>
                                End
                            </Button>
                            <Button variant="contained" style={{ width: '16.6666%' }}>
                                Edit
                            </Button> */}

                        </Box>


                    </CardContent>
                </Box>

            </Card>

        </React.Fragment>
    );
}

export default StuViewFundraising;