import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
import GetLocation from "react-native-get-location";

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
    let lat, long = 0;
    // if null, start in hoboken
    if(!origin){
        lat = 40.7440;
        long = -74.0324;
    }else{
        lat = origin.location.lat;
        long = origin.location.lng;
    }
    
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
        </MapView>
    )
}

export default Map;