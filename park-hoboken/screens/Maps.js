import React from 'react';
import {View} from "react-native";
import { useSelector } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from "tailwind-react-native-classnames";
import { selectDestination, selectOrigin } from '../slices/navSlice';
import { useRef } from "react";
// import MapViewDirections from "react-native-maps-directions";
import NavigateCard from '../components/NavigateCard';
import Map from '../components/Map';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

function MapScreen({ navigation }) {
    return (
      <View>
        <View style={tw `h-full`}>
          {/* Map Section */}
          <Map />
        </View>
        
        {/* <NavigateCard /> */}
      </View>
    );
};

export default MapScreen;
