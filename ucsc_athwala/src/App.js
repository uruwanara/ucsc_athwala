import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Login from './Views/Signin/SignIn'
import SignUp from './Views/SignUp/SignUp'
import StdDashBoard from './Views/StudentDashboard/StudentDashboard'
import UnionDashboard from './Views/UnionStudentDashboard/UnionStudentDashboard'
import StdContactCounsellor from './Views/StdContactCounsellor/StdContactCounsellor'
import StdLearningGroup from './Views/StdLearningGroups/StdLearningGroups'
import ViewEleProduct from './Views/Product/ProductPageViewEles'
import ViewNoteProduct from './Views/Product/ProductPageViewNotes'
// import SellNoteProduct from './Views/Product/ProductPageSellNote'
import Viewcauses from './Views/Donation/Donation_page'
import RequestNote from './Views/Donation/Request_Note'
import RequestCloth from './Views/Donation/Request_Cloth'
import RequestDevice from './Views/Donation/Request_Device'
import RequestMoney from './Views/Donation/Request_Money'
import RequestOther from './Views/Donation/Request_Other'
import ViewMyrequest from './Views/Donation/MyRequesting'
import ViewNoteCause from './Views/Donation/View_Notecause'
import ViewClothCause from './Views/Donation/View_Clothcause'
import ViewDeviceCause from './Views/Donation/View_Devicecause'
import ViewMoneyCause from './Views/Donation/View_Moneycause'
import ViewOtherCause from './Views/Donation/View_Othercause'
import ViewReceivedDonation from './Views/Donation/View_MyrequestingReceived'
import ViewPendingDonation from './Views/Donation/View_Myrequesting'
import ViewNotReceivedDonation from './Views/Donation/View_MyrequestingNotrecived'
import StdContactCounsellor from './Views/StdContactCounsellor/StdContactCounsellor'
import StdLearningGroup from './Views/StdLearningGroups/StdLearningGroups'
import ViewEleProduct from './Views/Product/ProductPageViewEles'
import ViewNoteProduct from './Views/Product/ProductPageViewNotes'
import SellNoteProduct from './Views/Product/ProductPageSellNote'
import SellEleProduct from './Views/Product/ProductPageSellEle'
import Chat from './Views/chat/chatpage'


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
                <Route path="/viewcauses" exact>
                    <Viewcauses />
                </Route>

                <Route path="/stddashboard" exact>
                    <StdDashBoard />
                </Route>

                <Route path="/stdcntcoun" exact>
                    <StdContactCounsellor/>
                </Route>
                <Route path="/requestNote" exact>
                    <RequestNote />
                </Route>

                <Route path="/requestCloth" exact>
                    <RequestCloth />
                </Route>

                <Route path="/requestDevice" exact>
                    <RequestDevice />
                </Route>

                <Route path="/requestMoney" exact>
                    <RequestMoney />
                </Route>

                <Route path="/requestOther" exact>
                    <RequestOther />
                </Route>

                <Route path="/viewMyrequest" exact>
                    <ViewMyrequest />
                </Route>

                <Route path="/viewNoteCause_details" exact>
                    <ViewNoteCause />
                </Route>

                <Route path="/viewClothCause_details" exact>
                    <ViewClothCause />
                </Route>

                <Route path="/viewDeviceCause_details" exact>
                    <ViewDeviceCause />
                </Route>

                <Route path="/viewMoneyCause_details" exact>
                    <ViewMoneyCause />
                </Route>

                <Route path="/viewOtherCause_details" exact>
                    <ViewOtherCause />
                </Route>

                <Route path="/viewReceived_donation" exact>
                    <ViewReceivedDonation />
                </Route>

                <Route path="/viewPending_donation" exact>
                    <ViewPendingDonation />
                </Route>

                <Route path="/viewNotReceived_donation" exact>
                    <ViewNotReceivedDonation />
                </Route>


                <Route path="/stdlrngrp" exact>
                <StdLearningGroup />
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


                <Route path="/unionDashobard" exact>
                    <UnionDashboard />
                    </Route>

                <Route path="/Chat" exact>
                    <Chat/>

                </Route>

            </Switch>
        </Router>
    );
}

export default App;
