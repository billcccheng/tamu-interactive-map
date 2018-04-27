import React, { Component } from 'react';
//import Map from './Map';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAvV6GrzPfWwufW1iMLwOThnMUTF4NEGkE"
})(MapContainer)
