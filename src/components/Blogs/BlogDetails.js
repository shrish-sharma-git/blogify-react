import React from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const BlogDetails = (props) => {
    const { blog, auth } = props;
    if(!auth.uid) return <Redirect to='/SignIn' />
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
                    <p className="b-postedon">{moment(blog.createdAt.toDate()).calendar()}</p>
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
        blog: blog,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'blogs' }
    ])
)(BlogDetails);