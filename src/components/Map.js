import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      markerPos: {lat: 25.0350, lng: 121.5635}
    }
    this.handleUpButton = this.handleUpButton.bind(this);
  }

  handleUpButton() {
    this.setState({
      markerPos: {
        lat: this.state.markerPos.lat + 0.0001,
        lng: this.state.markerPos.lng
      }
    });

  }

  render() {
    return (
      <div>
          <button onClick={this.handleUpButton}>Up</button>
          <Map
            google={this.props.google}
            style={style}
            zoom={18}
            initialCenter={{
                lat: 25.0340,
                lng: 121.5645
              }}
          >
            <Marker position={this.state.markerPos} />
          </Map>
      </div>
    );
  }
}

const style = {
  margin: '20px',
  width: '100%',
  height: '80%'
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAvV6GrzPfWwufW1iMLwOThnMUTF4NEGkE"
})(MapContainer)
