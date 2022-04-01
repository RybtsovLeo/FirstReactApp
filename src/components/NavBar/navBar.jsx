import React, {Component} from "react";
import './NavBar.css'
import {Link} from "react-router-dom";

const NavBar = () => {
    return <nav className="navbar">

        <Link to="/Profile" className="navText">
            <div className="navButt">Profile</div>
        </Link>
        <Link to="/Dialogs" className="navText">
            <div className="navButt">Dialogs</div>
        </Link>
        <Link to="/Profile" className="navText">
            <div className="navButt">News</div>
        </Link>
        <Link to="/Profile" className="navText">
            <div className="navButt">Music</div>
        </Link>
        <Link to="/Profile" className="navText">
            <div className="navButt">Settings</div>
        </Link>
</nav>}

export default NavBar
