import React from 'react';
import {Link, useHistory } from "react-router-dom";

export default function Cases(){
  const history = useHistory();
    return(
    <div>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Posted Date</th>
      <th scope="col">Required Date</th>
      <th scope="col">View Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DSA Lecture note</td>
      <td>i'm 2nd year student.I need DSA 2 lecture note.</td>
      <td>2021-07-11</td>
      <td>2021-08-11</td>
      <td><button onClick={()=>{ history.push("/viewNoteCause_details")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>Office Trousers</td>
      <td>i'm 2nd year student.I need Office Trousers</td>
      <td>2021-07-11</td>
      <td>2021-08-11</td>
      <td><button onClick={()=>{ history.push("/viewClothCause_details")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>Mobile phone</td>
      <td>I'm a first year student. i need mobile phone</td>
      <td>2021-07-11</td>
      <td>2021-08-11</td>
      <td><button onClick={()=>{ history.push("/viewDeviceCause_details")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>Course fees</td>
      <td>help with money for course fees</td>
      <td>2021-07-11</td>
      <td>2021-08-11</td>
      <td><button onClick={()=>{ history.push("/viewMoneyCause_details")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>SE Lecture note</td>
      <td>i'm 2nd year student.I need SE 2 lecture note.</td>
      <td>2021-07-11</td>
      <td>2021-08-11</td>
      <td><button onClick={()=>{ history.push("/viewNoteCause_details")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>help for my brother's recovery</td>
      <td>I,m a second year student. My brother got accident last month.</td>
      <td>2021-07-11</td>
      <td>2021-08-11</td>
      <td><button onClick={()=>{ history.push("/viewOtherCause_details")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>Database Lecture note</td>
      <td>i'm 1st year student.I need Database lecture note.</td>
      <td>2021-07-11</td>
      <td>2021-08-11</td>
      <td><button onClick={()=>{ history.push("/viewNoteCause_details")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
  </tbody>
</table>

    </div>
    );
}