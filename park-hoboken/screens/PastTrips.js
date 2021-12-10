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
          centerComponent={{ text: 'Past Trips', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff', onPress: () => navigation.navigate('Home') }}
          containerStyle={{
            backgroundColor: '#A74F49',
            justifyContent: 'space-around',
          }}
        />
        <View style={styles.defaultView}>
    
          <Text>Previous Trips:</Text>
          <Text>USE FLAT LIST FROM COMPLETE TRIP SCREEN!!</Text>
          <View>
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
        </View>
      </View>
    );
  }

  export default ProfileScreen;