import React, { Component } from 'react';
import { render } from 'react-dom';
import MapGL, { Marker, Popup, NavigationControl, FullscreenControl, GeolocateControl } from 'react-map-gl';

import ControlPanel from './ControlPanel';
import Pin from './Pin';
import PlaceInfo from './PlaceInfo';

import PLACES from '../../../data/places.json';

const TOKEN = 'pk.eyJ1IjoibGFhbmF5YW0zMzMiLCJhIjoiY2p6anJrMTl4MDZyZjNnc2F5ZWhscjVlMiJ9.uj60cln4FkSFnRx6XtsrfA'; // Set your mapbox token here

const fullscreenControlStyle = {
    position: 'absolute',
    top: 0,
    left: 40,
    padding: '10px'
};

const navStyle = {
    position: 'absolute',
    top: 36,
    left: 0,
    padding: '10px'
};

const geolocateStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 10
};


export default class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 40.416775,
                longitude: -3.703790,
                zoom: 10,
                bearing: 0,
                pitch: 0,
                width: 0, 
                heigth: 0
            },
            popupInfo: null
        };
    }

    _updateViewport = viewport => {
        this.setState({ viewport });
    };

     _renderPlaceMarker = (place, index) => {
        return (
            <Marker key={`marker-${index}`} longitude={place.longitude} latitude={place.latitude}>
                <Pin size={20} onClick={() => this.setState({ popupInfo: place })} />
            </Marker>
        );
    };
    

    _renderPopup() {
        const { popupInfo } = this.state;

        return (
            popupInfo && (
                <Popup
                    tipSize={5}
                    anchor="top"
                    longitude={popupInfo.longitude}
                    latitude={popupInfo.latitude}
                    closeOnClick={false}
                    onClose={() => this.setState({ popupInfo: null })}
                >
                    <PlaceInfo info={popupInfo} />
                </Popup>
            )
        );
    }

    render() {
        const { viewport } = this.state;

        return (
            <MapGL
                {...viewport}
                width="80vw"
                height="60vh"
                mapStyle="mapbox://styles/laanayam333/cjzjsu5c307jx1cpfbmvzhvgr"
                onViewportChange={this._updateViewport}
                mapboxApiAccessToken={TOKEN}
            >

                {PLACES.map(this._renderPlaceMarker)}

                {this._renderPopup()}

                <div className="fullscreen" style={fullscreenControlStyle}>
                    <FullscreenControl />
                </div>

                <div className="nav" style={navStyle}>
                    <NavigationControl />
                </div>

                <ControlPanel containerComponent={this.props.containerComponent} />

                <GeolocateControl
                    style={geolocateStyle}
                    zoom={2}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />

            </MapGL>
        );
    }
}

export function renderToDom(container) {
    render(<MapContainer />, container);
}
