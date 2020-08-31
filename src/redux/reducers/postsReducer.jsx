import {  FETCH_POSTS, RECIEVE_POSTS, FETCH_SINGLE_POST, RECIEVE_SINGLE_POST } from '../actions/types'

const initialState = {
    posts: [],
    post: [],
    postIndex: "",
    postId: "",
    isFetchingPosts: false,
    isFetchingSingle: false
}

export default function (state = initialState, action) {
    switch(action.type){
        case FETCH_POSTS:
            return { 
                ...state,
                isFetchingPosts: true
            };
    case RECIEVE_POSTS:
        return { 
            ...state,
            posts: action.payload,
            postIndex: action.payload,
            isFetchingPosts: false
        };
    case FETCH_SINGLE_POST:
        return { 
            ...state,
            isFetchingSingle: true
        };
    case RECIEVE_SINGLE_POST:
        return { 
            ...state,
            post: [action.payload],
            isFetchingSingle: false
        };
    default:
        return state;
    }
}