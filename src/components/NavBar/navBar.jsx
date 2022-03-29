import React, {Component} from "react";
import './NavBar.css'
import {Link} from "react-router-dom";

const NavBar = () => {
    return <nav className="navbar">
        <div className="navButt">
            <Link to="/Profile">Profile</Link>
        </div>
        <div className="navButt">
            <Link to="/Dialogs" className="navText">Messages</Link>
        </div>
        <div className="navButt">
            <a className="navText">News</a>
        </div>
        <div className="navButt">
            <a className="navText">Music</a>
        </div>
        <div className="navButt">
            <a className="navText">Settings</a>
        </div>
</nav>}

export default NavBar
