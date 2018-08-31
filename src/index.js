import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// https://babeljs.io/repl

const YOUTUBE_API_KEY = 'AIzaSyAeY6ehp-7Ty1xMsWyIS7qXPXZR840Qc4c';

const App = () => {
    return (
        <div>
            <div>hello.</div>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('.container'));