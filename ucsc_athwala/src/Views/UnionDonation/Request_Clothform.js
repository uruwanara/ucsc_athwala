import React from 'react';
import './Donation.css';

export default function RequestCloth(){
    return(
    <div>
    <form style={{marginLeft:150}}>
        <div style={{marginBottom:20,fontFamily:'Poppins, sans-serif'}}><h4>Request form of Cloths</h4></div>

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
            <label for="type" class="label-custom">Cloth type*</label>
            <input type="text" class="form-control input-custom" id="type" placeholder="type of cloth" required></input>
        </div>
        <div class="form-group col-md-4">
            <label for="gender" class="label-custom">Gender*</label>
                <select class="custom-select select">
                    <option selected>Open this select menu</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="notSay">I prefer not to say </option>
                </select>
        </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="size" class="label-custom">Size</label>
                <select class="custom-select select">
                    <option selected>Open this select menu</option>
                    <option value="XS">XS (Width:16" Length:24")</option>
                    <option value="S">S (Width:18" Length:26")</option>
                    <option value="M">M (Width:20" Length:28")</option>
                    <option value="L">L (Width:22" Length:29")</option>
                    <option value="XL">XL (Width:23" Length:31")</option>
                    <option value="2XL">2XL (Width:25" Length:33")</option>
                </select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="date" class="label-custom">Before (around)</label>
                <input type="date" class="form-control input-custom" id="title" placeholder="Date"></input>
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

