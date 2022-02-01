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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ height: '100%' }}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff', onPress: () => navigation.navigate('Profile') }}
        containerStyle={{
          backgroundColor: '#A74F49',
          justifyContent: 'space-around',
        }}
      />

      <View style={styles.defaultView}>

        <View style={{ flex: 1, alignItems: 'center', textAlignVertical: 'top', padding: 10, width: '100%' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Trip Complete</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Rewards:</Text>
          <TripRewards />
        </View>

        <View>
          <Text>Survey questions? Unsure if needed. Maybe just put a check on the routing screen to say they parked/departed</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center', textAlignVertical: 'bottom', padding: 10, width: '100%' }}>
          {/* https://www.npmjs.com/package/react-native-ratings */}
          <Rating
            type='custom'
            ratingColor='#A74F49'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            imageSize={30}
            style={{ paddingVertical: 10 }}
          />
          <Text>Feedback:</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Feedback"
            />
          </View>
        </View>


      </View>
    </View>
  );
}

export default MatchingScreen;