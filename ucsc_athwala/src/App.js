import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Login from './Views/Signin/SignIn'
import SignUp from './Views/SignUp/SignUp'


function App() {
    return (
        <Router>
            <Switch>
                {/*<Route path="/" exact>*/}
                {/*    <HomePage/>*/}
                {/*</Route>*/}
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/signup" exact>
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;


