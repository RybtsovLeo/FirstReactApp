import React from "react";
import './Dialogs.css'


const Dialogs = () => {
    return (
        <div className="Dialog">
            <div className="dialogHeader">
                <div className="Header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Taras_Shevchenko_selfportrait_oil_1840-2.jpg/220px-Taras_Shevchenko_selfportrait_oil_1840-2.jpg" alt="Dialog Logo" className="dialogLogo"/>
                </div>
                <div className="dialogNameStatus">
                    <div className="dialogStatus">online</div>
                    <div className="dialogName">Taras Shevchenko</div>
                </div>
            </div>
            <div className="dialogNav">Friends</div>
            <div className="dialogBody">
                Messages
            </div>
        </div>
    )
}

export default Dialogs
