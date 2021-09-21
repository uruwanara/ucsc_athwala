import React ,{useState,useEffect} from 'react';
import './Donation.css';
import { makeStyles } from '@material-ui/core/styles';
import Note from '../../image/note.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import  Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Indigo from '@material-ui/core/colors/indigo';
import Green from '@material-ui/core/colors/green';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      }, flex1: {
        flexGrow: 1,
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      title:{
        color:"#546e7a",
        marginTop:30,
        marginBottom:30,
        fontFamily:"Poppins, sans-serif",
      },

      card:{
        backgroundColor:"white",
        border:"none",
        boxShadow:"none"
      },

      labelname: {
          marginLeft:40,
          marginBottom:20,
          color:"000000",
          fontFamily:"Poppins, sans-serif",
          width:"150px"
      },

      labelvalue:{
        marginLeft:100,
        marginBottom:20,
        color:"000000",
        fontFamily:"Poppins, sans-serif",
        width:"200px"
      },

      contactbtn:{
          textTransform:"none",
          fontFamily:"Poppins, sans-serif",
      },

      receive:{
          marginTop:'40px'
      }
  
  }));

export function Description(props){
    const classes = useStyles();

    return(
                        <Grid item xs={6}>
                        <Card className={classes.card}>
                                <CardContent >
                                    <Typography variant="h3" className={classes.title}>
                                        {props.title} 
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.title}>
                                        {props.description}
                                    </Typography>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
    )
}

export function NoteDoneeDetails(props){
    const classes = useStyles();

    const title = () => {
        if(props.requestStudentid == props.userId){
            return(
                <Typography variant="h5" className={classes.title}>Your Donation request details</Typography>
            );
        }
        else{
            return(
                <Typography variant="h5" className={classes.title}>Donation request details</Typography>
            );
        }
    };

    const receivebutton = () => {

    const handleSubmit = (event) => {
        props.handleSubmit(event);

    }
    const handleClickOpen = () => {
        props.handleClickOpen();
      
    };
    const handleClose = () => {
        props.handleClose();
      
    };

    if(props.status === 'Pending'){
        return(
            <div>
            <Typography variant="subtitle2" className={classes.title}>Do you receive your donation ? Please mark your donation request as received</Typography>
            <Button
                variant="contained"
                color={props.btncolor}
                component="label"
                className={classes.contactbtn}
                onClick={handleClickOpen}
                >
                {props.buttontxt}
            </Button>

            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">Please confirm you receive the donation.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={handleSubmit} color="primary" autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
             </div>
        );
    }
    else if(props.status === 'Received'){
            return(
                <div>
                    <Button
                        variant="contained"
                        color="secondary"
                        component="label"
                        className={classes.contactbtn}
                        >
                        Received
                    </Button>
                </div>
            )
    }
    else if(props.status === 'Not Received'){
        if(props.userType === "UNIONST" || props.userType === "ADMIN" ){
            return(
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        component="label"
                        className={classes.contactbtn}
                        onClick={handleClickOpen}
                        >
                        Deactive
                    </Button>

                    <Dialog
                        open={props.open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">Please confirm you want to deactivate this donation request</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                No
                            </Button>
                            <Button onClick={handleSubmit} color="primary" autoFocus>
                                Confirm
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )
        }
        else{
            return(
                <></>
            );
        }
    }

    else{
        return(
            <></>
        ); 
    }
    }

    const studentdetails = () => {
        if(props.userType === "UNIONST" ){
            return(
                <>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Student first Name</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.fname}</Typography></div>                         
                </div>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Student Last Name</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.lname}</Typography></div>                         
                </div>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Email Address</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.email}</Typography></div>                         
                </div>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Contact Number</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.contact}</Typography></div>                         
                </div>
                </>
            )
        }
        else{
            <></>
        }
    }

   
    return(
        <Grid item xs={6}>
            <Card className={classes.card}>
                <CardContent>
                    {title()}
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Study year</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.year} year</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Subject</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.subject}</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Specific lessons</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.lesson}</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Before around</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.date}</Typography></div>  
                    </div> 
                    {studentdetails()}
                    <div className={classes.receive}>
                    {receivebutton()}
                    </div>
                                    
                </CardContent> 
                 
            </Card>
        </Grid>
    )
}

