import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
				initialCenter={{
            lat: 24.854885,
            lng: 121.081807
          }}
      >
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAvV6GrzPfWwufW1iMLwOThnMUTF4NEGkE"
})(MapContainer)
