export const createBlog = (blog) => {
    return (dispatch, getState) => {
        // We make Async Requests Here as Dispatch is paused and will resume after our Async Requests
        dispatch({
            type: 'CREATE_BLOG',
            blog: blog
        });
    }
}