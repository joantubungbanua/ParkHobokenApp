import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styles from '../stylesheet.js';

class RoutingScreen extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        myMarkers:[{text: 'Stevens', lat: 40.74485, lng: -74.023957}, 
                   {text: 'Train', lat: 40.734966, lng: -74.027596}],
        center: {lat: 40.744530, lng: -74.025770},
        zoom:15,
      }
    }
  
    render() {

        const Marker = ({text}) => {
          return (
              <div style={{fontWeight: 'normal'}, {fontSize: 10}}>
                <img src={'https://openclipart.org/download/262009/Map-Pin.svg'} width="20"/>
              </div>
          );
        }
        const apiIsLoaded = (map,maps) => {
        const directionsService = new maps.DirectionsService();
        const directionsDisplay = new maps.DirectionsRenderer();
        directionsService.route({
            origin: '1 Castle Point Terrace, Hoboken, New Jersey 07030, United States',
            destination: '1 Hudson Place, Hoboken, New Jersey 07030, United States',
            travelMode: 'DRIVING'
        }, (response, status) => {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
              const routePolyline = new google.maps.Polyline({
                path: response.routes[0].overview_path
              });
              routePolyline.setMap(map);
            } else {
              window.alert('Directions request failed due to ' + status);
              }
            });
      };
  
      return (
        // Important! Always set the container height explicitly
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{ key: ''}} 
              defaultCenter={this.state.center} 
              defaultZoom={this.state.zoom} 
              yesIWantToUseGoogleMapApiInternals 
              onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}>{
                //Add a list of Markers to Your Map
                this.state.myMarkers.map( (each) => 
                <Marker 
                    lat = {each.lat}
                    lng = {each.lng}
                />
                )
                }      
            </GoogleMapReact> 
          </div>
      );
    }
  }
  
  //<TransportSummary transports={this.state.myMarkers}/>
  export default RoutingScreen;
