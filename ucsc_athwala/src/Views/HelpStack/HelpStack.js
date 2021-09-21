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
    const userData=JSON.parse(localStorage.getItem("userData"));

   const routepath = () => {
       if(userData.userType == "STUDENT"){
            return(
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
            )
       }
       else if(userData.userType == "UNIONST"){
           return(
               <Container>
            <Switch>
                <Route path='/ustd/helpstack/default' exact>
                    <HelpStackPage />
                </Route>
                <Route path='/ustd/helpstack/askQuestion' exact>
                    <AskQuestion />
                </Route>
                <Route path='/ustd/helpstack/viewQuestionAnswer' exact>
                    <ViewQA />
                </Route>
            </Switch>
            </Container>
           )
        

       }
       else if(userData.userType == "ALUMNI"){
            return(
                <Container>
                    <Switch>
                        <Route path='/pst/helpstack/default' exact>
                            <HelpStackPage />
                        </Route>
                        <Route path='/pst/helpstack/askQuestion' exact>
                            <AskQuestion />
                        </Route>
                        <Route path='/pst/helpstack/viewQuestionAnswer' exact>
                            <ViewQA />
                        </Route>
                    </Switch>
            </Container>
            )
       }
   }

    return(
       <Router>
           {/* <Container>
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
            </Container> */}
            {routepath()}
    </Router> 
    )
    
}