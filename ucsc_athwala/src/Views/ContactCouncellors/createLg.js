import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



export default function RequestNote() {
    const classes = useStyles();

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [year, setYear] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [lesson, setLesson] = React.useState("");
    const [date, setDate] = React.useState("");
    const [acceptTerm, setacceptTerm] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`
        title: ${title}
        description: ${description}
        year: ${year}
        subject: ${subject}
        lesson: ${lesson}
        date: ${date}
        acceptTerm: ${acceptTerm}
    `);

        const userData=JSON.parse(localStorage.getItem("userData"));

        let tt=title.split(" ").join("");
        let tt1=Math.floor(Math.random() * 850);
        let tt2=tt.concat(tt1);
        const requestNote={
            "created_by":userData.id,
            "title": title,
            "url": tt2,
        }
        axios.post("http://localhost:5000/api/lgs/create",requestNote,{
            headers:{
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response)=>{
            console.log(response.data);
            if(response.data==='success'){
                setTitle("");
                setacceptTerm(false);
            }

        }).catch((err)=>{

        })
    }

    return (

        <Container component="main" maxWidth="sm">
            <CssBaseline />

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <BorderColorIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create A Learning Group
                </Typography>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} >
                            <TextField
                                autoComplete="title"
                                name="title"
                                variant="outlined"
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                value={title}
                                autoFocus
                                onChange={e => setTitle(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox required name="acceptTerm" color="primary"  onChange={e => setacceptTerm(true)}/>}
                                label="I agree to use this learning group only for the educational puroses"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit
                    </Button>

                </form>
            </div>
        </Container>
    );
}

