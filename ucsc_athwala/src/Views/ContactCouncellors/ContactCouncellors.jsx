import React from 'react';
import Side from '../StudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';

import './ContactCouncellor.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
      },
}));
export default function ContactCouncellor(){
    const [shown, setShown] = React.useState(false)
    const classes = useStyles();
    return(

        <div>
            <div><Nav /></div>
            <div style={{display:'flex'}}>
                <Side />
                <div className="container container-custom">
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}

                        button onClick={() => setShown(!shown)}>Contact Councellor</Button>
                    <div>
                        {shown ? <VideoModal /> : null}

                    </div>
                </div>
            </div>
        </div>
    );
}

const VideoModal = (props) => {
    return <div>
        <iframe allow="camera; microphone; display-capture; autoplay; clipboard-write"
                src="https://meet.jit.si/ucscathwala124578"
                marginWidth="1000px"
                width="100%"
                height="700px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
        />
    </div>
}
