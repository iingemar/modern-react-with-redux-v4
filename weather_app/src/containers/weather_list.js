import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';


class WeatherList extends Component {
    renderWeather(cityData) {
        const temperature = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={ cityData.message }>
                <td>{ cityData.city.name }</td>
                <td>
                    <Sparklines height={120} width={180} data={temperature}>
                        <SparklinesLine color="red"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={pressure}>
                        <SparklinesLine color="red"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={humidity}>
                        <SparklinesLine color="red"/>
                    </Sparklines>
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

