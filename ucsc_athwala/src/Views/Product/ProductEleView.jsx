import React from 'react';
import Event from '../../image/hp1.jpg';
import EventLaptopHP from '../../image/laptopHP.jpg';
import EventTabH from '../../image/tabH.jpg';
import EventMobileS from '../../image/mobileS.jpg';
import EventLaptopAcer from '../../image/laptopAcer.jpeg';
import EventLaptopHP15 from '../../image/laptopHP15.jpg';
import EventMobileN from '../../image/mobileN.jpeg';
import EventMobileH from '../../image/mobileH.jpg';
import {Link, useHistory } from "react-router-dom";

export default function ProductCases(){
  const history = useHistory();
    return(
    <div>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Image</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Posted Date</th>
      <th scope="col">View Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HP Laptop</td>
      <td> <img src={EventLaptopHP} alt="cap" class="card-img-top" style={{height:70,width:70,alignSelf:'left',marginLeft:5}} ></img></td>
      <td>HP Probook 450 G7</td>
      <td>Rs. 60 000.00</td>
      <td>2021-06-08</td>
     
      <td><button onClick={()=>{ history.push("/HPProEleProduct")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>Huawei Tablet</td>
      <td> <img src={EventTabH} alt="cap" class="card-img-top" style={{height:70,width:70,alignSelf:'left',marginLeft:5}} ></img></td>
      <td>Huawei Mediapad M5 Lite</td>
      <td>Rs. 32 000.00</td>
      <td>2021-04-21</td>
      
      <td><button onClick={()=>{ history.push("/HuwaweiITabEleProduct")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>Samsung Phone</td>
      <td> <img src={EventMobileS} alt="cap" class="card-img-top" style={{height:70,width:70,alignSelf:'left',marginLeft:5}} ></img></td>
      <td>Samsung Galaxy A12</td>
      <td>Rs. 17 000.00</td>
      <td>2021-04-03</td>
     
      <td><button onClick={()=>{ history.push("/SamsungEleProduct")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>Acer Laptop</td>
      <td> <img src={EventLaptopAcer} alt="cap" class="card-img-top" style={{height:70,width:70,alignSelf:'left',marginLeft:5}} ></img></td>
      <td>Acer Aspire 5 A514-54G</td>
      <td>Rs. 55 500.00</td>
      <td>2021-02-29</td>
     
      <td><button onClick={()=>{ history.push("/AcerEleProduct")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>HP Laptop</td>
      <td> <img src={EventLaptopHP15} alt="cap" class="card-img-top" style={{height:70,width:70,alignSelf:'left',marginLeft:5}} ></img></td>
      <td>HP 15s-Eq1086tu</td>
      <td>Rs. 37 000.00</td>
      <td>2020-12-16</td>
      
      <td><button onClick={()=>{ history.push("/HP15EleProduc")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>Nokia phone</td>
      <td> <img src={EventMobileN} alt="cap" class="card-img-top" style={{height:70,width:70,alignSelf:'left',marginLeft:5}} ></img></td>
      <td>Nokia C20</td>
      <td>Rs. 10 000.00</td>
      <td>2020-11-17</td>
      
      <td><button onClick={()=>{ history.push("/NokiaEleProduct")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>Huawei Phone</td>
      <td> <img src={EventMobileH} alt="cap" class="card-img-top" style={{height:70,width:70,alignSelf:'left',marginLeft:5}} ></img></td>
      <td>Huawei P30 Lite</td>
      <td>Rs. 12 000.00</td>
      <td>2020-10-28</td>
      
      <td><button onClick={()=>{ history.push("/HuwaweiP30EleProduct")}} type="button" class="btn tb-btn">View</button></td>
    </tr>
  </tbody>
</table>

    </div>
    );
}