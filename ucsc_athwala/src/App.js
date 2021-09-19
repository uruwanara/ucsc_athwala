import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Login from './Views/Signin/SignIn'
import SignUp from './Views/SignUp/SignUp'
import Land from './Views/LandingPage/home'
import StdNavside from './Views/StudentSidebar/Navbar';
import UStdNavside from './Views/UnionSidebar/Navbar';
import AdminNavside from './Views/AdminSidebar/Navbar';
import PstNavside from './Views/PastStudentSidebar/Navbar';
import CounNavside from './Views/CouncellorSidebar/Navbar';


function App() {
    return (
        <div>
            <Router>
             <Switch>
            <Route path="/std">
                    <StdNavside />
                </Route>
                 <Route path="/coun">
                     <CounNavside />
                 </Route>

                <Route path="/admin">
                    <AdminNavside />
                </Route>
                <Route path="/ustd">
                    <UStdNavside />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/pst">
                    <PstNavside />
                </Route>

                <Route path="/ucsc_athwala" exact>
                    <Land /> 
                </Route> }
                <Route path="/signup" exact>
                    <SignUp />
                </Route>

                 <Route path="/land" exact>
                     <Land />
                 </Route>

            </Switch>
    </Router>
        </div>
    );
}

export default App;
