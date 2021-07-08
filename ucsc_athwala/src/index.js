import React from 'react';
import ReactDOM from 'react-dom';
import SignInt from './Signin/SignIn';
import CreateFundraising from './Fundraising/CreateFundraising';


ReactDOM.render(
  <React.StrictMode>
    <SignInt />
    {/* <CreateFundraising /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
