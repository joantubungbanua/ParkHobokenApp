import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class NavigatorScreen extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={
            {
              lat: 40.74453,
              lng: -74.02577
            }
          }
        />
      );
    }
  }

export default GoogleApiWrapper({
    apiKey: ''
  })(NavigatorScreen);

