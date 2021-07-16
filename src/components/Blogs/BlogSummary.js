import React from 'react';

const BlogSummary = ({ blog }) => {
    return (  
        <div className="blog-card">
                <div className="card-content">
                    <p className="b-title">{blog.title}</p>
                    <p className="b-postedby">Posted By: SS</p>
                    <p className="b-postedon">6th August, 2021</p>
                </div>
        </div>
    );
}
 
export default BlogSummary;