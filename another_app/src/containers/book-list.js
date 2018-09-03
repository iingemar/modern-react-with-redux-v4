import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from "../actions/index";


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        console.log('BookList.render', this.props);
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

// Anything returned from this function will end up as props on the bookList container.
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all our reducers.
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from component to container. Connect produces a container that is aware of state in redux.
// Needs to know about this new dispatch method, selectBook and make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);