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
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ width: 300, height: 100 }} source={require('./assets/ParkHoboken.png')}>
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

      <Button
        title="Login"
        onPress={() => navigation.navigate('Details')}
      />

      <Button
        title="New to ParkHoboken? Create an account."
        onPress={() => navigation.navigate('Departing')}
      />

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

      <Button
      title="Create Account"
      onPress={() => navigation.navigate('ParkHoboken')}
      />
    </View>
  );
}

function DepartingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Current Location</Text>
    </View>
  );
}




const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn:
  {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  }
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="ParkHoboken" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Departing" component={DepartingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;