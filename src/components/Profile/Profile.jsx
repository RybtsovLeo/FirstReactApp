import React, {Component} from "react";
import './Profile.css'
import Blog from "./Blog/Blog";

const Profile = () => {
    return <div className="body">
        <div className="backgroundImg">
            <img src="https://wallup.net/wp-content/uploads/2017/03/28/436404-ultra-wide-photography-nature-748x316.png" className="backImg" alt="body image"/>
        </div>
        <div className="border"></div>
        <div className="personalInfo">
            <div className="personalLogo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Taras_Shevchenko_selfportrait_oil_1840-2.jpg/220px-Taras_Shevchenko_selfportrait_oil_1840-2.jpg" className="logo" alt="Taras icon"/>
            </div>
            <div className="personalText">
                <div className="personalName">Taras Shevchenko</div>
                <div className="personalDescription">
                    Date of Birth:
                </div>
            </div>
        </div>
        <div className="Blog">
            <Blog />
        </div>

    </div>
}

export default Profile
