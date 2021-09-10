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
import Viewdonations from './Views/Donation/Donation_page'

import UnionStudentDashboard from './Views/UnionStudentDashboard/UnionStudentDashboard'
import FundraisingDashboard from './Views/Fundraising/FundraisingDashboard'
// import CreateFundraising from './Views/Fundraising/CreateFundraising'
// import ViewFundraising from './Views/Fundraising/ViewFundraising'

//import ViewStuFundraising from './Views/Fundraising/ViewStuFundraising'

import EditFundraising from './Views/Fundraising/EditFundraising'
import Home from './Views/Home/Home'
import SellNoteProduct from './Views/Product/ProductPageSellNote'
import SellEleProduct from './Views/Product/ProductPageSellEle'
import Chat from './Views/chat/chatpage'
import Job from './Views/job/jobPage'
import Everify from './Views/EmailVerify/EmailVerify'
import SamsungEleProduct from './Views/Product/ViewProductSamsungPhone'
import NokiaEleProduct from './Views/Product/ViewProductNokia C20'
import LectureNoteProduct from './Views/Product/ViewProductLectureNote'
import HuwaweiITabEleProduct from './Views/Product/ViewProductHuaweiTab'
import HuwaweiP30EleProduct from './Views/Product/ViewProductHuawei P30 Lite'
import HPProEleProduct from './Views/Product/ViewProductHPProbook'
import HP15EleProduct from './Views/Product/ViewProductHP15s'
import AcerEleProduct from './Views/Product/ViewProductAcerAspire'
import PastStuDashboard from "./Views/PastStudentDashboard/PastStudentDashboard";

import PstViewDonation from './Views/PastStudentDonation/Donation_page'
import PstViewNoteCause from './Views/PastStudentDonation/View_Notecause'
import PstViewClothCause from './Views/PastStudentDonation/View_Clothcause'
import PstViewDeviceCause from './Views/PastStudentDonation/View_Devicecause'
import PstViewMoneyCause from './Views/PastStudentDonation/View_Moneycause'
import PstViewOtherCause from './Views/PastStudentDonation/View_Othercause'

import Coundashboard from './Views/Councillordashboard/Coundashboard'
import CounContactStu from './Views/CouncillorContactStudent/CouncillorConStu'

import UnionViewDonation from './Views/UnionDonation/Donation_page'
import UnionViewNoteCause from './Views/UnionDonation/View_Notecause'
import UnionViewClothCause from './Views/UnionDonation/View_Clothcause'
import UnionViewDeviceCause from './Views/UnionDonation/View_Devicecause'
import UnionViewMoneyCause from './Views/UnionDonation/View_Moneycause'
import UnionViewOtherCause from './Views/UnionDonation/View_Othercause'
import UnionRequestNote from './Views/UnionDonation/Request_Note'
import UnionRequestCloth from './Views/UnionDonation/Request_Cloth'
import UnionRequestDevice from './Views/UnionDonation/Request_Device'
import UnionRequestMoney from './Views/UnionDonation/Request_Money'
import UnionRequestOther from './Views/UnionDonation/Request_Other'
import UnionViewMyrequest from './Views/UnionDonation/MyRequesting'
import UnionViewReceivedDonation from './Views/UnionDonation/View_MyrequestingReceived'
import UnionViewPendingDonation from './Views/UnionDonation/View_Myrequesting'
import UnionViewNotReceivedDonation from './Views/UnionDonation/View_MyrequestingNotrecived'
import Land from './Views/LandingPage/home'
import UNavbar from './Views/UnionSidebar/Navbar';
import StudentDashboard from './Views/StudentDashboard/StudentDashboard';
import StdNavside from './Views/StudentSidebar/Navbar';
import UStdNavside from './Views/UnionSidebar/Navbar';
import AdminNavside from './Views/AdminSidebar/Navbar';



