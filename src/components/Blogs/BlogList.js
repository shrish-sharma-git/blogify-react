import React from 'react';
import { Link } from 'react-router-dom';
import BlogSummary from './BlogSummary';

const BlogList = ({ blogs }) => {
    return (  
        <div className="blog-list">
            { blogs && blogs.map(blog => {
                return (
                    <Link to={'blog/' + blog.id} key={blog.id}>
                        <BlogSummary blog={blog}/>
                    </Link>
                )
            })}
        </div>
    );
}
 
export default BlogList;