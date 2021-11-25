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
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from "tailwind-react-native-classnames";
import { Header } from 'react-native-elements';


function SelectionScreen({ navigation }) {
  const dispatch = useDispatch();
    return (
      <View style={{height:'100%'}}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' }}}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff', onPress: () => navigation.navigate('Profile') }}
          containerStyle={{
            backgroundColor: '#A74F49',
            justifyContent: 'space-around',
          }}
        />
        <View>
          <View style={tw `h-1/2`}>
            <View>
              <GooglePlacesAutocomplete
                    placeholder="Where From?"
                    styles={{
                      container: {
                        flex: 0,
                      },
                      textInput: {
                        fontSize: 18,
                      },
                    }}
                    onPress={(data, details = null) => {
                      dispatch(setOrigin({
                        location: details.geometry.location,
                        description: data.description
                      }))

                      dispatch(setDestination(null));
                    }}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                      key: GOOGLE_MAPS_APIKEY,
                      language: "en",
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                  />
                  {/* <NavOptions /> */}
            </View>
          {/* <View style = {{ marginVertical : 60}}>
          </View>
        <View style={styles.defaultView}>
          <Text>Welcome to the Selection Screen!</Text> */}
          <View style={tw `h-1/2`}>
            <View style={styles.buttonView}>
              <Button
                color="#A74F49"
                title="Arriver"
                onPress={() => navigation.navigate('Map')}
              />
            </View>
            <View style={styles.buttonView}>
              <Button
                color="#A74F49"
                title="Departer"
                onPress={() => navigation.navigate('Map')}
              />
            </View>
            <View style={styles.buttonView}>
              <Button
                color="#A74F49"
                title="Route"
                onPress={() => navigation.navigate('Routing')}
              />
            </View>
          </View>
        {/* // <View style={{ flexDirection: "row",
        //                position: 'absolute',
        //                left: 5,
        //                top: 5,
        //           }} >
        //   <View style={{ marginHorizontal: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //   <Icon.Button name = 'bars' size = {30}
        //           backgroundColor="#A74F49"
        //           onPress={() => navigation.navigate('Profile')}> </Icon.Button></View> */}
          { /* <View style={{ marginHorizontal: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>New Trip</Text></View> */}
        </View>
      </View>
    </View>
    );
  }

  export default SelectionScreen;