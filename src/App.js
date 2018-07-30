import React, { Component } from 'react';

import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
  Map,
  GoogleApiWrapper
} from 'google-maps-react';


export class MapContainer extends Component {
  render() {
    return (
      <Map 
          google={this.props.google} 
          zoom={14}
          
      >
       <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCPSWk9Gj32S52481URJOAI3kcqgx3KYzk')
})(MapContainer)

