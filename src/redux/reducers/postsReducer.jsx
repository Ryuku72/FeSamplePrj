import {  FETCH_POSTS, RECIEVE_POSTS, FETCH_NEXT_POSTS, FETCH_PREV_POSTS } from '../actions/types'

const initialState = {
    posts: [],
    isFetchingPosts: false,
}

export default function (state = initialState, action) {
    switch(action.type){
        case FETCH_POSTS:
        case FETCH_NEXT_POSTS:
        case FETCH_PREV_POSTS:
            return { ...state,
                isFetchingPosts: true
            };
    case RECIEVE_POSTS:
        return { ...state,
            posts: action.payload,
            isFetchingPosts: false
        };
    default:
        return state;
    }
    
}