import React from 'react';
import BlogList from '../Blogs/BlogList';
import Notifications from './Notifications';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { connect } from 'react-redux';

const Home = ({ blogs }) => {
    console.log(blogs);
    return ( 
        <div className="home-container">
                <BlogList blogs={blogs}/>
                <Notifications />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        blogs: state.firestore.ordered.blogs
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'blogs'}
    ])
)(Home);