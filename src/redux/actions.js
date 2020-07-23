import {
    ADD_POST,
    DEL_POST,
    GET_POST,
    GET_POSTS,
    GET_POSTS_REPORT,
    UPDATE_POST
} from "./actionTypes";
import axios from 'axios';

export const getPosts = () => (dispatch, getState) => Promise.resolve().then(() => {
    return axios.get('http://localhost:8020/posts')
                .then(res => dispatch({ type: GET_POSTS, posts: res.data}))
                .catch(err => console.info(err));
});

export const getPostsReport = () => (dispatch, getState) => Promise.resolve().then(() => {
    return axios.get('http://localhost:8020/posts/report')
        .then(res => dispatch({ type: GET_POSTS_REPORT, posts_report: res.data}))
        .catch(err => console.info(err));
});

export const getPost = (id) => (dispatch, getState) => Promise.resolve().then(() => {
    return axios.get('http://localhost:8020/posts/' + id)
                .then(res => dispatch({ type: GET_POST, post: res.data}))
                .catch(err => console.info(err));
});

export const addPost = content => (dispatch, getState) => Promise.resolve().then(() => {
    return axios.post('http://localhost:8020/posts', content)
                .then(res => dispatch({ type: ADD_POST, post: res.data}))
                .catch(err => console.info(err));
});

export const updatePost = content => (dispatch, getState) => Promise.resolve().then(() => {
    return axios.put('http://localhost:8020/posts', content)
                .then(res => dispatch({ type: UPDATE_POST, post: res.data}))
                .catch(err => console.info(err));
});

export const delPost = (id) => (dispatch, getState) => Promise.resolve().then(() => {
    return axios.delete('http://localhost:8020/posts/' + id)
                .then(() => dispatch({ type: DEL_POST, id}))
                .catch(err => console.info(err));
});
