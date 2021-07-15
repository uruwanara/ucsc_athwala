import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Login from './Views/Signin/SignIn'
import SignUp from './Views/SignUp/SignUp'
import StdDashBoard from './Views/StudentDashboard/StudentDashboard'
import Viewdonations from './Views/Donation/Donation_page'
import UnionStudentDashboard from './Views/UnionStudentDashboard/UnionStudentDashboard'




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
                <Route path="/viewdonations" exact>
                    <Viewdonations />
                </Route>

                <Route path="/stddashboard" exact>
                    <StdDashBoard />
                </Route>

                <Route path="/ustddashboard" exact>
                    <UnionStudentDashboard />
                </Route>


                <Route path="/signup" exact>
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;


