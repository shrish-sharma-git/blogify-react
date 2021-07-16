import React from 'react';
import BlogList from '../Blogs/BlogList';
import Notifications from './Notifications';

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
        blogs: state.blog.blogs
    }
}


export default connect(mapStateToProps)(Home);