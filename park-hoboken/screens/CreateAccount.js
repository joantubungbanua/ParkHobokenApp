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

function CreateAccountScreen({ navigation }) {
    return (
      <View style={styles.defaultView}>
        <Text>Enter Profile Details</Text>
        {/* First name */}
        <View style={styles.inputView}>
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#003f5c"
            onChangeText={(first_name) => setFirst_Name(first_name)}
          />
        </View>
        {/* Car Make/Model/Color */}
        <View style={styles.inputView}>
          <TextInput
            placeholder="Vehicle Make"
            placeholderTextColor="#003f5c"
            onChangeText={(make) => setFirst_Name(make)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Vehicle Model"
            placeholderTextColor="#003f5c"
            onChangeText={(model) => setFirst_Name(model)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Vehicle Color"
            placeholderTextColor="#003f5c"
            onChangeText={(color) => setFirst_Name(color)}
          />
        </View>
        {/* License Plate */}
        <View style={styles.inputView}>
          <TextInput
            placeholder="License Plate"
            placeholderTextColor="#003f5c"
            onChangeText={(license) => setFirst_Name(license)}
          />
        </View>
        {/* Email/Password */}
        <View style={styles.inputView}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(create_email) => setFirst_Name(create_email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={(password) => setFirst_Name(password)}
          />
        </View>
  
        <Button style={styles.buttonView}
        color="#A74F49"
        title="Create Account"
        onPress={() => navigation.navigate('Profile')}
        />
      </View>
    );
  }

  export default CreateAccountScreen;