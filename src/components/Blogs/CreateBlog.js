import React, { useState } from 'react';

const CreateBlog = () => {
    // Defining Hooks
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    //Handler Functions
    const handleBlogTitleChange = (e) => {
        setTitle(e.target.value);
    }   

    const handleBlogContentChange = (e) => {
        setContent(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, content);
    }    

    return (  
        <div className="createblog-container">
            <form onSubmit={handleSubmit} className="create-blog">
            <p className="create-blog-title">Create Blog</p>
                <div className="input-field">
                    <label htmlFor="create-blog"></label>
                    <input id="create-blog" type="text" autoComplete="off" onChange={handleBlogTitleChange} placeholder="Title of the Blog"/>
                </div>
                <div className="input-field">
                    <label htmlFor="blog-content"></label>
                    <input id="blog-content" type="text" autoComplete="off" onChange={handleBlogContentChange} placeholder="Enter Content Here"/>
                </div>
                <div className="submit-blog">
                    <button className="create-btn">
                        Create Blog
                    </button>
                </div>
            </form>    
        </div>
    );
}
 
export default CreateBlog;