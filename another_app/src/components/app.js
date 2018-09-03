import React, { Component } from 'react';
import BookList from '../containers/book-list';


export default class App extends Component {
    render() {
        return (
            <div>
                <div>React simple starter</div>
                <BookList />
            </div>
        );
    }
}
