import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import WorkIcon from '@material-ui/icons/Work';
import {Link} from "react-router-dom";
import PageviewIcon from '@material-ui/icons/Pageview';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import {useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import PersonIcon from '@mui/icons-material/Person';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSnackbar } from 'notistack';
import { useConfirm } from "material-ui-confirm";


const useStyles = makeStyles({
    title:{
        color:"#546e7a",
        marginTop:5,
        marginBottom:20,
    },
    table: {
        minWidth: 650,
    },
    TableHead: {
        fontWeight: 'bold',
        fontFamily:"Poppins, sans-serif",
    },
    button:{
        textTransform: 'initial',
        borderRadius: 15,

    },
    filterbutton: {
        backgroundColor: "#757de8",
        color: "#FFFFFF",
        textTransform: "none",
        paddingTop:5,
        paddingLeft:10,
        paddingRight:10,
        border:"none",
        borderRadius:10,
        marginBottom:20,
        "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#757de8",
            border: "1px solid #757de8",
        },
    },
});


export default function MyjobOpp(){
    const classes = useStyles();
    const history = useHistory();
    const [mapset , SetMap] = useState([]);

    const [filter, setFilter] = React.useState('all');
    const [open, setOpen] = React.useState(false);
    const [search,Setsearch] = useState("");


    const userData = JSON.parse(localStorage.getItem("userData"));
    const {enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);

    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    useEffect(() => {
        fetchData();
    },[]);

    useEffect(() => {
        filterposts();
    }, [filter]);

    const filterposts = () => {
        const datas={
            "status":filter,
            "utype":"COUNSELLOR"
        };
        axios.post("http://localhost:5000/api/ars/userfilter",datas,{
            // params: {
            //     status:filter,
            //     utype:"UNIONST"},
        }).then((responses) => {
            console.log("----------- Filter Data");
            console.log(responses.data);
            console.log("----------- Filter Map");
            SetMap(responses.data);
            console.log("----------- Filter");
            console.log(filter);
        })
    }

    const searchSubmit = (searchtxt) => {
        Setsearch(searchtxt);
        console.log(search);

        const searchtext={
            "search": search,
            "utype":"COUNSELLOR"
        }
        axios.post("http://localhost:5000/api/ars/usersearch",searchtext,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            console.log("-----------Search Data");
            console.log(response.data);
            console.log("----------- Search Map");
            SetMap(response.data);
        });
    };

    const searchbar = () => {
        return (

            <Grid container spacing={1} >
                <Grid item md={4}>

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        className={classes.textfilter}
                        value={search}
                        placeholder="Search.."
                        onChange={e => Setsearch(e.target.value)}
                    />

                </Grid>
                <Grid item md={2}>

                    <Button
                        type="submit"
                        size="large"
                        className={classes.filterbutton}
                        startIcon={<PageviewIcon sx={{ fontSize: 40 }}/>}
                        onClick={() => {
                            searchSubmit(search);
                        }}
                    >
                        search
                    </Button>

                </Grid>
            </Grid>


        );
    }



    const fetchData = () => {
        axios.post("http://localhost:5000/api/ars/viewcoun", {
        }).then((response) => {
            console.log("----------- all Data");
            console.log(response.data);
            console.log("----------- all Data Map");
            SetMap(response.data);

        })
    };
    const confirm = useConfirm();
    function Tablerow(props){
        let  name = props.fname+" "+props.lname;
        let act="";
        if(props.status=="active"){ act="Active"}else if(props.status=="notactive"){act='Pending'}else{act="Deactive"}

        const changeStatus=()=>{

            if(props.status=="active"){
                axios.post("http://localhost:5000/api/ars/deactive/"+ props.id, {
                }).then((response) => {
                    enqueueSnackbar(name+' : Acount Deactivated', {
                        variant: 'error',anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right',
                        },
                    });
                    console.log("----------- Deactivate");
                    console.log(response.data)
                    fetchData();
                })
            }else {
                axios.post("http://localhost:5000/api/ars/active/" + props.id, {}).then((response) => {
                    enqueueSnackbar(name + ' : Acount Activated', {
                        variant: 'success', anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right',
                        },
                    });
                    console.log("----------- Activte");
                    console.log(response.data);
                    fetchData();
                })
            }
        }



        let ver=""
        if(props.isActive=="1"){ ver="Verified"}else{ver="Unverified"}
        return(
            <TableRow key={props.id}>
                <TableCell component="th" scope="row"><PersonIcon color="secondary"/></TableCell>
                <TableCell component="th" scope="row">{props.id}</TableCell>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">{props.email}</TableCell>
                <TableCell align="center">{props.contact}</TableCell>
                <TableCell align="center">{ver}</TableCell>
                <TableCell align="center">{act}</TableCell>
                <TableCell align="center" >
                    <IconButton aria-label="delete"  onClick={changeStatus} value={props.id} >
                        <FlipCameraAndroidIcon
                            textDecoration="none"
                            color="secondary"
                            // value={props.id}
                        />
                    </IconButton>

                </TableCell>
                {/*<TableCell align="center">*/}
                {/*    <Link to ={editlink}>*/}
                {/*        <EditIcon fontSize="medium"></EditIcon>*/}
                {/*    </Link>*/}
                {/*</TableCell>*/}
                {/*<TableCell align="center">*/}
                {/*    <Link to ={deletelink}>*/}
                {/*        <DeleteOutlineIcon fontSize="medium"></DeleteOutlineIcon>*/}
                {/*    </Link>*/}
                {/*</TableCell>*/}
            </TableRow>

        );

    }

    function Tablecloumn(){
        return (
            <TableRow>
                <TableCell></TableCell>
                <TableCell className={classes.TableHead}>User ID</TableCell>
                <TableCell className={classes.TableHead} align="center">Full Name</TableCell>
                <TableCell className={classes.TableHead} align="center">Email</TableCell>
                <TableCell className={classes.TableHead} align="center">Contact</TableCell>
                <TableCell className={classes.TableHead} align="center">Verified</TableCell>
                <TableCell className={classes.TableHead} align="center">Status</TableCell>
                <TableCell className={classes.TableHead} align="center">Change Status</TableCell>
            </TableRow>

        );
    }

    return(
        <div>
           <Grid container spacing={0} className={classes.topic}>
                <Grid item md={4}><Typography variant="h5" className={classes.title}>Manage Counsellors</Typography>
                </Grid>
            <Grid item md={6}>{searchbar()}</Grid>
            <Grid item md={2}>
                <form autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={filter}
                            onChange={handleChange}
                        >
                            <MenuItem value='all'>All</MenuItem>
                            <MenuItem value='active'>Actice</MenuItem>
                            <MenuItem value='deactive'>Deactive</MenuItem>
                            <MenuItem value='notactive'>Pending</MenuItem>

                        </Select>
                    </FormControl>
                </form>
            </Grid>
        </Grid>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="a dense table">
                    <TableHead >
                        <Tablecloumn />
                    </TableHead>
                    <TableBody>
                        {mapset.map((row) => (
                            <Tablerow id={row.id} fname={row.fname} lname={row.lname} contact={row.contactnumber} email={row.email} isActive={row.isActive} status={row.status} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



        </div>
    );
}