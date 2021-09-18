import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  Button from '@material-ui/core/Button';
import { useLocation } from 'react-router';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
      contactbtn:{
          textTransform:"none",
          fontFamily:"Poppins, sans-serif",
      }
  
  }));


export default function ContactForm(props){
    const classes = useStyles();
    const history = useHistory();
    const [phone,setPhone] = useState();
    const [address, setAddress] = useState();
    const [open, setOpen] = React.useState(false);

    const userData=JSON.parse(localStorage.getItem("userData"));

    console.log(props.donationID);
    console.log(props.userId);
    console.log(props.type);

    const handleSubmit = (event) => {
        setOpen(false);
        event.preventDefault(); 
        console.log(`
            phone: ${phone}
            address: ${address}
        `);
        setPhone('');
        setAddress('');

        const contact={
            "donationID": props.donationID,
            "userID":userData.id,
            "type":props.type,
            "tel":phone,
            "address":address
        }
        axios.post("http://localhost:5000/api/donations/contact",contact,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                if(response.data === "success"){
                    if(userData.userType==="STUDENT"){
                        history.push("/std/myDonation"); 
                    }
                    else if(userData.userType==="ALUMNI"){
                        history.push("/pstd/myDonation"); 
                    }
                    else if(userData.userType==="UNIONST"){
                        history.push("/ustd/myDonation"); 
                    }
                   
                }
        });
        
        

    }
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
            return(
                <form onSubmit={handleSubmit}>
                         <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <TextField
                                                autoComplete="phone"
                                                name="phone"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="phone"
                                                label="Phone Number"
                                                value={phone}
                                                autoFocus
                                                onChange={e => setPhone(e.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={12} >
                                            <TextField
                                                variant="outlined"
                                                fullWidth
                                                id="address"
                                                label="Address"
                                                name="address"
                                                value={address}
                                                autoComplete="address"
                                                onChange={e => setAddress(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                component="label"
                                                className={classes.contactbtn}
                                                onClick={handleClickOpen}
                                                >
                                                Contact
                                            </Button>

                                            <Dialog
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                                                <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    Are you sure, you want to contact to donate.
                                                </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                <Button onClick={handleClose} color="primary">
                                                    No
                                                </Button>
                                                <Button onClick={handleSubmit} color="primary" autoFocus>
                                                    Send Contact Details
                                                </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </Grid>
                                        

                                    </Grid>
                </form>
             )
}