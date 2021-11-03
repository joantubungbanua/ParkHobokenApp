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
import { firebase } from '../firebase/config'




function CreateAccountScreen({ navigation }) {



  const [firstName, setFirst_Name] = useState('')
  const [make, setMake] = useState('')
  const [model, setModel ] = useState('')
  const [color, setColor] = useState('')
  const [license, setLicense] = useState('')
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('')
 
 



  const onRegisterPress = () => {
  

    firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
        const uid = response.user.uid
        const data = {
          id: uid,
          email,
          firstName,
          make,
          model,
          color,
          license,
          email,

        };
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate('Profile', { user: data })
          })
          .catch((error) => {
            alert(error)

          });



      })
      .catch((error) => {
        alert(error)
      });
  }


  return (
    <View style={styles.defaultView}>
      <Text>Enter Profile Details</Text>
      {/* First name */}
      <View>
        <TextInput
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setFirst_Name(text)}
          value={firstName}
        />
      </View>
      {/* Car Make/Model/Color */}
      <View>
        <TextInput
          placeholder="Vehicle Make"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setMake(text)}
          value = {make}
        />
      </View>
      <View>
        <TextInput
          placeholder="Vehicle Model"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setModel(text)}
          value = {model}
        />
      </View>
      <View>
        <TextInput
          placeholder="Vehicle Color"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setColor(text)}
          value = {color}
        />
      </View>
      {/* License Plate */}
      <View>
        <TextInput
          placeholder="License Plate"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setLicense(text)}
          value = {license}
        />
      </View>
      {/* Email/Password */}
      <View>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
          value = {email}
      
        />
      </View>
      <View>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
          value = {password}
        />
      </View>

      <Button
        title="Create Account"
        onPress={() => onRegisterPress()}
      />
    </View>
  );
}

export default CreateAccountScreen;