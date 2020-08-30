import { FETCH_POSTS, RECIEVE_POSTS, FETCH_NEXT_POSTS } from './types'

export const fetchPosts = (request) => dispatch => {
    dispatch({
        type: FETCH_POSTS,
        payload: 1
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