// Stylesheet
import styles from '../stylesheet.js';
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
import Icon from 'react-native-vector-icons/FontAwesome';

function SelectionScreen({ navigation }) {
    return (
      <View style={styles.defaultView}>
        <View style = {{ marginVertical : 60}}>
        </View>
      <View style={styles.defaultView}>
        <Text>Welcome to the Selection Screen!</Text>
        <View style={{ flexDirection:"row", marginVertical : 30  }}>
          <View style={styles.button}>
            <Button
              title="Arriver"
              onPress={() => navigation.navigate('Navigator')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Departer"
              onPress={() => navigation.navigate('Navigator')}
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

  export default SelectionScreen;