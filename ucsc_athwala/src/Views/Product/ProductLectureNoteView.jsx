import React from 'react';
import Event from '../../image/note1.jpg';

export default function ProductCases(){
    return(
    <div>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Image</th>
      <th scope="col">Description</th>
      <th scope="col">Posted Date</th>
      <th scope="col">View Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DSA Lecture note</td>
      <td> <img src={Event} alt="cap" class="card-img-top" style={{height:70,width:70,alignSelf:'left',marginLeft:5}} ></img></td>
      <td>DSA 2 lecture note.</td>
      <td>2021-07-11</td>
     
      <td><button type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>SE Lecture note</td>
      <td> <img src={Event} alt="cap" class="card-img-top" style={{height:70,width:70,alignSelf:'left',marginLeft:5}} ></img></td>
      <td>Software engineering 2 lecture note.</td>
      <td>2021-07-11</td>
      
      <td><button type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>DSA Lecture note</td>
      <td> <img src={Event} alt="cap" class="card-img-top" style={{height:70,width:70,alignSelf:'left',marginLeft:5}} ></img></td>
      <td> DSA 2 lecture note.</td>
      <td>2021-07-11</td>
     
      <td><button type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>Database Lecture note</td>
      <td> <img src={Event} alt="cap" class="card-img-top" style={{height:70,width:70,alignSelf:'left',marginLeft:5}} ></img></td>
      <td>Database 1 lecture note.</td>
      <td>2021-07-11</td>
     
      <td><button type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>Database Lecture note</td>
      <td> <img src={Event} alt="cap" class="card-img-top" style={{height:70,width:70,alignSelf:'left',marginLeft:5}} ></img></td>
      <td>Database 2 lecture note.</td>
      <td>2021-07-11</td>
      
      <td><button type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>DSA Lecture note</td>
      <td> <img src={Event} alt="cap" class="card-img-top" style={{height:70,width:70,alignSelf:'left',marginLeft:5}} ></img></td>
      <td>DSA 1 lecture note.</td>
      <td>2021-07-11</td>
      
      <td><button type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>DSA Lecture note</td>
      <td> <img src={Event} alt="cap" class="card-img-top" style={{height:70,width:70,alignSelf:'left',marginLeft:5}} ></img></td>
      <td>DSA 3 lecture note.</td>
      <td>2021-07-11</td>
      
      <td><button type="button" class="btn tb-btn">View</button></td>
    </tr>
  </tbody>
</table>

    </div>
    );
}