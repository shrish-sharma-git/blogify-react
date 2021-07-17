export const createBlog = (blog) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // We make Async Requests Here as Dispatch is paused and will resume after our Async Requests
        const firestore = getFirestore();
        firestore.collection('blogs').add({
            ...blog,
            authorFirstName: "Slim",
            authorLastName: "Shady",
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_BLOG',
                blog: blog
            });
        }).catch((err) => {
            dispatch({
                type: 'CREATE_BLOG_ERROR',
                err
            })
        })
    }
};