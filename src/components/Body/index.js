import React from "react";

const Body = ()=>{
    return(
        <>
 <div className="two">
    <div className="desc">
        <img src="assets/images/Group 14.png" alt=""/>
        <div>
            <h3>Easy Connection</h3>
            <p>Quick seerve connects service seekers to service professionals</p>
        </div>
    </div>
    <div className="desc">
        <img src="assets/images/Group 71.png" alt=""/>
        <div>
            <h3>Trusted Service</h3>
            <p>Registered Professionals are tested and trusted</p>
        </div>
    </div>
    <div className="desc">
        <img src="assets/images/Group 73.png" alt=""/>
        <div>
            <h3>Expert Professionals</h3>
            <p>Professionals are well trained and mastered their skills to the fullest</p>
        </div>
    </div>
</div>
<div id="mid"></div>

<div className="third">
    <div>
        <h1>why quick<span style={{color:"orange"}}>Seerve?</span></h1>
        <p>Quickseerve connects service seekers to service professionals. QuickSeerve links who needs a service to who can do the service
            efficiently and professionally. It's a platform dedicated to making life easier for everybody by allowing service need be met at one's
            comfort. QuickSeerve model accomodates all kinds of services starting and majoring with physical services and expanding to digital services
            in the long run.
        </p>
    </div>

    <div className="container">
        <div>
            <img src="assets/images/RATE.png" alt=""/>
            <p>Trained <br/> Professionals</p>
        </div>

        <div>
            <img src="assets/images/RATE.png" alt=""/>
            <p>Happy <br/> Customers</p>
        </div>

        <div>
            <img src="assets/images/RATE.png" alt=""/>
            <p>Cities</p>
        </div>

        <div>
            <img src="assets/images/RATE.png" alt=""/>
            <p>Countries</p>
        </div>
    </div>
</div>
<div className="low">
    <div className="foot">
        <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </div>
</div>
        </>
    )
}
export default Body;