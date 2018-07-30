import React, { Component } from 'react';

import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
} from 'react-google-maps';

const InitialMap = withGoogleMap(props => {
  
  return (
    <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={13}
    defaultCenter={{ lat: 52.406374, lng: 16.925168100000064}}
  >
    <Marker
    key={index}
    position={Marker.position}
    onClick={() => props.onMarkerClick(marker)}
    />
    </GoogleMap>
  )
})

/*import Map from './map';

class App extends Component {
  render(){
    return (
      <div>
        <Map />
      </div>
    );
  }
}

export default App;*/
