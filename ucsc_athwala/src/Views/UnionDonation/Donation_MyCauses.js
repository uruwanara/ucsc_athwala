import React from 'react';
import {Link, useHistory } from "react-router-dom";

export default function MyCases(){
  const history = useHistory();
  
    return(
    <div>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Posted Date</th>
      <th scope="col">Status</th>
      <th scope="col">View Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Database Lecture note</td>
      <td>i'm 2nd year student.I need Database lecture note.</td>
      <td>2021-07-11</td>
      <td>Received</td>
      <td><button onClick={()=>{ history.push("/unionviewReceived_donation")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>SE Lecture note</td>
      <td>i'm 2nd year student.I need Software engineering 2 lecture note.</td>
      <td>2021-07-11</td>
      <td>Not received</td>
      <td><button onClick={()=>{ history.push("/unionviewNotReceived_donation")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>DSA Lecture note</td>
      <td>i'm 2nd year student.I need DSA 2 lecture note.</td>
      <td>2021-07-11</td>
      <td>Pending</td>
      <td><button onClick={()=>{ history.push("/unionviewPending_donation")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>DSA Lecture note</td>
      <td>i'm 2nd year student.I need DSA 2 lecture note.</td>
      <td>2021-07-11</td>
      <td>Pending</td>
      <td><button onClick={()=>{ history.push("/unionviewPending_donation")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>SE Lecture note</td>
      <td>i'm 2nd year student.I need Software engineering 2 lecture note.</td>
      <td>2021-07-11</td>
      <td>Not Received</td>
      <td><button onClick={()=>{ history.push("/unionviewNotReceived_donation")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>Database Lecture note</td>
      <td>i'm 2nd year student.I need Database lecture note.</td>
      <td>2021-07-11</td>
      <td>Received</td>
      <td><button onClick={()=>{ history.push("/unionviewReceived_donation")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>DSA Lecture note</td>
      <td>i'm 2nd year student.I need DSA 2 lecture note.</td>
      <td>2021-07-11</td>
      <td>Pending</td>
      <td><button onClick={()=>{ history.push("/unionviewPending_donation")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
  </tbody>
</table>

    </div>
    );
}