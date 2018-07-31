import React, { Component } from 'react';

import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
  Map,
} from 'google-maps-react';


export class MarkerClick extends React.Component {
    onMarkerClick(props, marker, e) {
  // ..
    }
    
    render() {
    return (
        <Map google={this.props.google}>
        <Marker onClick={this.onMarkerClick}
            name={'Current location'} />
        </Map>
    )
}}


export default MarkerClick;

