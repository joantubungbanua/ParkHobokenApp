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

function HomeScreen({ navigation }) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = () => { 
    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then((response) => {
        const uid = response.user.uid
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .get()
          .then(firestoreDocument => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore!")
              return;
            }
            const user = firestoreDocument.data()
            navigation.navigate('Profile', {user})

          })
          .catch(error => {
            alert(error)
          });

      })
      .catch(error => { 
        alert(error)
      })
  }

    return (
  
      <View style={styles.defaultView}>
        <Image style={{ width: 300, height: 100 }} source={require('../assets/ParkHoboken.png')}>
        </Image>
        <View>
          <TextInput
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setEmail(text)}
            value = {email}
          />
        </View>
  
        <View>
          <TextInput
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
  
        <View style={styles.button}>
        <Button
          title="Login"
          onPress={() => onLoginPress()}
        /></View>
  
        <View style={styles.button}>
        <Button
          title="New to ParkHoboken? Create an account."
          onPress={() => navigation.navigate('CreateAccount')}
        /></View>
  
  
        <TouchableOpacity>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    );
}

export default HomeScreen;