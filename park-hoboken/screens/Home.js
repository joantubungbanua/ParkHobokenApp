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

function HomeScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
  
      <View style={styles.defaultView}>
        <Image style={{ width: 300, height: 100 }} source={require('../assets/ParkHoboken.png')}>
        </Image>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
  
        <View style={styles.button, styles.loginBtn}>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Profile')}
        /></View>
  
        <View style={styles.button}>
        <Button
          title="New to ParkHoboken? Create an account."
          onPress={() => navigation.navigate('Details')}
        /></View>
  
  
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    );
}

export default HomeScreen;