import React, { Component } from 'react';

import {
  Marker,
  Map,
} from 'google-maps-react';


export class Markers extends Component {
  
  render() {  
    return (
        <Map>
        <Marker
        title={'Park Cytadela'}
        name={'SoMA'}
        position={{lat: 52.42167420000001, lng: 16.936194}} />
        <Marker
        title={'Cathedral of Poznan'}
        name={'SoMA'}
        position={{lat: 52.4115064, lng: 16.948639800000024}} />
        <Marker
        title={'Rusalka Lake'}
        name={'SoMA'}
        position={{lat: 52.4265609, lng: 16.87878230000001}} />
        <Marker
        title={'Chocolate Museum'}
        name={'SoMA'}
        position={{lat: 52.4064838, lng: 16.932899799999973}} />
        <Marker
        title={'Gate of Poznan'}
        name={'SoMA'}
        position={{lat: 52.412412, lng: 16.951546000000008}} />
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        </Map>
    )
    }
}


export default Markers;