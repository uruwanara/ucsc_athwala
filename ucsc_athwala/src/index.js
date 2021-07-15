import React from 'react';
import ReactDOM from 'react-dom';
import SingIn from './Views/ContactCouncellors/ContactCouncellors';
import { useHistory } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <SingIn/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
