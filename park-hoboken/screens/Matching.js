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

function MatchingScreen({ navigation }) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    return (

      <View style={styles.defaultView}>
        <View>
          <Text>Please wait while we match you with someone</Text>
          <Loader/>
        </View>

      </View>
    );
}

export default MatchingScreen;