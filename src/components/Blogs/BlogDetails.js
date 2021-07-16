import React from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

const BlogDetails = (props) => {
    const { blog } = props;
    if(blog){
        return (  
            <div className="blog-content">
                <div className="header">
                    <p className="blog-title">
                        {blog.title}
                    </p>
                    <p className="b-content">
                        {blog.content}
                    </p>
                </div>
                <hr />
                <div className="user-data">
                    <p className="b-postedby">Posted By: {blog.authorFirstName} {blog.authorLastName}</p>
                    <p className="b-postedon">6th August, 2021</p>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="blog-content">
                <p>Loading Content...</p>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const blogs = state.firestore.data.blogs;
    const blog = blogs ? blogs[id] : null;
    return {
        blog: blog
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'blogs' }
    ])
)(BlogDetails);