import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onSubmit(event) {
        // Tells the browser to not submit the form on enter/clicking submit
        event.preventDefault();

        // Go fetch weather data
        this.props.fetchWeather(this.state.term);

        // Clear input
        this.setState({ term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="input-group">
                <input
                    placeholder="Search city"
                    className="form-control"
                    onChange={this.onInputChange}
                    value={this.state.term}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// Don't use mapStateToProps
export default connect(null, mapDispatchToProps)(SearchBar);