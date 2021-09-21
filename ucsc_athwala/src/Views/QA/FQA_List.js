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
        console.log();
        

        
    }

    
    handleClick = () => {
        const currentstate = this.state.open
            this.setState({   
                open : !currentstate,
            })
            console.log(this.state.open);
            //const title = props.title;
    }

    render(){
        return (
            
    <Grid 
    
    container
    spacing={4}
    //direction="column"
    alignItems="center"
    justify="center"
    //style={{ minHeight: '100vh' }}
    >
        <Grid item xs={12} sm={12} md={10} spacing={2}  >
            <List >
                
            <ListItem button onClick={this.handleClick} >
                <ListItemIcon><HelpIcon color="secondary"/></ListItemIcon>
                    <ListItemText>{this.props.title}</ListItemText>
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button>
                    <ListItemIcon><QuestionAnswerIcon color="primary"/></ListItemIcon>
                    <ListItemText>{this.props.answer}
                    </ListItemText>
                </ListItem>
                </List>
            </Collapse> 
           
            </List>
        </Grid>

        
    </Grid>
    
    
  );
    }

  
}