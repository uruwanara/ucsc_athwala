import React , {useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
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
import GavelIcon from '@material-ui/icons/Gavel';
import {RequestButton,MyCauseButton,MyDonationButton,PastButton} from './Donation_button';
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

    const userData = JSON.parse(localStorage.getItem("userData"));

    useEffect(() =>{
        fetchData();
      },[]);
    
      const fetchData = () => { 
        axios.get("http://localhost:5000/api/auction/mybid", {
        params: {id:userData.id},
        }).then((response) => {
            console.log(response.data);
            SetMap(response.data);
            
        })
      }; 

    function Tablerow(props){
      const viewMore=(id)=>{
        if(userData.userType === "STUDENT"){
        history.push(`/std/pstbid/${id}`);
        }
        if(userData.userType === "UNIONST"){
          history.push(`/ustd/pstbid/${id}`);
        }
      }
                
                return(
                    <TableRow key={props.id}>
                            <TableCell component="th" scope="row"><GavelIcon color="secondary"/></TableCell> 
                        <TableCell component="th" scope="row">{props.title}</TableCell>
                        <TableCell align="center">{props.company}</TableCell>
                        <TableCell align="center">{props.postAt}</TableCell>
                        <TableCell align="center" >
                            {/* <Link to ={viewlink}> */}
                            <Button size="small" 
            className={classes.donateButton} 
            // startIcon={<GavelIcon />}
            color='secondary'
            onClick={()=>viewMore(props.id)}
            >
              View More
            </Button>
                            {/* </Link> */}
                        {/* </TableCell>
                         <TableCell align="center">
                            <Link to ={editlink}>
                                <EditIcon fontSize="medium"></EditIcon>
                            </Link>
                        </TableCell>
                        <TableCell align="center">
                            <Link to ={deletelink}>
                                <DeleteOutlineIcon fontSize="medium"></DeleteOutlineIcon>
                            </Link> */}
                        </TableCell>
                    </TableRow> 
                    
                ); 

    } 
    
    function Tablecloumn(){
            return (
                <TableRow>
                        <TableCell></TableCell>
                        <TableCell className={classes.TableHead}>Title</TableCell>
                        <TableCell className={classes.TableHead} align="center">Current Highest Bid</TableCell>
                        <TableCell className={classes.TableHead} align="center">your Bid</TableCell>
                        <TableCell className={classes.TableHead} align="center">View</TableCell>
                        {/* <TableCell className={classes.TableHead} align="center">Update</TableCell>
                        <TableCell className={classes.TableHead} align="center">Delete</TableCell> */}
                </TableRow>

            );


    }

    return(
        <div>
            <div><Typography variant="h5" className={classes.title}>My Bid History</Typography></div>

            <div style={{float:"left"}}>
              <Grid container spacing={4}>
              <RequestButton  />
                <MyCauseButton />
                 <MyDonationButton />
                 {<PastButton />}
              </Grid>
              
              </div>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="a dense table">
                    <TableHead >
                        <Tablecloumn />
                    </TableHead>
                    <TableBody>
                    {mapset.map((row) => (
                        <Tablerow id={row.auction_id} title={row.title} company={row.bid1} postAt = {row.biduser}/>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        
        

        </div>
    );
}