import React from 'react';

const BlogDetails = (props) => {
    const id = props.match.params.id;
    return (  
        <div className="blog-content">
            <div className="header">
                <p className="blog-title">
                    Project Title - {id}
                </p>
                <p className="b-content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero facere libero praesentium officia saepe quisquam sequi optio ratione voluptates, blanditiis adipisci cum, accusamus aliquid assumenda molestias rem architecto? Mollitia, cumque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta dolore hic perferendis vitae quod nisi, nesciunt alias aperiam repellat.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quo molestias esse optio corporis quisquam, enim ratione, repudiandae laborum sed voluptates iste numquam modi doloremque voluptatem nihil. Iste hic ipsum ipsa qui a eius itaque quod omnis officiis, nobis veritatis sequi autem rerum nihil? Dolores fuga debitis nihil soluta, sequi consectetur error reprehenderit beatae facere ex officia saepe, nesciunt eaque architecto incidunt quibusdam dolorem repellendus eius cupiditate! Harum, ducimus tenetur? Recusandae quis, perferendis, blanditiis sunt unde, architecto soluta exercitationem dolor assumenda quibusdam praesentium sapiente nihil labore iste facere eum eveniet sit nostrum saepe? Sit tenetur dignissimos cumque? Beatae, veritatis placeat.
                </p>
            </div>
            <hr />
            <div className="user-data">
                <p className="b-postedby">Posted By: SS</p>
                <p className="b-postedon">6th August, 2021</p>
            </div>
        </div>
    );
}
 
export default BlogDetails;