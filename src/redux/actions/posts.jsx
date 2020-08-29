import { FETCH_POSTS } from './types'

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(json =>
            dispatch({
                type: FETCH_POSTS,
                payload: json
            }))
        .catch((err) => console.log(err))
};
