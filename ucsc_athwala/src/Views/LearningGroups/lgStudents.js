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
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import AutorenewIcon from '@mui/icons-material/Autorenew';

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
        backgroundColor: "#3FBF3F",
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
        let  nameq = props.fname+" "+props.lname;
        const changeStatus=()=>{
            const det={
                "lgId":prope.id,
                "uId":props.id
            }
            console.log(det)
            axios.post("http://localhost:5000/api/lgs/rmuser",det,{
            }).then((response) => {
                console.log("----------- Dvdvdvdv");
                enqueueSnackbar(nameq+' : Removed From Chat', {
                    variant: 'error',anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right',
                    },
                })
                fetchData();

                console.log("----------- Deactivate");
                console.log(response.data)
                // fetchData();
            })
        }
               return(
            <TableRow key={props.id}>
                <IconButton aria-label="delete"  onClick={changeStatus} value={props.id} >
                    < PersonRemoveIcon
                        textDecoration="none"
                        color="primary"
                        // value={props.id}
                    />
                </IconButton>
                <TableCell align="center">{nameq}</TableCell>
                <TableCell align="center">{props.email}</TableCell>

            </TableRow>

        );

    }

    function Tablecloumn(){



        return (
            <TableRow>
                <TableCell></TableCell>
                <TableCell className={classes.TableHead} align="center">Full Name</TableCell>
                <TableCell className={classes.TableHead} align="center">Email</TableCell>

            </TableRow>

        );
    }

    return(
        <div>
           <Grid container spacing={0} className={classes.topic}>
                <Grid item md={4}><Typography variant="h6" className={classes.title}>Current Users</Typography>
                </Grid>
               <Button
                   type="submit"
                   size="large"
                   className={classes.filterbutton}
                   startIcon={<AutorenewIcon sx={{ fontSize: 40 }}/>}
                   onClick={fetchData}

               >Refresh</Button>

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