export function ClothDoneeDetails(props){
    const classes = useStyles();

    const title = () => {
        if(props.requestStudentid == props.userId){
            return(
                <Typography variant="h5" className={classes.title}>Your Donation request details</Typography>
            );
        }
        else{
            return(
                <Typography variant="h5" className={classes.title}>Donation request details</Typography>
            );
        }
    };

    const receivebutton = () => {

        const handleSubmit = (event) => {
            props.handleSubmit(event);
    
        }
        const handleClickOpen = () => {
            props.handleClickOpen();
          
        };
        const handleClose = () => {
            props.handleClose();
          
        };
    
        if(props.status === 'Pending'){
            return(
                <div>
                <Typography variant="subtitle2" className={classes.title}>Do you receive your donation ? Please mark your donation request as received</Typography>
                <Button
                    variant="contained"
                    color={props.btncolor}
                    component="label"
                    className={classes.contactbtn}
                    onClick={handleClickOpen}
                    >
                    {props.buttontxt}
                </Button>
    
                <Dialog
                    open={props.open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">Please confirm you receive the donation.</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            No
                        </Button>
                        <Button onClick={handleSubmit} color="primary" autoFocus>
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
                 </div>
            );
        }
        else if(props.status === 'Received'){
                return(
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            component="label"
                            className={classes.contactbtn}
                            >
                            Received
                        </Button>
                    </div>
                )
        }
        else if(props.status === 'Not Received'){
            if(props.userType === "UNIONST" || props.userType === "ADMIN" ){
                return(
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            component="label"
                            className={classes.contactbtn}
                            onClick={handleClickOpen}
                            >
                            Deactive
                        </Button>
    
                        <Dialog
                            open={props.open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">Please confirm you want to deactivate this donation request</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    No
                                </Button>
                                <Button onClick={handleSubmit} color="primary" autoFocus>
                                    Confirm
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                )
            }
            else{
                return(
                    <></>
                );
            }
        }
        else {
            return(
                <></>
            )
        }
    
    }    

    const studentdetails = () => {
        if(props.userType === "UNIONST" ){
            return(
                <>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Student first Name</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.fname}</Typography></div>                         
                </div>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Student Last Name</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.lname}</Typography></div>                         
                </div>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Email Address</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.email}</Typography></div>                         
                </div>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Contact Number</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.contact}</Typography></div>                         
                </div>
                </>
            )
        }
        else{
            <></>
        }
    }
    return(
        <Grid item xs={6}>
            <Card className={classes.card}>
                <CardContent>
                    {title()}
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Cloth type </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.clothType}</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Gender </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.gender}</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Size</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.size}</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Before around</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.date}</Typography></div>  
                    </div>
                    {studentdetails()}
                    <div className={classes.receive}>
                    {receivebutton()}
                    </div>               
                                    
                </CardContent>    
            </Card>
        </Grid>
    )
}

