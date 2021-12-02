import React, { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../slices/navSlice";
import GetLocation from "react-native-get-location";
import MapViewDirections from "react-native-maps-directions";
import { useRef } from "react";

// BELOW CODE IS FOR GETTING USERS LOCATION
// CURRENTLY NOT WORKING - ONLY GETTING NULL

// function componentDidMount() {
//     if (hasLocationPermission) {
//       Geolocation.getCurrentPosition(
//           (position) => {
//             console.log(position);
//           },
//           (error) => {
//             // See error code charts below.
//             console.log(error.code, error.message);
//           },
//           { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//       );
//     }
// }

// const hasLocationPermission = await GeoLocation.requestAuthorization();
// console.log(componentDidMount());
// try{
//     const location = await GetLocation.getCurrentPosition();
// }
// catch(e){


const Map = () => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);

    let lat, long = 0;
    // if null, start in hoboken
    if(!origin){
        lat = 40.7440;
        long = -74.0324;
    }else{
        lat = origin.location.lat;
        long = origin.location.lng;
    }
    
    useEffect(() => {
      if (!origin || !destination) return;

      mapRef.current.fitToSuppliedMarkers(["origin", "destination"])
    })

    return (
        <MapView
          style={tw `flex-1`}
          mapType="mutedStandard"
          initialRegion={{
            
            latitude: lat,
            // location.latitude,
            // 40.7440,
            // origin.latitude.lat,
            longitude: long,
            // location.longitude,
            // -74.0324,
            // origin.longitude.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >

          {origin && destination && (
            <MapViewDirections 
              origin={origin.description}
              destination={destination.description}
              apikey="AIzaSyALKxWILdqGOSRkqkw9zMgwvsLR27Xo2Kc"
              strokeWidth={3}
              strokeColor="red"
            
            />
          )}

          {origin?.location && (
            <Marker
              coordinate={{
                latitude: lat,
                longitude: long,
              }}
              title="Origin"
              description={origin.description}
              identifier="origin"
            />
          )}

          {destination?.location && (
            <Marker
              coordinate={{
                latitude: lat,
                longitude: long,
              }}
              title="Destination"
              description={destination.description}
              identifier="destination"
            />
          )}
        </MapView>
    )
}

export default Map;