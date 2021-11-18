import React from 'react';
import {View} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from "tailwind-react-native-classnames";
import { selectDestination, selectOrigin } from '../slices/navSlice';
import { useRef } from "react";
// import MapViewDirections from "react-native-maps-directions";
import NavigateCard from '../components/NavigateCard';

const mapStyles = {
  width: '100%',
  height: '100%'
};



function MapScreen({ navigation }) {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);

    // useEffect{() => { 
    //   if (!origin || ! destination) return;
    //   mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
    //     edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
    //   });
    // }, [origin, destination]);

    console.log(origin);
    return (
      <View>
        <MapView
          style={tw `flex-1`}
          mapType="mutedStandard"
          initialRegion={{
            latitude: 40.7440,
            // origin.latitude.lat,
            longitude: -74.0324,
            // origin.longitude.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* {origin?.location && (
            <Marker
              coordinate={{
                latitude: origin.location.lat,
                longitude: origin.latitude.lng,
              }}
              title="Origin"
              description={origin.description}
              identifier="origin"
            />
          )} */}
        </MapView>
        {/* <NavigateCard /> */}
      </View>
    );
};

export default MapScreen;
