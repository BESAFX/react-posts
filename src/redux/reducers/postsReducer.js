import {
    ADD_POST,
    DEL_POST,
    GET_POST,
    GET_POSTS, UPDATE_POST
} from "../actionTypes";

const initState = {
    post: {},
    posts: []
}

export default function (state = initState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case GET_POST:
            return {
                ...state,
                post: action.post
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            };
        case UPDATE_POST:
            const index = state.posts.indexOf(state.posts.find(post => post.id === action.post.id));
            state.posts[index] = action.post;
            return state;
        case DEL_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        default:
            return state;
    }
}

