import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {
    renderWeather(cityData) {
        return (
            <tr key={ cityData.message }>
                <td>{ cityData.city.name }</td>
                <td>{ cityData.city.name }</td>
                <td>{ cityData.city.name }</td>
                <td>{ cityData.city.name }</td>
            </tr>
        );
    };

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }
}

// { weather } pulls out weather from state.weather
function mapStateToProps({ weather }) {
    return { weather }; // ES6 syntax. Same as { weather: weather }
}

// this.props.weather is now available in WeatherList
export default connect(mapStateToProps)(WeatherList);

