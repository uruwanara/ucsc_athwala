import React from 'react';
import ReactDOM from 'react-dom';
import ViewFundraising from './Fundraising/ViewFundraising';
import StudentDashboard from './StudentDashboard/StudentDashboard';
import Admindash from './AdminDashboard/Admindash';
// import SignInt from './Signin/SignIn';


ReactDOM.render(
  <React.StrictMode>
     <Admindash />
    {/* <SignInt /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
