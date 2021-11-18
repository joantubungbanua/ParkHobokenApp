import * as React from 'react';
import { useState } from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import toRoute from './screens/Maps';
// Screens
import HomeScreen from './screens/Home';
import CreateAccountScreen from './screens/CreateAccount';
import ProfileScreen from './screens/Profile';
import SelectionScreen from './screens/Selection';
import RoutingScreen from './screens/routes';
import MapScreen from './screens/Maps';
// Stylesheet
import styles from './stylesheet.js';

// Redux
import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="ParkHoboken" component={HomeScreen} />
          <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Selection" component={SelectionScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Routing" component={RoutingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
