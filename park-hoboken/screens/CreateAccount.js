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

function CreateAccountScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Enter Profile Details</Text>
        {/* First name */}
        <View>
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#003f5c"
            onChangeText={(first_name) => setFirst_Name(first_name)}
          />
        </View>
        {/* Car Make/Model/Color */}
        <View>
          <TextInput
            placeholder="Vehicle Make"
            placeholderTextColor="#003f5c"
            onChangeText={(make) => setFirst_Name(make)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Vehicle Model"
            placeholderTextColor="#003f5c"
            onChangeText={(model) => setFirst_Name(model)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Vehicle Color"
            placeholderTextColor="#003f5c"
            onChangeText={(color) => setFirst_Name(color)}
          />
        </View>
        {/* License Plate */}
        <View>
          <TextInput
            placeholder="License Plate"
            placeholderTextColor="#003f5c"
            onChangeText={(license) => setFirst_Name(license)}
          />
        </View>
        {/* Email/Password */}
        <View>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(create_email) => setFirst_Name(create_email)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={(password) => setFirst_Name(password)}
          />
        </View>
  
        <Button
        title="Create Account"
        onPress={() => navigation.navigate('Profile')}
        />
      </View>
    );
  }

  export default CreateAccountScreen;