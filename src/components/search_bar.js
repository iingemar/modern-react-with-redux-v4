import React, { Component } from 'react';
// Import React and pull off the Component and call it Component
// const Component = React.Component


class SearchBar extends Component {
    render() {
        return <input onChange={this.onInputChange}/>;
    }

    onInputChange(event) {
        const value = event.target.value;
        console.log(value);
    }
}

export default SearchBar;