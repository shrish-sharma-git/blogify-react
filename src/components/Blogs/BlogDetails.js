import React from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import moment from 'moment';
import { deleteBlog } from '../../store/actions/blogActions';

const BlogDetails = (props) => {
    const { blog, auth, dispatchDeleteBlog } = props;
    if(!auth.uid) return <Redirect to='/SignIn' />

    const handleDelete = (e) => {
        dispatchDeleteBlog(e, props.id);
        props.history.push('/');
    }

    if(blog){
        return (  
            <div className="blog-content">
                <div className="header">
                    <p className="blog-title">
                        {blog.title}
                    </p>
                    <button onClick={handleDelete} className="delete-btn">X</button>
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
        auth: state.firebase.auth,
        id: id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchDeleteBlog: (e, id) => {
            e.preventDefault()
            dispatch(deleteBlog(id))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'blogs' }
    ])
)(BlogDetails);