import * as React from 'react';
import { useState } from 'react';
import { Button, 
  View, 
  Text, 
  TextInput, 
  StyleSheet,
  TouchableOpacity,
  Image,
 } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

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

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Test Selection Screen."
        onPress={() => navigation.navigate('Selection')}
      />
    </View>
  );
}

function SelectionScreen({ navigation }) {
  return (
    <View>
      <View style = {{ marginVertical : 60, flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
        <Text>New Trip</Text>
      </View>
    <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Selection Screen!</Text>
      <View style={{ flexDirection:"row", marginVertical : 30  }}>
        <View style={{ marginHorizontal: 10 }}>
          <Button
            title="Arriver"
            //onPress={() => navigation.navigate('Details')}
          />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Button
            title="Departer"
            //onPress={() => navigation.navigate('Details')}
          />
        </View>
      </View>
    </View>
    <View style={{ flexDirection: "row",
                   position: 'absolute',
                   left: 5,
                   top: 5,
              }} >
      <View style={{ marginHorizontal: 10 }}>
      <Icon.Button name = 'bars' size = {30}
              onPress={() => navigation.navigate('Details')}> </Icon.Button></View>
        <View style={{ marginHorizontal: 10 }}>
        <Text>New Trip</Text></View>
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
        <Stack.Screen name="Selection" component={SelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;