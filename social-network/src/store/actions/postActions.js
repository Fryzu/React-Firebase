export const createPost = (post) => {
    // If we did it without react thunk
    // return {
    //     type: "ADD_POST",
    //     post: post, 
    // }

    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('posts').add({
            ...post, // post.title post.content from the post argument
            authorFirstName: 'Jaxson',
            authorLastName: 'Burns',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: "CREATE_POST", post: post})
        }).catch((error) => {
            dispatch({type: "CREATE_POST_ERROR", error});
        });
    }
};
