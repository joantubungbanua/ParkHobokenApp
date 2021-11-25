import * as React from 'react';
import { useState } from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
// Stylesheet
import styles from '../stylesheet.js';
import { Header } from 'react-native-elements';

function ProfileScreen({ navigation }) {
    const [password, changePassword] = useState('');
    return (
      <View style={{height:'100%'}}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' }}}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff', onPress: () => navigation.navigate('Profile') }}
          containerStyle={{
            backgroundColor: '#A74F49',
            justifyContent: 'space-around',
          }}
        />
        <View style={styles.defaultView}>
          <Image 
            style={{width: 100, height: 100}}
            source={require('../assets/profile_pic1.png')} />
    
          <View style={styles.inputView}>
            <TextInput
              placeholder="Change Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => changePassword(password)}
            />
          </View>
    
          <Text>Previous Trips:</Text>
          <Text>USE FLAT LIST FROM COMPLETE TRIP SCREEN!!</Text>
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
          <View style={styles.buttonView}>
            <Button color="#A74F49" title="Current Rewards"/>
          </View>
          <View style={styles.buttonView}>
            <Button color="#A74F49" title="New Trip" onPress={() => navigation.navigate('Selection')} />
          </View>
        </View>
      </View>
    );
  }

  export default ProfileScreen;