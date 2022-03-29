import React from "react";
import './Post.css'

const Post = (props) => {
    return <div className="post">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Taras_Shevchenko_selfportrait_oil_1840-2.jpg/220px-Taras_Shevchenko_selfportrait_oil_1840-2.jpg" className="logoBlog" alt="Taras icon"/>
        <div className="postContent">{props.message}</div>
    </div>
}

export default Post
