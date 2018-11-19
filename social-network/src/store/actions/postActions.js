export const createPost = (post) => {
    // If we did it without react thunk
    // return {
    //     type: "ADD_POST",
    //     post: post, 
    // }

    return (dispatch, getState) => {
        dispatch({type: "CREATE_POST", post: post})
    }
};
