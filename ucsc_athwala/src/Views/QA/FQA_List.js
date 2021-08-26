import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import HelpIcon from '@material-ui/icons/Help';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';


export default class FQAList extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            open : false,

        }

        
    }
    handleClick = () => {
        const currentstate = this.state.open
            this.setState({   
                open : !currentstate,
            })
            console.log(this.state.open);
    }

    render(){
        return (
    <Grid container>
        <Grid item md={12}>
            <List >

            <ListItem button onClick={this.handleClick} >
                <ListItemIcon><HelpIcon color="secondary"/></ListItemIcon>
                    <ListItemText>vission of the UCSC</ListItemText>
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button>
                    <ListItemIcon><QuestionAnswerIcon color="secondary"/></ListItemIcon>
                    <ListItemText>Be a global leader in computing, advancing the frontiers of new knowledge
                      through learning and research. 
                    </ListItemText>
                </ListItem>
                </List>
            </Collapse> 
            </List>
        </Grid>

        <Grid item md={12}>
            <List >
            <ListItem button onClick={this.handleClick} >
                <ListItemIcon><HelpIcon color="secondary"/></ListItemIcon>
                    <ListItemText>Mission of the UCSC</ListItemText>
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button >
                    <ListItemIcon><QuestionAnswerIcon color="secondary"/></ListItemIcon>
                    <ListItemText>To advance and enhance
                        computing knowledge,
                        fostering global strategic alliances,
                        promoting crossdisciplinary research,
                        producing socially responsible
                        professionals
                        with entrepreneurial skills,
                        leadership qualities and
                        integrity contributing to
                        position the country
                        as a knowledge hub
                        in the region.</ListItemText>
                </ListItem>
                </List>
            </Collapse>
            </List>  
        </Grid>

        <Grid item md={12}>

            <List >

            <ListItem button onClick={this.handleClick} >
                <ListItemIcon><HelpIcon color="secondary"/></ListItemIcon>
                    <ListItemText>Internal Undergraduate Degree Programmes</ListItemText>
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button >
                    <ListItemIcon><QuestionAnswerIcon color="secondary"/></ListItemIcon>
                    <ListItemText>Bachelor of Science in Computer Science (BSc. in CS) <br></br>
                      Bachelor of Science Honours in Computer Science (BSc. (Hons) in CS)<br></br>
                      Bachelor of Science Honours in Software Engineering (BSc. (Hons) in SE)<br></br>
                      Bachelor of Science in Information Systems (BSc. in IS)<br></br>
                      Bachelor of Science Honours in Information Systems (BSc. (Hons) in IS)</ListItemText>
                </ListItem>
                </List>
            </Collapse>
            </List>  
        </Grid>

        <Grid item md={12}>

            <List >

            <ListItem button onClick={this.handleClick} >
                <ListItemIcon><HelpIcon color="secondary"/></ListItemIcon>
                    <ListItemText>Postgraduate Degree Programmes</ListItemText>
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button >
                    <ListItemIcon><QuestionAnswerIcon color="secondary"/></ListItemIcon>
                    <ListItemText>Master of Computer Science (MCS) <br></br>
                    Master of Science in Computer Science (MSc. in CS)<br></br>
                    Master of Information Technology (MIT)<br></br>
                    Master of Information Security (MIS)<br></br>
                    Master of Business Analytics (MBAnalytics)<br></br>
                    Master of Cybersecurity (MC)<br></br></ListItemText>
                </ListItem>
                </List>
            </Collapse>
            </List>  
        </Grid>

        <Grid item md={12}>

            <List >

            <ListItem button onClick={this.handleClick} >
                <ListItemIcon><HelpIcon color="secondary"/></ListItemIcon>
                    <ListItemText>Postgraduate Research Degrees</ListItemText>
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button >
                    <ListItemIcon><QuestionAnswerIcon color="secondary"/></ListItemIcon>
                    <ListItemText>Doctor of Philosophy (PhD)<br></br>
                    Master of Philosophy (MPhil)</ListItemText>
                </ListItem>
                </List>
            </Collapse>
            </List>  
        </Grid>

    </Grid>
    
  );
    }

  
}