function App() {
    return (
        <div>
            <Router>
             <Switch>
            {/*<Route path="/ucscathwala" exact>
                    <Land /> 
                </Route>
                <Route path="/navside" exact>
                    <Navside />
                </Route>
                <Route path="/navside" exact>
                    <Navside />
                </Route>
                <Route path="/requestcategories" exact>
                    <RequestDonationCategory />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/viewcauses" exact>
                    <Viewcauses />
                </Route>

                <Route path="/stddashboard" exact>
                    <StdDashBoard />
                </Route>

                <Route path="/ustddashboard" exact>
                    <UnionStudentDashboard />
                </Route>

                <Route path="/funddashboard" exact>
                    <FundraisingDashboard />
                </Route>

                <Route path="/createfundraising" exact>
                    <CreateFundraising />
                </Route>

                <Route path="/viewfundraising" exact>
                    <ViewFundraising />
                </Route>

                <Route path="/editfundraising" exact>
                    <EditFundraising />
                </Route>

                <Route path="/viewstufundraising" exact>
                    <ViewStuFundraising />
                </Route>

                <Route path="/home" exact>
                    <Home />
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


                <Route path="/unionDashbord" exact>
                    <UnionDashboard />
                </Route>

                <Route path="/Chat" exact>
                    <Chat/>

                </Route>


                <Route path="/Job" exact>
                    <Job/>
                </Route>
                 <Route path="/everify" exact>
                    <Everify />
                </Route>
                <Route path="/SamsungEleProduct" exact>
                    <SamsungEleProduct />
                </Route>
                <Route path="/NokiaEleProduct" exact>
                    <NokiaEleProduct />
                </Route>
                <Route path="/LectureNoteProduct" exact>
                    <LectureNoteProduct />
                </Route>
                <Route path="/HuwaweiITabEleProduct" exact>
                    <HuwaweiITabEleProduct />
                </Route>
                <Route path="/HuwaweiP30EleProduct" exact>
                    <HuwaweiP30EleProduct />
                </Route>
                <Route path="/HPProEleProduct" exact>
                    <HPProEleProduct />
                </Route>
                <Route path="/HP15EleProduct" exact>
                    <HP15EleProduct />
                </Route>
                <Route path="/AcerEleProduct" exact>
                    <AcerEleProduct />
                </Route>

                <Route path="/pstddashboard" exact>
                    <PastStuDashboard />
                </Route>

                <Route path="/pstDonation" exact>
                    <PstViewDonation />
                </Route>
                
                <Route path="/pstviewNoteCause_details" exact>
                    <PstViewNoteCause />
                </Route>

                <Route path="/pstviewClothCause_details" exact>
                    <PstViewClothCause />
                </Route>

                <Route path="/pstviewDeviceCause_details" exact>
                    <PstViewDeviceCause />
                </Route>

                <Route path="/pstviewMoneyCause_details" exact>
                    <PstViewMoneyCause />
                </Route>

                <Route path="/pstviewOtherCause_details" exact>
                    <PstViewOtherCause />
                </Route>


                <Route path="/unionviewcauses" exact>
                    <UnionViewDonation />
                </Route>

                <Route path="/unionviewNoteCause_details" exact>
                    <UnionViewNoteCause />
                </Route>

                <Route path="/unionviewClothCause_details" exact>
                    <UnionViewClothCause />
                </Route>

                <Route path="/unionviewDeviceCause_details" exact>
                    <UnionViewDeviceCause />
                </Route>

                <Route path="/unionviewMoneyCause_details" exact>
                    <UnionViewMoneyCause />
                </Route>

                <Route path="/unionviewOtherCause_details" exact>
                    <UnionViewOtherCause />
                </Route>

                <Route path="/unionrequestNote" exact>
                    <UnionRequestNote />
                </Route>

                <Route path="/unionrequestCloth" exact>
                    <UnionRequestCloth />
                </Route>

                <Route path="/unionrequestDevice" exact>
                    <UnionRequestDevice />
                </Route>

                <Route path="/unionrequestMoney" exact>
                    <UnionRequestMoney />
                </Route>

                <Route path="/unionrequestOther" exact>
                    <UnionRequestOther />
                </Route>

                <Route path="/unionviewMyrequest" exact>
                    <UnionViewMyrequest />
                </Route>

                <Route path="/unionviewReceived_donation" exact>
                    <UnionViewReceivedDonation />
                </Route>

                <Route path="/unionviewPending_donation" exact>
                    <UnionViewPendingDonation />
                </Route>

                <Route path="/unionviewNotReceived_donation" exact>
                    <UnionViewNotReceivedDonation />
                </Route>

                <Route path="/Coundashboard" exact>
                    <Coundashboard  />
                </Route>

                <Route path="/CounContactStu" exact>
                    <CounContactStu  />
    </Route>*/}
                <Route path="/std">
                    <StdNavside />
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

            </Switch>
    </Router>
        </div>
    );
}

export default App;
