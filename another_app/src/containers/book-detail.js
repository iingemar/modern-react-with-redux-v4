import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
    render() {
        console.log('BookDetail.render', this.props.book);

        if (!this.props.book) {
            return <div>Select a book.</div>
        }

        return (
            <div>
                <div>Title: { this.props.book.title }</div>
                <div>Pages: { this.props.book.pages }</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);