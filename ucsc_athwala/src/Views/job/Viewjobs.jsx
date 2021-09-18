import React , {useState,useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useLocation } from 'react-router';
import axios from "axios";

const useStyles = makeStyles({
    title:{
        color:"#546e7a",
        marginTop:5,
        marginBottom:20,
    },
    grid:{
        marginTop:20,
        marginBottom:20,
    },
    gridContainer:{
        marginTop:15,
    },
    jobtitle:{
        textAlign:'center',
        color:'#3f51b5',

    },
    jobdecription:{
        marginTop:15,
        marginLeft:20,
        textAlign:'justify',
    },
    list:{
        paddingLeft:150,
    },
})

export default function Viewjobs(){
    const classes = useStyles();
    const search = useLocation().search;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [company, setCompany] = useState("");
    const [req1, setRequirement1] = useState("");
    const [req2, setRequirement2] = useState("");
    const [req3, setRequirement3] = useState("");
    const [req4, setRequirement4] =useState("");
    const [reqOther, setOther] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [web, setWeb] = useState("");
    const [linkdin, setLinkdin] = useState("");

    const jobpostid = new URLSearchParams(search).get("id");

    useEffect(() => {
        fetchDetails(jobpostid);
    },[]);

    const fetchDetails = (jobpostid) => {
        const postdetails={
            "postid": jobpostid,
        }
        axios.post("http://localhost:5000/api/jobposts/viewpost",postdetails,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then((response) => {
                console.log(response.data);
                setTitle(response.data[0].title);
                setDescription(response.data[0].description);
                setCompany(response.data[0].company);
                setRequirement1(response.data[0].req1);
                setRequirement2(response.data[0].req2);
                setRequirement3(response.data[0].req3);
                setRequirement4(response.data[0].req4);
                setOther(response.data[0].reqOther);
                setPhone(response.data[0].tel);
                setEmail(response.data[0].mail);
                setWeb(response.data[0].website);
                setLinkdin(response.data[0].linkdin);

            })
    };

    const requirements = () => {
        if(req1 !== "" && req2 !== "" && req3!== "" && req4 !== "" && reqOther !== ""){
            return(
            <List>
                <ListItem>
                    <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={req1} />
                </ListItem>
                <ListItem>
                    <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={req2} />
                </ListItem>
                <ListItem>
                    <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={req3} />
                </ListItem>
                <ListItem>
                    <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={req4} />
                </ListItem>
                <ListItem>
                    <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={reqOther} />
                </ListItem>
            </List>
            )
        }
        else if( req1 !== "" && req2 !== "" && req3!== "" && req4 !== "" && reqOther === "" ){
            return(
            <List>
                <ListItem>
                    <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={req1} />
                </ListItem>
                <ListItem>
                    <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={req2} />
                </ListItem>
                <ListItem>
                    <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={req3} />
                </ListItem>
                <ListItem> 
                    <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={req4} />
                </ListItem>
            </List>
            )
        }
        else if(req1 !== "" && req2 !== "" && req3!== "" && req4 === "" && reqOther === "" ){
            return(
            <List>
                <ListItem>
                    <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={req1} />
                </ListItem>
                <ListItem>
                    <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={req2} />
                </ListItem>
                <ListItem>
                    <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={req3} />
                </ListItem>
            </List>
            )
        }
        else if( req1 !== "" && req2 !== "" && req3=== "" && req4 === "" && reqOther === ""){
            return(
            <List>
                <ListItem>
                    <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={req1} />
                </ListItem>
                <ListItem>
                    <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={req2} />
                </ListItem>
            </List>
            )
        }

        else if( req1 !== "" && req2 === "" && req3=== "" && req4 === "" && reqOther === ""){
        return(
            <List>
                <ListItem>
                    <ListItemIcon><ThumbUpAltIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={req1} />
                </ListItem>
            </List>
            )
        }

        else{
            return (<></>);
        }
    }

    const contactDetails = () => {
        if (web === "" && linkdin === ""){
            return(
                <List className={classes.list}>
                    <ListItem >
                        <ListItemIcon><CallIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary={phone}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><EmailIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary={email}/>
                    </ListItem>
                </List>
            )
        }
        else if (web === ""){
            return(
                <List className={classes.list}>
                    <ListItem >
                        <ListItemIcon><CallIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary={phone}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><EmailIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary={email}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><LinkedInIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary={linkdin}/>
                    </ListItem>
                </List>
            );
        }
        else if (linkdin === ""){
            return(
                <List className={classes.list}>
                    <ListItem >
                        <ListItemIcon><CallIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary={phone}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><EmailIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary={email}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><LinkedInIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary={web}/>
                    </ListItem>
                </List>
            );
        }

        else if (web != "" && linkdin !=""){
            return(
                <List className={classes.list}>
                    <ListItem >
                        <ListItemIcon><CallIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary={phone}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><EmailIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary={email}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><LanguageIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary={web}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><LinkedInIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary={linkdin}/>
                    </ListItem>
                </List>
            );
            
        }

    }

    

    return(
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
         <Typography variant="h5" className={classes.title}>Job Oppertunity</Typography>
         <Grid container className={classes.gridContainer} spacing={2}>
             <Grid item xs={12} className={classes.grid}>
             <Typography variant="h5" className={classes.jobtitle}>{title} - {company}</Typography>
             <Typography variant="subtitle1" className={classes.jobdecription}>{description}</Typography>
             </Grid>

             <Grid item xs={6} className={classes.grid}>
                <Typography variant="h5" className={classes.jobtitle}>Requirements</Typography>
                {requirements()}
             </Grid>

             <Grid item xs={6} className={classes.grid}>
                <Typography variant="h5" className={classes.jobtitle}>Contact Details</Typography>
                {contactDetails()}
             </Grid>
         </Grid>
      </Container>
    </React.Fragment>
    );
}