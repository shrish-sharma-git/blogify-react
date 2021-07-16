import React from 'react';
import { Link } from 'react-router-dom';
import BlogSummary from './BlogSummary';

const BlogList = ({ blogs }) => {
    return (  
        <div className="blog-list">
            { blogs && blogs.map(blog => {
                return (
                    <Link to={'blog/' + blog.id}>
                        <BlogSummary blog={blog} key={blog.id}/>
                    </Link>
                )
            })}
        </div>
    );
}
 
export default BlogList;