export function DeviceDoneeDetails(props){
    const classes = useStyles();

    const title = () => {
        if(props.requestStudentid == props.userId){
            return(
                <Typography variant="h5" className={classes.title}>Your Donation request details</Typography>
            );
        }
        else{
            return(
                <Typography variant="h5" className={classes.title}>Donation request details</Typography>
            );
        }
    };

    const receivebutton = () => {

        const handleSubmit = (event) => {
            props.handleSubmit(event);
    
        }
        const handleClickOpen = () => {
            props.handleClickOpen();
          
        };
        const handleClose = () => {
            props.handleClose();
          
        };
    
        if(props.status === 'Pending'){
            return(
                <div>
                <Typography variant="subtitle2" className={classes.title}>Do you receive your donation ? Please mark your donation request as received</Typography>
                <Button
                    variant="contained"
                    color={props.btncolor}
                    component="label"
                    className={classes.contactbtn}
                    onClick={handleClickOpen}
                    >
                    {props.buttontxt}
                </Button>
    
                <Dialog
                    open={props.open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">Please confirm you receive the donation.</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            No
                        </Button>
                        <Button onClick={handleSubmit} color="primary" autoFocus>
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
                 </div>
            );
        }
        else if(props.status === 'Received'){
                return(
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            component="label"
                            className={classes.contactbtn}
                            >
                            Received
                        </Button>
                    </div>
                )
        }
        else if(props.status === 'Not Received'){
            if(props.userType === "UNIONST" || props.userType === "ADMIN" ){
                return(
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            component="label"
                            className={classes.contactbtn}
                            onClick={handleClickOpen}
                            >
                            Deactive
                        </Button>
    
                        <Dialog
                            open={props.open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">Please confirm you want to deactivate this donation request</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    No
                                </Button>
                                <Button onClick={handleSubmit} color="primary" autoFocus>
                                    Confirm
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                )
            }
            else{
                return(
                    <></>
                );
            }
        }
        else {
            return(
                <></>
            )
        }
    
    } 
    
    const studentdetails = () => {
        if(props.userType === "UNIONST" ){
            return(
                <>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Student first Name</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.fname}</Typography></div>                         
                </div>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Student Last Name</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.lname}</Typography></div>                         
                </div>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Email Address</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.email}</Typography></div>                         
                </div>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Contact Number</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.contact}</Typography></div>                         
                </div>
                </>
            )
        }
        else{
            <></>
        }
    }

    return(
        <Grid item xs={6}>
            <Card className={classes.card}>
                <CardContent>
                    {title()}
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Model of device </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.model}</Typography></div>  
                        </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Brand name </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.brand}</Typography> </div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Before around</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.date}</Typography></div>  
                    </div>
                    {studentdetails()}
                    <div className={classes.receive}>
                    {receivebutton()}
                    </div>                
                                    
                </CardContent>    
            </Card>
        </Grid>
    )
}

export function MoneyDoneeDetails(props){
    const classes = useStyles();

    const title = () => {
        if(props.requestStudentid == props.userId){
            return(
                <Typography variant="h5" className={classes.title}>Your Donation request details</Typography>
            );
        }
        else{
            return(
                <Typography variant="h5" className={classes.title}>Donation request details</Typography>
            );
        }
    };

    const receivebutton = () => {

        const handleSubmit = (event) => {
            props.handleSubmit(event);
    
        }
        const handleClickOpen = () => {
            props.handleClickOpen();
          
        };
        const handleClose = () => {
            props.handleClose();
          
        };
    
        if(props.status === 'Pending'){
            return(
                <div>
                <Typography variant="subtitle2" className={classes.title}>Do you receive your donation ? Please mark your donation request as received</Typography>
                <Button
                    variant="contained"
                    color={props.btncolor}
                    component="label"
                    className={classes.contactbtn}
                    onClick={handleClickOpen}
                    >
                    {props.buttontxt}
                </Button>
    
                <Dialog
                    open={props.open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">Please confirm you receive the donation.</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            No
                        </Button>
                        <Button onClick={handleSubmit} color="primary" autoFocus>
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
                 </div>
            );
        }
        else if(props.status === 'Received'){
                return(
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            component="label"
                            className={classes.contactbtn}
                            >
                            Received
                        </Button>
                    </div>
                )
        }
        else if(props.status === 'Not Received'){
            if(props.userType === "UNIONST" || props.userType === "ADMIN" ){
                return(
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            component="label"
                            className={classes.contactbtn}
                            onClick={handleClickOpen}
                            >
                            Deactive
                        </Button>
    
                        <Dialog
                            open={props.open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">Please confirm you want to deactivate this donation request</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    No
                                </Button>
                                <Button onClick={handleSubmit} color="primary" autoFocus>
                                    Confirm
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                )
            }
            else{
                return(
                    <></>
                );
            }
        }
        else {
            return(
                <></>
            )
        }
    
    } 
    
    const studentdetails = () => {
        if(props.userType === "UNIONST" ){
            return(
                <>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Student first Name</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.fname}</Typography></div>                         
                </div>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Student Last Name</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.lname}</Typography></div>                         
                </div>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Email Address</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.email}</Typography></div>                         
                </div>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Contact Number</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.contact}</Typography></div>                         
                </div>
                </>
            )
        }
        else{
            <></>
        }
    }

    return(
        <Grid item xs={6}>
            <Card className={classes.card}>
                <CardContent>
                    {title()}
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Amount </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.amount}</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Special Note </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.note}</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Before around</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.date}</Typography></div>  
                    </div>
                    {studentdetails()}
                    <div className={classes.receive}>
                    {receivebutton()}
                    </div>                
                </CardContent>    
            </Card>
        </Grid>
    )
}

