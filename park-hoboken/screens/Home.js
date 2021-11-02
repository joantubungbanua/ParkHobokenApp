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
// import '../config/styles' as styles;

function HomeScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
  
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ width: 300, height: 100 }} source={require('../assets/ParkHoboken.png')}>
        </Image>
        <View>
          <TextInput
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
  
        <View>
          <TextInput
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
  
        <View style = {{ marginVertical: 10 }}>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Profile')}
        /></View>
  
        <View style = {{ marginVertical: 10 }}>
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