import React from 'react';
import BlogList from '../Blogs/BlogList';
import Notifications from './Notifications';

const Home = () => {
    return ( 
        <div className="home-container">
                <BlogList />
                <Notifications />
        </div>
    );
}
 
export default Home;