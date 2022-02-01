import React, { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../slices/navSlice";
import GetLocation from "react-native-get-location";
import MapViewDirections from "react-native-maps-directions";
import { useRef } from "react";
import { GOOGLE_MAPS_APIKEY } from '@env';

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
  let latd, longd = 0;
  // if null, start in hoboken
  if (!origin) {
    lat = 40.7440;
    long = -74.0324;
  } else {
    lat = origin.location.lat;
    long = origin.location.lng;
  }

  if (!destination) {
    latd = 40.717495;
    longd = -74.04411;
  } else {
    latd = destination.location.lat;
    longd = destination.location.lng;
  }

  /*
  // Currently creating null errors

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"]);
  })
  */
  return (
    <MapView
      style={tw`flex-1`}
      ref={map => {this.map = map}}
      //mapType="mutedStandard"
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
      onMapReady={() => {this.map.fitToSuppliedMarkers(['origin','destination'],{ edgePadding: 
        {top: 100,
          right: 100,
          bottom: 100,
          left: 100}
  
      })}}
    >

      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey="AIzaSyBWXPpJy9-ZMer3ahmL5wMI2UjX9NZv5C4"
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
          identifier={"origin"}
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: latd,
            longitude: longd,
          }}
          title="Destination"
          description={destination.description}
          identifier={"destination"}
        />
      )}
    </MapView>
  )
}

export default Map;
