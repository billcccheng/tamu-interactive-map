import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Map extends Component {
  constructor(props) {
    super(props);
    this.googleMaps = this.props.google.maps;
    this.mapRef = React.createRef();
    this.state = {
      markerPos: {lat: 30.6185, lng: -96.3365}
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleArrow.bind(this));
  }

  componentDidMount() {
    this.loadMap();
    this.renderMarker();
  }

  componentDidUpdate(prevProps, prevState) {
    this.moveMarker();
    this.reCenterMap();
    //if (prevProps.google !== this.props.google) {
      //this.loadMap();
    //}
  }

  reCenterMap = () => {
    if(this.map){
      const center = new this.googleMaps.LatLng(this.state.markerPos.lat,this.state.markerPos.lng);
      this.map.panTo(center);
    }
  }

  moveMarker = () => {
    const newPos = new this.googleMaps.LatLng(this.state.markerPos.lat,this.state.markerPos.lng);
    this.marker.setPosition(newPos);
  }

  loadMap = () => {
    if (this.props && this.props.google) {
      const mapRef = this.mapRef.current;
      const node = ReactDOM.findDOMNode(mapRef);

      const center = new this.googleMaps.LatLng(30.6185, -96.3365);
      const zoom = 17;
      const mapConfig = {
        ...{},
        scrollwheel: false,
        center: center,
        zoom: zoom };
      this.map = new this.googleMaps.Map(node, mapConfig);
    }
  }

  moveCalculation = (direction) => {
    let newLat = null;
    let newLng = null;
    switch(direction) {
      case "ArrowUp":
      case "w":
        newLat = this.state.markerPos.lat + 0.0001;
        newLng = this.state.markerPos.lng;
        break;
      case "ArrowDown":
      case "s":
        newLat = this.state.markerPos.lat - 0.0001;
        newLng = this.state.markerPos.lng;
        break;
      case "ArrowRight":
      case "d":
        newLat = this.state.markerPos.lat;
        newLng = this.state.markerPos.lng + 0.0001;
        break;
      case "ArrowLeft":
      case "a":
        newLat = this.state.markerPos.lat;
        newLng = this.state.markerPos.lng - 0.0001;
        break;
      case "q":
        newLat = this.state.markerPos.lat + 0.0001;
        newLng = this.state.markerPos.lng - 0.0001;
        break;
      case "e":
        newLat = this.state.markerPos.lat + 0.0001;
        newLng = this.state.markerPos.lng + 0.0001;
        break;
      case "z":
        newLat = this.state.markerPos.lat - 0.0001;
        newLng = this.state.markerPos.lng - 0.0001;
        break;
      case "c":
        newLat = this.state.markerPos.lat - 0.0001;
        newLng = this.state.markerPos.lng + 0.0001;
        break;
      default:
        newLat = this.state.markerPos.lat;
        newLng = this.state.markerPos.lng;
        break;
    }

    this.setState({
      markerPos: {
        lat: newLat,
        lng: newLng
      }
    });
  }

  handleArrow = (event) => {
    this.moveCalculation(event.key)
  }

  handleButton = (event) => {
    const direction = event.target.id;
    this.moveCalculation(direction);
  }

  renderMarker = () => {
    const pos = new this.googleMaps.LatLng(this.state.markerPos.lat, this.state.markerPos.lng);
		const pref = {
      map: this.map,
      position: pos
    };
    this.marker = new this.googleMaps.Marker(pref);
  }

  render() {
    const mapStyle = {
      height: '90%',
      width: '100%'
    };

    return (
      <div>
        <div style={mapStyle} ref={this.mapRef}></div>
        <button id='ArrowUp' onClick={this.handleButton}>Up</button>
        <button id='ArrowDown' onClick={this.handleButton}>Down</button>
        <button id='ArrowRight' onClick={this.handleButton}>Right</button>
        <button id='ArrowLeft' onClick={this.handleButton}>Left</button>
      </div>
    );
  }
}


export default Map;
