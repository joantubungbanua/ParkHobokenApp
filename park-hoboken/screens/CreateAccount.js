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
  const [model, setModel] = useState('')
  const [color, setColor] = useState('')
  const [license, setLicense] = useState('')
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('')





  const onRegisterPress = () => {


    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
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
           
            navigation.navigate('ParkHoboken', { user: data })
            console.log('registration success')
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
      <Image 
        style={{width: 100, height: 100}}
        source={require('../assets/profile_pic1.png')}
      />
      <Text>Enter Profile Details</Text>
      {/* First name */}
      <View style={styles.inputView}>
        <TextInput
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setFirst_Name(text)}
          value={firstName}
        />
      </View>
      {/* Car Make/Model/Color */}
      <View style={styles.inputView}>
        <TextInput
          placeholder="Vehicle Make"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setMake(text)}
          value={make}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Vehicle Model"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setModel(text)}
          value={model}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Vehicle Color"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setColor(text)}
          value={color}
        />
      </View>
      {/* License Plate */}
      <View style={styles.inputView}>
        <TextInput
          placeholder="License Plate"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setLicense(text)}
          value={license}
        />
      </View>
      {/* Email/Password */}
      <View style={styles.inputView}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
          value={email}

        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      <Button
        color="#A74F49"
        title="Create Account"
        onPress={() => onRegisterPress()}
      />
    </View>
  );
}

export default CreateAccountScreen;