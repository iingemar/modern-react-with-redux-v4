export function selectBook(book) {
    console.log('selectBook', book);
    // selectBook is an actionCreator that needs to create an action. An object with a type property.
    // Usually has two values: a type - the purpose of the action, and a payload.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}