import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import  TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const useStyles = makeStyles ({
    title:{
        color:"#546e7a",
        marginTop:50,
        marginBottom:20,
        fontSize:25,
      },
      filterbutton :{
        backgroundColor: "#757de8",
        color: "#FFFFFF",
        textTransform: "none",
        paddingTop:5,
        paddingLeft:10,
        paddingRight:10,
        marginTop:50,
        marginBottom:20,
        marginRight:90,
        float:"right",
        border:"none",
        "&:hover": {
          color: "#FFFFFF",
          backgroundColor: "#757de8",
          border: "1px solid #757de8",
        },    
    },

    backlink: {
        color:"#546e7a",
        marginTop:30,
        marginBottom:20,
        fontSize:15,
    }
})

export default function AskQuestion(){
    const classes = useStyles();

    const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const handleSubmit = (event) => {
     event.preventDefault(); 
    console.log(`
        title: ${title}
        body: ${body}
    `);
 }

    return(
        <div>
        <Grid container spacing ={3}>
            <Grid item md={6}>
                <Typography variant="h5" className={classes.title}>Ask Public Question</Typography>
            </Grid>
        </Grid> 
        <from onSubmit={handleSubmit} >
        <Grid container  spacing ={3} justify="center" >
            <Grid item md={10}>
            <TextField
                autoComplete="title"
                name="title"
                variant="outlined"
                required
                fullWidth
                size="small"
                id="title"
                label="Title (Note: Be specific)"
                value={title}
                onChange={e => setTitle(e.target.value)}
                autoFocus
                
              />
            </Grid>
            <Grid item md={10}>
            <TextField
                autoComplete="body"
                name="body"
                variant="outlined"
                id="body"
                label="body"
                value={body}
                fullWidth
                multiline
                rows ={10}
                autoFocus
                onChange={e => setBody(e.target.value)}
                
              />
            </Grid>
            
            <Grid item md={10}>
            <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Ask Question
                </Button>
                
            </Grid>

            

        </Grid>
        </from>

        <Grid container spacing ={3}>
            <Grid item md={6}>
                <Link to ='/std/helpstack/default'>
                <Typography variant="h5" className={classes.backlink}>Back to Top Questions</Typography>
                </Link>
            </Grid>
        </Grid>

        </div>
             

        

    );
}