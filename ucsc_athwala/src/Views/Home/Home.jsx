import React from "react";
import Viewfund from "../../image/view_fund.png";
import Createfund from "../../image/create_fund.jpg";
// import './Home.css';
import { Container } from "@material-ui/core";
import UCSC from "../../image/ucsc.jpg";

function Home() {
    return (
        <div className="">
            <div style={{ backgroundImage: "url(" + UCSC + ")" }} class="jumbotron jumbotron-fluid text-center">
                {/* <div style={{backgroundImage: 'url(http://i54.tinypic.com/4zuxif.jpg)'}} /> */}
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">
                    This is a simple hero unit, a simple jumbotron-style component for
                    calling extra attention to featured content or information.
                </p>
                <hr class="my-4" />
                <p>
                    It uses utility classes for typography and spacing to space content out
                    within the larger container.
                </p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">
                        Learn more
                    </a>
                </p>





            </div>

            <div className="row">


                <div className="col-md-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>


            </div>





        </div >





    );
}

export default Home;
