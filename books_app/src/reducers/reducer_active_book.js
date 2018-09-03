// State arg is not application state, only the state this reducer is responsible for.
export default function(state = null, action) {
    console.log('ActiveBookReducer', state, action);
    switch (action.type) {
        case 'BOOK_SELECTED':
            // Never return a mutated state! Make a fresh object and return!
            // Don't do like this:
            // state.title = action.payload.title
            return action.payload;
    }

    // Handles the case when we first boot the app up and no book is selected.
    // Can't handle undefined. So if it's undefined we will set it to null above.
    return state;
}