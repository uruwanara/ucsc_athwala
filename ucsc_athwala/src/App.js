import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Login from './Views/Signin/SignIn'
import SignUp from './Views/SignUp/SignUp'
import Land from './Views/Landing/home'
import StdNavside from './Views/StudentSidebar/Navbar';
import UStdNavside from './Views/UnionSidebar/Navbar';
import AdminNavside from './Views/AdminSidebar/Navbar';
import PstNavside from './Views/PastStudentSidebar/Navbar';
import CounNavside from './Views/CouncellorSidebar/Navbar';
import Verify from './Views/EmailVerify/EmailVerify'
import Test from './Views/UploadFileTest'
import PublicDonation from './Views/Donation/Public_DonationPage';
import ViewPublicDonation from './Views/Donation/View_Public'
import Nav from './Views/Landing/Navigation';

import ChangeEmail from './Views/EmailChange/EmailVerify'


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
                </Route>
                 <Route path="/land" exact>
                     <Land />
                 </Route>
                <Route path="/signup" exact>
                    <SignUp />
                </Route>
                 <Route path="/everify" exact>
                     <Verify/>
                 </Route>
                 <Route path="/user/changeemail" exact>
                     <ChangeEmail/>
                 </Route>
                 <Route path="/test?id=10" exact>
                     <Verify/>
                 </Route>
                 
                 <Route path="/public" >
                     <Nav />
                 </Route>

            </Switch>
    </Router>
        </div>
    );
}

export default App;
