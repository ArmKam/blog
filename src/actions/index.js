import jsonPlaceholder from '../apis/jsonPlaceholder';


export const featchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FEATCH_POSTS', payload: response.data })
    // return {
    //     type: 'FEATCH_POSTS',
    //     payload: promise
    // };
};

export const featchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FEATCH_USER', payload: response.data });

};

