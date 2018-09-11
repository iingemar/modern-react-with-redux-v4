import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=banan123';

export function fetchPosts() {
    const url = `${ROOT_URL}/posts${API_KEY}`;

    console.log('action_fetchPosts');
    console.log('[GET] ' + url);
    // Returns a promise
    const request = axios.get(url);

    // redux-promise middleware will intercept this, stop and wait for the request to finish.
    // Then create a new action with FETCH_POSTS and set payload to the request result.
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(blogPost, callback) {
    const url = `${ROOT_URL}/posts${API_KEY}`;

    console.log('createPost', blogPost);
    console.log('[POST] ' + url);
    const request = axios.post(url, blogPost).then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {
    const url = `${ROOT_URL}/posts/${id}${API_KEY}`;

    console.log('fetchPost', id);
    console.log('[GET] ' + url);
    const request = axios.get(url);

    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id, callback) {
    const url = `${ROOT_URL}/posts/${id}${API_KEY}`;

    console.log('deletePost', id);
    console.log('[GET] ' + url);
    axios.delete(url).then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    }
}