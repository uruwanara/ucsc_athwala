
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors/red';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/styles';
import './CreateFundraising.css';


const theme = createTheme({
    palette: {
        primary: {
            main: '#043387',
            dark: '#000f59',
            // light:'#4b5cb8',
            light: '#0288d1',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#40c4ff',
            light: '#82f7ff',
            dark: '#0094cc',
            contrastText: '#000000',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },


}));



export default function CreateFundraising() {
    const classes = useStyles();
    const [value, setValue] = React.useState(100);

    return (
        // <Box bgcolor="secondary.main"  color="secondary.contrastText" p={5}>
        <ThemeProvider theme={theme}>
            <Box bgcolor="primary.light" p={5}>
                <div className={classes.root}>

                    <form className={classes.root} noValidate autoComplete="off">
                        <Box color="secondary.light" mb={5}>
                            <Typography align="center" variant="h4" component="h2">Let's Create a fundraising for the needs</Typography>
                        </Box>
                        <hr />

                        <Grid container spacing={4}>

                            <Grid item xs={8}>
                                <Box color="primary.contrastText">
                                    <Typography variant="h6" component="h2">Fundaising Topic</Typography>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        id="fund_topic"
                                        label="Fundraising Topic"
                                        name="fund_topic"
                                        // autoComplete="email"
                                        // autoFocus
                                        size="medium"
                                        placeholder="Enter meaningful topic"
                                        fullWidth
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={4}>
                                <Box color="primary.contrastText">
                                    <Typography variant="h6" component="h2">Expected total amount</Typography>
                                    <CurrencyTextField
                                        label="Enter the expecting amount"
                                        margin="normal"
                                        variant="outlined"
                                        value={value}
                                        currencySymbol="Rs."
                                        outputFormat="string"
                                    //  onChange={(event, value)=> setValue(value)}
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Box color="primary.contrastText">
                                    <Typography variant="h6" component="h2">Fundraising Description</Typography>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        id="fund_description"
                                        label="Fundraising Description"
                                        name="fund_descrition"
                                        // autoComplete="email"
                                        // autoFocus
                                        size="medium"
                                        placeholder="Enter a detailed description"
                                        fullWidth
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={4}>
                                <Box color="primary.contrastText" align="center">
                                    <Typography variant="h6" component="h2">Base amount</Typography>
                                </Box>
                                <Box align="center" >
                                    <CurrencyTextField
                                        label="Enter the base amount"
                                        margin="normal"
                                        variant="outlined"
                                        //   fullWidth
                                        // value={100}
                                        currencySymbol="Rs."
                                        outputFormat="string"
                                    //  onChange={(event, value)=> setValue(value)}
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={4}>
                                <Box color="primary.contrastText" align="center" >
                                    <Typography variant="h6" component="h2">Expired Date of Fundraising</Typography>
                                </Box>
                                <Box align="center" >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        id="fund_topic"
                                        //   fullWidth
                                        label="Date"
                                        caption="Fundraising Topic"
                                        name="fund_topic"
                                        // autoComplete="email"
                                        // autoFocus
                                        size="medium"
                                        type="date"
                                        placeholder="Enter meaningful topic"

                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={4}>
                                <Box color="primary.contrastText" align="center">
                                    <Typography variant="h6" component="h2">Expired Time of Fundraising</Typography>
                                </Box>
                                <Box align="center">
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        id="ex_time"
                                        label="Time"
                                        // fullWidth
                                        name="fund_topic"
                                        // autoComplete="email"
                                        // autoFocus
                                        size="medium"
                                        type="time"
                                        placeholder="Enter meaningful topic"
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12} >
                                <Box align="right" >
                                    <Button size="medium" variant="contained" color="secondary">
                                        Create Fundraising
                                    </Button>
                                </Box>
                            </Grid>

                        </Grid>
                    </form>
                    
                </div>
            </Box>
        </ThemeProvider>
    );
}
