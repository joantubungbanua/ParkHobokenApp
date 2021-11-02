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
import NavigatorScreen from './screens/maps';
// Screens
import HomeScreen from './screens/Home';
import CreateAccountScreen from './screens/CreateAccount';
import ProfileScreen from './screens/Profile';
import SelectionScreen from './screens/Selection';
// Stylesheet
import styles from './stylesheet.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="ParkHoboken" component={HomeScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Selection" component={SelectionScreen} />
        <Stack.Screen name="Navigator" component={NavigatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
