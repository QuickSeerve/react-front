import React from "react";

const NavBar = ()=>{
    return(
        <>
    <div className="logo1">
        <img src={"assets/images/Asset 4.png"} alt="logo-min" srcset="" />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" className="burger" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="burger">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    <div className="hidden" id="menu">
        <div className="first" >
            <a href="#">Login/Sign Up</a>
        </div>
        <div className="second">
            <a href="#">Sign Up as a Professional</a>
        </div>
    </div>
    <div className="one">
    <nav>
        <div id="logo">
            <img src="assets/images/logo.png" alt="quickseerve logo" />
        </div>
        <div className="btns">
            <a href="#"><button className="btn">Login/Sign up</button></a>
            <a href="#"><button className="btn1">Sign up as a Professional</button></a>
        </div>
    </nav>
    <div className="text-part">
        <div className="text">
            Connecting you <br/> to your nearest <br/> Service Providers
        </div>
        <div id="drop">
            <div className="btn-bfr">
                <button className="started" id="btn" type="">get started</button>
            </div>
            <div id="drop-text" className="hidden">
                <h2>Where do you need a service?</h2>
                <input type="text" name="Search" placeholder="Select your City" id="Search" />
                <div className="move"><button type="submit">Proceed</button></div>
            </div>
        </div>
    </div>
</div>
        </>
    );
}

export default NavBar;