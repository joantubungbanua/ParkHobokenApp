import * as React from 'react';
import { useState } from 'react';
import { Button, 
  View, 
  Text, 
  TextInput, 
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
 } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{uri:'./assets/logo.JPG'}}/>
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
        onPress={() => navigation.navigate('Details')}
      />

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  const [password, changePassword] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image 
        style={{width: 100, height: 100}}
        source={require('./assets/profile_pic1.png')} />

      <View style={styles.inputView}>
        <TextInput
          placeholder="Change Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => changePassword(password)}
        />
      </View>

      <Text>Previous Trips:</Text>
      <View style={{ flex: 1, alignItems: 'left', justifyContent: 'center', borderColor:'gray', borderWidth:3}}>
          <ScrollView>       
              <Text>
                8th and Wash{"\n"}
                9th and Hudson{"\n"}
                2nd and Court{"\n"}
                1st and Park{"\n"}
                3rd and Willow{"\n"}
              </Text>      
          </ScrollView>
      </View>
      <View>
        <Button title="Current Rewards" />
      </View>

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
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:"#FF1493",
 }
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="ParkHoboken" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;