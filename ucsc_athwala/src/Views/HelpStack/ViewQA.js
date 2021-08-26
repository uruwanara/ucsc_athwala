import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    title:{
        color:"#546e7a",
        marginTop:40,
        fontSize:20,
        fontWeight:'normal'
      },
    votebutton:{
        backgroundColor: "#757de8",
        color: "#FFFFFF",
        padding:10,
        marginRight:10,
        border:'none',
        borderRadius:5,
    },
    span:{
        fontSize:20,
    },backlink: {
        color:"#546e7a",
        marginTop:30,
        marginBottom:20,
        fontSize:15,
    }
})

export default function ViewQA(){
    const classes = useStyles();

    const[vote, setVote] = useState(0);

    function incrementVote(){
          setVote(prevVote => prevVote + 1);
    }

    return(
        <div>
            <Grid container md={12} spacing={4}>
                    <Grid item md={12}>
                        <div><Typography variant="h5" className={classes.title}>how can I get field and value from nested array and query them to find doc in mongodb?</Typography></div>
                    </Grid>
                    <Grid item md={2}>
                        <button onClick={incrementVote} className={classes.votebutton}>Vote</button>
                        <span className={classes.span}>{vote}</span>   
                    </Grid>
                    <Grid item md={10}>
                        <TextField
                            autoComplete="question"
                            name="question"
                            variant="outlined"
                            id="question"
                            value="Question"
                            fullWidth
                            multiline
                            rows ={10}
                            autoFocus                           
                        />  
                    </Grid>
                    <Grid item md={2}>
                    <Typography variant="h5" className={classes.title}>Answer 1</Typography> 
                    </Grid>
                    <Grid item md={10}>
                        <TextField
                            autoComplete="question"
                            name="question"
                            variant="outlined"
                            id="question"
                            value="Answer"
                            fullWidth
                            multiline
                            rows ={5}
                            autoFocus                           
                        />  
                    </Grid >
                    <Grid item md={12}>
                        <Link to ='/std/helpstack/default'>
                        <Typography variant="h5" className={classes.backlink}>Back to Top Questions</Typography>
                        </Link>
                    </Grid>

                    <Grid item md={12}>
                        <Divider />
                    </Grid>
                </Grid>

        <from  >
        <Grid container  spacing ={3} >

            <Grid item md={12}>
                    <Typography variant="h5" className={classes.title}>Your Answer</Typography>
            </Grid>

            <Grid item md={12}>
            <TextField
                autoComplete="body"
                name="body"
                variant="outlined"
                id="body"
                label="body"
                fullWidth
                multiline
                rows ={10}
                autoFocus
                
              />
              
            </Grid>
            
            <Grid item md={2}>
            <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Post Answer
                </Button>
                
            </Grid>

            

        </Grid>
        </from>

                    

        </div>
    );
}