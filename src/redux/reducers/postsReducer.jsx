import {  FETCH_POSTS, RECIEVE_POSTS, FETCH_NEXT_POSTS, FETCH_PREV_POSTS } from '../actions/types'

const initialState = {
    posts: [],
    postIndex: 1,
    postId: 1,
    isFetchingPosts: false,
}

export default function (state = initialState, action) {
    switch(action.type){
        case FETCH_POSTS:
            return { 
                ...state,
                postIndex: state.postIndex,
                isFetchingPosts: true
            };
    case RECIEVE_POSTS:
        return { 
            ...state,
            posts: action.payload,
            isFetchingPosts: false
        };
    case FETCH_NEXT_POSTS:
        return {
            ...state,
            postIndex: state.postId + action.payload,
        }
    case FETCH_PREV_POSTS:
        return {
            ...state,
            postId: state.postId - action.payload,
        }
    default:
        return state;
    }
    
}