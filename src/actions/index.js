
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const featchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(featchPosts());


    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(featchUser(id)));

    //Refactoring the code with _.chain() method

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(featchUser(id)))
        .value()
};



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

// SOLUTION USING _.memoize function 

// export const featchUser = (id) => dispatch => _featchUser(id, dispatch);

// const _featchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FEATCH_USER', payload: response.data });
// });

