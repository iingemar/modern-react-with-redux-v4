import _ from 'lodash';

import {
    FETCH_POSTS,
    FETCH_POST,
} from "../actions";

export default function(state = {}, action) {
    console.log('reducer_posts', action);
    switch (action.type) {
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;
            // Important! Add the new post to the previously fetched posts
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}