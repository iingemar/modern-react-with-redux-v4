import React, { Component } from 'react';

class GoogleMap extends Component {
    // Life cycle method. Gets called after this component has been rendered on screen.
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            }
        });
    }

    render() {
        // Available as this.refs.map, the element Google maps will render to.
        return <div ref="map" />
    }
}

export default GoogleMap;