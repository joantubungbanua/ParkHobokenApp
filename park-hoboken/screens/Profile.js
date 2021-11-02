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

function ProfileScreen({ navigation }) {
    const [password, changePassword] = useState('');
    return (
      <View style={styles.defaultView}>
        <Image 
          style={{width: 100, height: 100}}
          source={require('../assets/profile_pic1.png')} />
  
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

  export default ProfileScreen;