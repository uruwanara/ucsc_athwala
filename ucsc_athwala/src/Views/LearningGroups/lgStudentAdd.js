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
import PersonAddIcon from "@mui/icons-material/PersonAdd";


const useStyles = makeStyles({
    title:{
        color:"#546e7a",
        marginTop:5,
        marginBottom:20,
    },
    topic:{
        color:"#546e7a",
        marginTop:25,
        marginBottom:5,
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
    filterbutton1: {
        backgroundColor: "#BF3F3F",
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


export default function MyjobOpp(prope){
    const classes = useStyles();

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
    const lgId = new URLSearchParams(search).get("id");

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    useEffect(() => {
        fetchData();
    },[]);


    const searchSubmit = (searchtxt) => {
        Setsearch(searchtxt);
        console.log(search);

        const searchtext={
            "search": search,
            "utype":"STUDENT"
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
                <Grid item md={6}>

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
        axios.post("http://localhost:5000/api/lgs/viewUsers/"+prope.id, {
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
        const changeStatus=()=>{
            const det={
                "lgId":prope.id,
                "uId":props.id
            }
            console.log(det)
                axios.post("http://localhost:5000/api/lgs/adduser",det,{
                }).then((response) => {
                    console.log("----------- Dvdvdvdv");
                    enqueueSnackbar(name+' : Added to chat', {
                        variant: 'Success',anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'right',
                        },
                    });
                    console.log("----------- Deactivate");
                    console.log(response.data)
                   // fetchData();
                })
          }



        let ver=""
        if(props.isActive=="1"){ ver="Verified"}else{ver="Unverified"}
        return(
            <TableRow key={props.id}>
                               <TableCell align="center">{name}</TableCell>
                <TableCell align="center">{props.email}</TableCell>
                <TableCell align="center" >
                    <IconButton aria-label="delete"  onClick={changeStatus} value={props.id} >
                        < PersonAddIcon
                            textDecoration="none"
                            color="success"
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


                <TableCell className={classes.TableHead} align="center">Full Name</TableCell>
                <TableCell className={classes.TableHead} align="center">Email</TableCell>

            </TableRow>

        );
    }

    return(
        <div>
           <Grid container spacing={0} className={classes.topic}>
                <Grid item md={4}><Typography variant="h6" className={classes.title}>Add Users</Typography>
                </Grid>
            <Grid item md={8}>{searchbar()}</Grid>

        </Grid>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="a dense table">
                    <TableHead >
                        <Tablecloumn />
                    </TableHead>
                    <TableBody>
                        {mapset.map((row) => (
                            <Tablerow id={row.id} fname={row.fname} lname={row.lname}  email={row.email} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



        </div>
    );
}