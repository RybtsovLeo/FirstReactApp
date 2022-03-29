import React from "react";
import './Blog.css'
import Post from "./Post/Post";

const Blog = () => {
    return <div className="blog">
        <div className="blogTitle blogItem">My Blog</div>
        <textarea className="newPost blogItem" placeholder=" New Post" id="newPostText"></textarea>
        <button className="blogButt">Add new Post</button>
        <div className="oldPosts blogItem">
            <Post message = 'Today will be a great day)' />
            <Post message = 'My fist post!' />
        </div>
    </div>
}



export default Blog
