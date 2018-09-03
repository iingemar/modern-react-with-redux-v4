import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        );
    }
}

// Whenever application state changes, bookList will re render.
function mapStateToProps(state) {
    // Whatever is returned from here will show up as props inside BookList
    return {
        books: state.books
    }
}

// Takes function and component. Connect produces a container that is aware of state in redux
export default connect(mapStateToProps)(BookList);