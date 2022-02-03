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
          leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' }, onPress: () => navigation.toggleDrawer() }}
          centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff', onPress: () => navigation.navigate('Home') }}
          containerStyle={{
            backgroundColor: '#A74F49',
            justifyContent: 'space-around',
          }}
        />
        <View style={styles.defaultView}>
          <Image 
            style={{width: 100, height: 100}}
            source={require('../assets/profile_pic1.png')}></Image>
    
          <View style={styles.inputView}>
            <TextInput
              placeholder="Change Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => changePassword(password)}
            />
          </View>
        </View>
      </View>
    );
  }

  export default ProfileScreen;