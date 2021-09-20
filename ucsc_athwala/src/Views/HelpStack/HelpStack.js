import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import HelpStackPage from './HelpStack_page';
import { Container} from '@material-ui/core';
import AskQuestion from './AskQuestion';
import ViewQA from './ViewQA';


export default function HelpStack(){

   

    return(
       <Router>
           <Container>
        <Switch>
            <Route path='/std/helpstack/default' exact>
                <HelpStackPage />
            </Route>
            <Route path='/std/helpstack/askQuestion' exact>
                <AskQuestion />
            </Route>
            <Route path='/std/helpstack/viewQuestionAnswer' exact>
                <ViewQA />
            </Route>
        </Switch>
            </Container>
    </Router> 
    )
    
}