import { FETCH_POSTS, RECIEVE_POSTS } from './types'

export const fetchPosts = () => dispatch => {
    dispatch({
        type: FETCH_POSTS
    })
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(response => response.json())
        .then(json =>
            dispatch({
                type: RECIEVE_POSTS,
                payload: json
            }))
        .catch((err) => console.log(err))
};
