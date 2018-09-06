import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=banan123';

export function fetchPosts() {
    console.log('action_fetchPosts');
    console.log('[GET] ' + `${ROOT_URL}/posts${API_KEY}`);
    // Returns a promise
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    // redux-promise middleware will intercept this, stop and wait for the request to finish.
    // Then create a new action with FETCH_POSTS and set payload to the request result.
    return {
        type: FETCH_POSTS,
        payload: request
    }
}