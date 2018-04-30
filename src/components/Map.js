import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Marker } from 'google-maps-react';

export class Map extends Component {
  constructor() {
    super();
    this.mapRef = React.createRef();
    this.state = {
      markerPos: {lat: 25.0350, lng: 121.5635}
    }
  }

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }


  reCenterMap = () => {
    const googleMaps = this.props.google.maps;
    const currentLoc = this.state.markerPos;
    //if(map){
      //const center = new googleMaps.LatLng(currentLoc.lat, currentLoc.lng);
      //map.panTo(center);
    //}
  }

  loadMap = () => {
    if (this.props && this.props.google) {
      const maps = this.props.google.maps;
      const mapRef = this.mapRef.current;
      const node = ReactDOM.findDOMNode(mapRef);

      const center = new maps.LatLng(25.0340, 121.5645);
      const zoom = 18;
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      });
      this.map = new maps.Map(node, mapConfig);
    }
  }

  handleUpButton = () => {
    this.setState({
      markerPos: {
        lat: this.state.markerPos.lat + 0.0001,
        lng: this.state.markerPos.lng
      }
    });

  }

  render() {
    const mapStyle = {
      height: '90%',
      width: '100%'
    };

    return (
      <div>
        <div style={mapStyle} ref={this.mapRef}></div>
        <button onClick={this.handleUpButton}>Up</button>
      </div>
    );
  }
}


export default Map;
