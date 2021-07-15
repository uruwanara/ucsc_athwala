import React from 'react';
import './ProductView.css';

export default function RequestNote(){
    return(
    <div>
    <form style={{marginLeft:150}}>
        <div style={{marginBottom:20 ,fontFamily:'Poppins, sans-serif'}}><h4>Create Lecture notes Advertisement</h4></div>

        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="title">Title*</label>
                <input type="text" class="form-control" id="title" placeholder="title" required></input>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="description">Description*</label>
                <input type="text" class="form-control" id="description" placeholder="decription" required></input>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
            <label for="year">Study year*</label>
            <input type="text" class="form-control" id="year" placeholder="year" required></input>
        </div>
        <div class="form-group col-md-4">
            <label for="subject">Subject*</label>
            <input type="subject" class="form-control" id="subject" placeholder="subject" required></input>
        </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="price">Price*</label>
                <input type="text" class="form-control" id="price" placeholder="price" required></input>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
            <div className="row">
                <div className="col-md-12"><label>You are able to upload image here</label></div>
            </div>
            <div className="row">
                <div className="col-md-12"><input type="file" class="form-control-file" id="uploadFile"></input></div>
            </div>
               
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
       
        <button type="submit" class="btn btn-custom">Post</button>
    </form>

    </div>
    );
}

