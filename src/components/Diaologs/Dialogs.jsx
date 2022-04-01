import React from "react";
import './Dialogs.css'
import {Link} from "react-router-dom";

const dialogItem = (props) => {
    return (
        <div className="messageBody">
            <img src="" alt="Message Logo" className="messageLogo"/>
            <div className="messageContent">
                <div className="messageName">Leliy</div>
                <div className="messageText">Please, no</div>
            </div>
        </div>
    )
}

const Dialogs = (props) => {
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
            <div className="dialogNav">Friends:
                <div className="dialogNavItem">
                    <div className="dialogNavName">
                        Leliy
                    </div>
                </div>
                <div className="dialogNavItem">
                    <div className="dialogNavName">
                        Eva
                    </div>
                </div>
                <div className="dialogNavItem">
                    <div className="dialogNavName">
                        Lisichka
                    </div>
                </div>
                <div className="dialogNavItem">
                    <div className="dialogNavName">
                        Milka
                    </div>
                </div>
                <div className="dialogNavItem">
                    <div className="dialogNavName">
                        Kerch
                    </div>
                </div>


            </div>
            <div className="dialogBody">
                <dialogItem />
                <dialogItem name="Mother" message="Wat`s up?"/>
                <div className="messageBody">
                    <img src="" alt="Message Logo" className="messageLogo"/>
                    <div className="messageContent">
                        <div className="messageName">Eva</div>
                        <div className="messageText">How are u?</div>
                    </div>
                </div>
                <div className="messageBody">
                    <img src="" alt="Message Logo" className="messageLogo"/>
                    <div className="messageContent">
                        <div className="messageName">Lisichka</div>
                        <div className="messageText">No plans, only genshin</div>
                    </div>
                </div>
                <div className="messageBody">
                    <img src="" alt="Message Logo" className="messageLogo"/>
                    <div className="messageContent">
                        <div className="messageName">Milka</div>
                        <div className="messageText">He don`t wanna</div>
                    </div>
                </div>
                <div className="messageBody">
                    <img src="" alt="Message Logo" className="messageLogo"/>
                    <div className="messageContent">
                        <div className="messageName">Kerch</div>
                        <div className="messageText">I request nudes</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
