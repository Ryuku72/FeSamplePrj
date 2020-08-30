import { FETCH_POSTS, RECIEVE_POSTS, FETCH_NEXT_POSTS, FETCH_SINGLE_POST, RECIEVE_SINGLE_POST } from './types'

export const fetchPosts = (request) => dispatch => {
    dispatch({
        type: FETCH_POSTS,
    })
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + request)
        .then(response => response.json())
        .then(json =>
            dispatch({
                type: RECIEVE_POSTS,
                payload: json
            }))
        .catch((err) => console.log(err))
};

export const fetchNextPost = nr => dispatch => {
    dispatch({
        type: FETCH_NEXT_POSTS,
        payload: nr
    })
}

export const fetchSinglePost = (request) => dispatch => {
    dispatch({
        type: FETCH_SINGLE_POST,
        payload: request
    })
    fetch('https://jsonplaceholder.typicode.com/posts/' + request)
        .then(response => response.json())
        .then(json =>
            dispatch({
                type: RECIEVE_SINGLE_POST,
                payload: json
            }))
        .catch((err) => console.log(err))
};
