
import React from 'react';
import './CreateFundraising.css';
import Nav from '../Navbar/Navbar';
import UnionStudentSidebar from '../UnionSidebar/UnionStudentSidebar';


function CreateFundraising() {
    return (
        <div>
            <div><Nav /></div>
            {/****************************devide the two main columns to sidebar and fundraising form by flex************************/}
            <div style={{ display: 'flex' }}>

                <UnionStudentSidebar />

                <div className="container container-custom">
                    <h2 className="text-center">Let's Create a New fundrasing programme</h2>
                    <hr />

                    <form className="row g-3 border border-primary pb-3">

                        <div className="col-md-7 d-flex align-items-end justify-content-end">
                            {/* <label htmlFor="inputTopic" className="form-label mt-3">Fundraising Event Topic</label>
                            <input type="text" name="fund_topic" className="form-control" id="inputTopic" placeholder="Enter a topic" /> */}
                            <div class="input-group">
                                <span style={{ color: '#081d62' }} class="input-group-text" id="basic-addon1"><b>Event Name</b></span>
                                <input type="text" class="form-control p-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-md-5 d-flex align-items-end justify-content-end">
                            <div class="input-group  mt-3">
                                <span style={{ color: '#081d62' }} class="input-group-text"><b>Upload an image</b></span>
                                <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                {/* <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button> */}
                            </div>
                        </div>


                        <div className="col-md-12">
                            {/* <label htmlFor="inputAddress" className="form-label mt-3">Fundraising Description</label>
                            <input type="text" name="fund_description" className="form-control" id="inputAddress" placeholder="Enter a description" /> */}
                            <div className="input-group mt-3">
                                {/* <label htmlFor="inputDescription" className="from-label mt-3">Fundraising Description</label> */}
                                <span style={{ color: '#081d62' }} className="input-group-text"><b>Fundraising Description</b></span>
                                {/* <label style={{ color: '#081d62' }} className="input-group-text"><b>Fundraising Description</b></label> */}
                                <textarea className="form-control" aria-label="With textarea" defaultValue={"Enter a detailed description"} />
                            </div>
                        </div>


                        <div className="col-md-6  d-flex align-items-end justify-content-end">
                            {/* <label htmlFor="inputBaseAmount" className="form-label mt-3">Base amount of fundraising</label>
                            <input type="number" name="fund_base_amount" className="form-control" id="inputBaseAmount" placeholder="Enter an amount in rupees" /> */}
                            <div class="input-group mt-3">
                                <span style={{ color: '#081d62' }} class="input-group-text"><b>Total goal amount in Rs.</b></span>
                                <input type="number" class="form-control" aria-label="Amount (to the nearest rupee)" />
                                <span class="input-group-text">.00</span>
                            </div>
                        </div>

                        <div className="col-md-6  d-flex align-items-end justify-content-end">
                            {/* <label htmlFor="inputBaseAmount" className="form-label mt-3">Base amount of fundraising</label>
                            <input type="number" name="fund_base_amount" className="form-control" id="inputBaseAmount" placeholder="Enter an amount in rupees" /> */}
                            <div class="input-group mt-3">
                                <span style={{ color: '#081d62' }} class="input-group-text"><b>Starting base amount in Rs.</b></span>
                                <input type="number" class="form-control" aria-label="Amount (to the nearest rupee)" />
                                <span class="input-group-text">.00</span>
                            </div>
                        </div>



                        <div className="col-md-6 d-flex align-items-end justify-content-end">
                            {/* <label htmlFor="inputExpireDate" className="form-label mt-3">Expired Date of fundraising</label>
                            <input type="date" className="form-control" id="inputExpireDate" /> */}
                            <div class="input-group mt-3">
                                <span style={{ color: '#081d62' }} class="input-group-text" id="basic-addon1"><b>Expired Date of fundraising</b></span>
                                <input type="time" class="form-control p-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                        </div>               
                        <div className="col-md-6 d-flex align-items-end justify-content-end">
                            {/* <label htmlFor="inputExpireTime" className="form-label mt-3">Expired Time of fundraising</label>
                            <input type="time" className="form-control" id="inputExpireTime" /> */}
                            <div class="input-group mt-3">
                                <span style={{ color: '#081d62' }} class="input-group-text" id="basic-addon1"><b>Expired Time of fundraising </b></span>
                                <input type="time" class="form-control p-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                        </div>


                        
                        <div className="col-12 d-flex flex-row-reverse mt-4 btn-custom">
                            <div className="btn-custom ml-1"><button input type="submit" className="btn">Create Fundrasing</button>
                            </div>
                            <div className="btn-custom mr-1"><button input type="reset" className="btn">Reset Details</button>
                            </div>
                        </div>
                        
                    </form>

                </div>

            </div>
        </div>
    );

}

export default CreateFundraising;
