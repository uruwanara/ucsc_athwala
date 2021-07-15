import React from 'react';
import './Donation.css';

export default function RequestNote(){
    return(
    <div>
    <form style={{marginLeft:150}}>
        <div style={{marginBottom:20 ,fontFamily:'Poppins, sans-serif'}}><h4>Request form of lecture notes</h4></div>

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
                <label for="lesson">Lesson (if any)</label>
                <input type="text" class="form-control" id="lesson" placeholder="lesson"></input>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="date">Before (around)</label>
                <input type="date" class="form-control" id="date" placeholder="date"></input>
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

