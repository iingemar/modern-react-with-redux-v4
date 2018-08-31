import React, { Component } from 'react';
// Import React and pull off the Component and call it Component
// const Component = React.Component

class SearchBar extends Component {
    constructor(props) {
        super(props);

        // Each class based component has its own state object.
        // When ever it changes, the component and sub components re renders.
        this.state = {
            userInput: ''
        };
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.userInput}
                    onChange={this.onInputChange}/>
                <div>state.userInput: { this.state.userInput }</div>
            </div>
        );
    }

    onInputChange = (event) =>  {
        const userInput = event.target.value;
        // ONLY manipulate state like this!!11 11
        this.setState({ userInput: userInput });
    }
}

export default SearchBar;