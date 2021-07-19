export const createBlog = (blog) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // We make Async Requests Here as Dispatch is paused and will resume after our Async Requests
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('blogs').add({
            ...blog,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
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

export const deleteBlog = (id) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('blogs').doc(id).delete()
            .then(() => {
                dispatch({ type: 'BLOG_DELETE_SUCCESS' });
            }).catch((err) => {
                dispatch({ type: 'BLOG_DELETE_ERROR' });
            })
    }
}