import React from 'react';
import './Donation.css';

export default function RequestDevice(){
    return(
    <div>
    <form style={{marginLeft:150}}>
        <div style={{marginBottom:20,fontFamily:'Poppins, sans-serif'}}><h4>Request form of Electronic devices</h4></div>

        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="title" class="label-custom">Title*</label>
                <input type="text" class="form-control input-custom" id="title" placeholder="title" required></input>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="description" class="label-custom">Description*</label>
                <input type="text" class="form-control input-custom" id="description" placeholder="decription" required></input>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
            <label for="model" class="label-custom">Model of device </label>
            <input type="text" class="form-control input-custom" id="model" placeholder="device model" required></input>
        </div>
        <div class="form-group col-md-4">
            <label for="brand" class="label-custom">Brand name</label>
            <input type="text" class="form-control input-custom" id="brand" placeholder="device brand" required></input>
        </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="beforeDate" class="label-custom">Before (around)</label>
                <input type="date" class="form-control input-custom" id="BeforeDate" placeholder="Date"></input>
            </div>
        </div>
        <div class="form-group">
            <div class="form-check col-md-8">
            <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                <label class="form-check-label" for="gridCheck">
                    I Don't need to show my identity to others.
                </label>
            </div>
        </div>
       
        <button type="submit" class="btn btn-custom">Request</button>
    </form>

    </div>
    );
}

