import React from 'react';
import moment from 'moment';

const BlogSummary = ({ blog }) => {
    return (  
        <div className="blog-card">
                <div className="card-content">
                    <p className="b-title">{blog.title}</p>
                    <p className="b-postedby">{blog.authorFirstName} {blog.authorLastName}</p>
                    <p className="b-postedon">{moment(blog.createdAt.toDate()).calendar()}</p>
                </div>
        </div>
    );
}
 
export default BlogSummary;