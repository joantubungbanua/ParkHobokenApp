// Stylesheet
import styles from '../stylesheet.js';
import * as React from 'react';
import { useState } from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavOptions from '../components/NavOptions.js';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../slices/navSlice";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from "tailwind-react-native-classnames";
import { Header } from 'react-native-elements';

function DeparterScreen({ navigation }) {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    return (
        <View style={styles.defaultView}>
            <View>
                
            </View>
        </View>
    );
}