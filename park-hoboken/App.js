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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

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

      <View style = {{ marginVertical: 10 }}>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Profile')}
      /></View>

      <View style = {{ marginVertical: 10 }}>
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
      onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
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
      <View style={{ flex: 1, alignItems: 'left', justifyContent: 'center', borderColor:'gray', borderWidth:3, marginVertical : 10}}>
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
      <View style = {{ marginVertical : 10 }}>
        <Button title="Current Rewards"/>
      </View>
      <View style = {{ marginVertical : 10 }}>
        <Button title="New Trip" onPress={() => navigation.navigate('Selection')} />
      </View>
    </View>
  );
}

function SelectionScreen({ navigation }) {
  return (
    <View>
      <View style = {{ marginVertical : 60, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
      <View style={{ marginHorizontal: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Icon.Button name = 'bars' size = {30}
              onPress={() => navigation.navigate('Profile')}> </Icon.Button></View>
      <View style={{ marginHorizontal: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Selection" component={SelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
