import React from 'react';


function CreateFundraising() {
    return (

        <div className="container mt-4 shadow-lg p-3 mb-5 bg-body rounded">
            <h2 class="text-primary text-center">Let's create a fundraising for the needs</h2>
<hr />
            <form action="#" className="p-4 bg-secondary mt-3" >
                <div className="form-group row g-3">

                    <div className="col-md-8">
                        <label for="input_fund_topic" className="form-label">Fundraising Topic</label>
                        <input name="topic" type="text" className="form-control" placeholder="Enter the fundraising topic" id="input_fund_topic" />
                    </div>

                    <div className="col-md-4">
                        <label for="input_tot_amount" className="form-label">Expected Total Amount</label>
                        <input name="tot_amount" type="text" className="form-control" placeholder="Enter the expecting amount" id="input_tot_amount" />
                    </div>

                    <div className="col-md-12">
                        <label for="input_fund_descrition" className="form-label">Fundraising Description</label>
                        <input name="description" type="text" className="form-control" placeholder="Enter a meaningful description" id="input_fund_descrition" />
                    </div>


                    <div className="col-md-4">
                        <label for="input_base_amount" className="form-label">Base amount of fundraising</label>
                        <input name="base_amount" type="text" className="form-control" placeholder="Enter a base amount" id="input_base_amount" />
                    </div>

                    <div className="col-md-4">
                        <label for="input_expired_date" className="form-label">Expired date of fundraising</label>
                        <input name="base_amount" type="date" className="form-control" placeholder="Enter an expire date" id="input_expired_date" />
                    </div>

                    <div className="col-md-4">
                        <label for="input_expired_time" className="form-label">Expired time of fundraising</label>
                        <input name="base_amount" type="time" className="form-control" placeholder="Enter an expired time" id="input_expired_time" />
                    </div>

                    <div className="col-md-12 mt-4 text-center m-1">
                        <div>
                        <button type="submit" value="submit" class="btn btn-primary float-end m-1">Create Fundraising</button>
                        </div>
                        <div>
                        <button type="reset" value="reset" class="btn btn-primary float-end m-1">Reset Details</button>
                        </div>
                    </div>

                
                </div>
            </form>
        </div>

    );

}

export default CreateFundraising;
