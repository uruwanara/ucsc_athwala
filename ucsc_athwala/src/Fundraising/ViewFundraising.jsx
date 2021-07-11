import React from 'react';


function ViewFundraising() {
    return (

        <div className="container mt-3">
            <h2 className="text-center mt-3">View All fundraisings</h2>
            <hr />
            <div class="card shadow mt-3">
                <div class="card-header bg-success">
                    <h4 className="text-center"><b>Ongoing Fundraising</b></h4>
                </div>

                <div class="card-body">
                    <h5 class="card-title">Fundraising for the New year festival</h5>
                    <p class="card-text">For the upcoming festival we are planning to oraganize an event. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio amet, quis nam laudantium commodi minima! Recusandae eaque in vitae maiores inventore illo tenetur quisquam libero, enim quasi esse iure error.</p>

                    <div class="row g-3">
                        <div className="col-md-12">

                            <div class="mt-2">
                                <label><h6><i>Completed amount Progress sofar</i></h6></label>
                                <progress className="w-100 bg-success" id="file" max="100" value="12" ></progress>
                                <h6><b>Current amount: Rs 12,000</b></h6>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <h6>This Fundraising was placed on <b>23/07/2021 at 10.00 a.m</b></h6>
                        </div>

                        <div className="col-md-6">
                            <h6 className="float-end">This Fundraising will be expired on <b>28/09/2021 at 10.00 a.m</b></h6>
                        </div>


                        <div className="col-md-4">
                            <h6>Started base amount: Rs 1,000</h6>
                        </div>

                        <div className="col-md-4">
                            <h6>Final Expected amount: Rs 100,000</h6>
                        </div>

                        <div className="col-md-4">
                            <h6 className="float-end">To be recieved amount: Rs 99,000</h6>
                        </div>


                        <div className="col-md-12">
                            <a href="#" class="btn btn-primary float-end">Edit Fundraiding</a>
                        </div>


                    </div>
                </div>
            </div>




            <div class="card shadow mt-3">
                <div class="card-header bg-success">
                    <h4 className="text-center"><b>Ongoing Fundraising</b></h4>
                </div>

                <div class="card-body">
                    <h5 class="card-title">Fundraising for the Annual Pirith ceromony</h5>
                    <p class="card-text">For the upcoming month we are planning to oraganize an event. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio amet, quis nam laudantium commodi minima! Recusandae eaque in vitae maiores inventore illo tenetur quisquam libero, enim quasi esse iure error.</p>

                    <div class="row g-3">
                        <div className="col-md-12">
                            <div class="mt-2">
                                <label><h6><i>Completed amount Progress sofar</i></h6></label>
                                <progress className="w-100 bg-success" id="file" max="100" value="20" ></progress>
                                <h6><b>Current amount: Rs 60,000</b></h6>

                            </div>
                        </div>


                        <div className="col-md-6">
                            <h6>This Fundraising was placed on <b>23/06/2021 at 11.00 a.m</b></h6>
                        </div>

                        <div className="col-md-6">
                            <h6 className="float-end">This Fundraising will be expired on <b>28/09/2021 at 10.00 a.m</b></h6>
                        </div>


                        <div className="col-md-4">
                            <h6>Started base amount: Rs 3,000</h6>
                        </div>

                        <div className="col-md-4">
                            <h6>Final Expected amount: Rs 300,000</h6>
                        </div>

                        <div className="col-md-4">
                            <h6 className="float-end">To be recieved amount: Rs 240,000</h6>
                        </div>


                        <div className="col-md-12">
                            <a href="#" class="btn btn-primary float-end">Edit Fundraiding</a>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    );

}

export default ViewFundraising;