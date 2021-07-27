import React from 'react';
import Side from '../CouncellorSidebar/Sidebar';
import Nav from '../Navbar/Navbar';
import {Link, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './CouncillorConStu.css';

const useStyles = makeStyles((theme) => ({
    button: {
    },
}));

export default function PastStuDashboard(){
    const history = useHistory();
    const [shown, setShown] = React.useState(false)
    const [shown1, setShown1] = React.useState(false)
    const classes = useStyles();
  return(
      <div>
          <div><Nav /></div>
          
              <Side />
              <div style={{display:'flex'}}>
                <Side />
                <div className="container container-custom">
                    <h5 >This section is under developing!</h5>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}

                        button onClick={() => setShown1(!shown1)}>Contact Student: Dhanu Anjana</Button>
                    <div>
                        <div></div>
                        {shown1 ? <VideoModal2 /> : null}
                    </div>
                </div>
            
          </div>
      </div>
  );
}
const VideoModal2 = (props) => {
    return <div>
        <iframe allow="camera; microphone; display-capture; autoplay; clipboard-write"
                src="https://meet.jit.si/ucscathwalaLearningGroup456"
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