export function OtherDoneeDetails(props){
    const classes = useStyles();

    const title = () => {
        if(props.requestStudentid == props.userId){
            return(
                <Typography variant="h5" className={classes.title}>Your Donation request details</Typography>
            );
        }
        else{
            return(
                <Typography variant="h5" className={classes.title}>Donation request details</Typography>
            );
        }
    };

    const receivebutton = () => {

        const handleSubmit = (event) => {
            props.handleSubmit(event);
    
        }
        const handleClickOpen = () => {
            props.handleClickOpen();
          
        };
        const handleClose = () => {
            props.handleClose();
          
        };
    
        if(props.status === 'Pending'){
            return(
                <div>
                <Typography variant="subtitle2" className={classes.title}>Do you receive your donation ? Please mark your donation request as received</Typography>
                <Button
                    variant="contained"
                    color={props.btncolor}
                    component="label"
                    className={classes.contactbtn}
                    onClick={handleClickOpen}
                    >
                    {props.buttontxt}
                </Button>
    
                <Dialog
                    open={props.open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">Please confirm you receive the donation.</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            No
                        </Button>
                        <Button onClick={handleSubmit} color="primary" autoFocus>
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
                 </div>
            );
        }
        else if(props.status === 'Received'){
                return(
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            component="label"
                            className={classes.contactbtn}
                            >
                            Received
                        </Button>
                    </div>
                )
        }
        else if(props.status === 'Not Received'){
            if(props.userType === "UNIONST" || props.userType === "ADMIN" ){
                return(
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            component="label"
                            className={classes.contactbtn}
                            onClick={handleClickOpen}
                            >
                            Deactive
                        </Button>
    
                        <Dialog
                            open={props.open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">Please confirm you want to deactivate this donation request</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    No
                                </Button>
                                <Button onClick={handleSubmit} color="primary" autoFocus>
                                    Confirm
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                )
            }
            else{
                return(
                    <></>
                );
            }
        }
        else {
            return(
                <></>
            )
        }
    
    }

    const studentdetails = () => {
        if(props.userType === "UNIONST" ){
            return(
                <>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Student first Name</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.fname}</Typography></div>                         
                </div>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Student Last Name</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.lname}</Typography></div>                         
                </div>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Email Address</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.email}</Typography></div>                         
                </div>
                <div style={{display:"flex"}}>
                  <div><Typography variant="subtitle2" className={classes.labelname}>Contact Number</Typography></div>
                  <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.contact}</Typography></div>                         
                </div>
                </>
            )
        }
        else{
            <></>
        }
    }

    return(
        <Grid item xs={6}>
            <Card className={classes.card}>
                <CardContent>
                    {title()}
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Reason </Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.reason}</Typography></div>  
                    </div>
                    <div style={{display:"flex"}}>
                        <div><Typography variant="subtitle2" className={classes.labelname}>Before around</Typography></div>
                        <div><Typography variant="subtitle2" className={classes.labelvalue}>{props.date}</Typography></div>  
                    </div> 
                    {studentdetails()}
                    <div className={classes.receive}>
                    {receivebutton()}
                    </div>               
                </CardContent>    
            </Card>
        </Grid>
    )
}