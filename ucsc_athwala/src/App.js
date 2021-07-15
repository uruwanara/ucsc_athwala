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
<<<<<<< Updated upstream
import StdContactCounsellor from './Views/StdContactCounsellor/StdContactCounsellor'
import StdLearningGroup from './Views/StdLearningGroups/StdLearningGroups'
=======
import ViewEleProduct from './Views/Product/ProductPageViewEles'
import ViewNoteProduct from './Views/Product/ProductPageViewNotes'
// import SellNoteProduct from './Views/Product/ProductPageSellNote'



import SellNoteProduct from './Views/Product/ProductPageSellNote'
import SellEleProduct from './Views/Product/ProductPageSellEle'

>>>>>>> Stashed changes

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

                <Route path="/stdcntcoun" exact>
                    <StdDashBoard />
                </Route>

                <Route path="/stdlrngrp" exact>
                <StdDashBoard />
                </Route>
                <Route path="/signup" exact>
                    <SignUp />
                </Route>

                <Route path="/ViewEleProduct" exact>
                    <ViewEleProduct />
                </Route>

                <Route path="/ViewNoteProduct" exact>
                    <ViewNoteProduct />
                </Route>

                <Route path="/SellNoteProduct" exact>
                    <SellNoteProduct />
                </Route>

                <Route path="/SellEleProduct" exact>
                    <SellEleProduct />
                </Route>

            </Switch>
        </Router>
    );
}

export default App;


