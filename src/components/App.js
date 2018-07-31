import React, { Component } from 'react';

import {
  InfoWindow,
  Marker,
  Map,
  GoogleApiWrapper
} from 'google-maps-react';


class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  render() {
    return (
      <Map 
        google={this.props.google}
        //defaultStyle={myStyle}
        defaultCenter={{
          lat: 52.406374,
          lng: 16.925168100000064
        }}
        defaultZoom={13}
        onClick={this.onMapClicked} 
      >
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

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>

      </Map>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyCPSWk9Gj32S52481URJOAI3kcqgx3KYzk')
})(MapContainer)

