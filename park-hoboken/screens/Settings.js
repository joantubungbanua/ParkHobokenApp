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
// Stylesheet
import styles from '../stylesheet.js';
import { firebase } from '../firebase/config';
import Loader from '../components/Loader';
import TripRewards from '../components/Rewards';
import { Header } from 'react-native-elements';

import { Rating, AirbnbRating } from 'react-native-ratings';

function ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}

function MatchingScreen({ navigation }) {
  
    return (
      <View style={{height:'100%'}}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' }, onPress: () => navigation.toggleDrawer() }}
          centerComponent={{ text: 'Settings', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff', onPress: () => navigation.navigate('Home') }}
          containerStyle={{
            backgroundColor: '#A74F49',
            justifyContent: 'space-around',
          }}
        />

        <View style={styles.container}>
          <Text>This is a settings screen</Text>
        </View>
      </View>
    );
}

export default MatchingScreen;