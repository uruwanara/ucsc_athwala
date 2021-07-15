import React from 'react';
import ReactDOM from 'react-dom';
import ViewFundraising from './Fundraising/ViewFundraising';
import StudentDashboard from './StudentDashboard/StudentDashboard';
import Admindash from './AdminDashboard/Admindash';
import Auction from './Auction/Auction';
import Viewauction from './Auction/Viewauction';

// import SignInt from './Signin/SignIn';

//import ViewFundraising from './Fundraising/ViewFundraising';
//import StudentDashboard from './StudentDashboard/StudentDashboard';
//import Admindash from './AdminDashboard/Admindash';






ReactDOM.render(
  <React.StrictMode>
    <Viewauction/>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
