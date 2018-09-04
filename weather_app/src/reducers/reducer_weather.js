import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    console.log('Action recieved', action);

    switch (action.type) {
        case FETCH_WEATHER:
            // Don't manipulate state directly! Like state.push(action.payload.data)
            // Array.prototype.concat() is used to merge two or more arrays.
            // This method does not change the existing arrays, but instead returns a new array.
            return state.concat([action.payload.data])
            // Or like this. Note! The payload.data comes first in the array now.
            // return [ action.payload.data, ...state ]

    }

    return state;
}