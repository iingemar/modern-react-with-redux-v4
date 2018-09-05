import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';


class WeatherList extends Component {
    renderWeather(cityData) {
        const temperature = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={ cityData.message }>
                <td>{ cityData.city.name }</td>
                <td>
                    <Chart data={temperature} color="blue" units="K" />
                </td>
                <td>
                    <Chart data={pressure} color="red" units="hPa" />
                </td>
                <td>
                    <Chart data={humidity} color="orange" units="%" />
                </td>
            </tr>
        );
    };

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
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

