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
import NavOptions from '../components/NavOptions.js';

function SelectionScreen({ navigation }) {
    return (
      <View style={styles.defaultView}>
        <View style = {{ marginVertical : 60}}>
        </View>
      <View style={styles.defaultView}>
        <Text>Welcome to the Selection Screen!</Text>
        <View style={{ flexDirection:"row", marginVertical : 30  }}>
          <View style={styles.buttonView}>
            <Button
              color="#A74F49"
              title="Arriver"
              onPress={() => navigation.navigate('Map')}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              color="#A74F49"
              title="Departer"
              onPress={() => navigation.navigate('Map')}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              color="#A74F49"
              title="Route"
              onPress={() => navigation.navigate('Routing')}
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
                backgroundColor="#A74F49"
                onPress={() => navigation.navigate('Profile')}> </Icon.Button></View>
        <View style={{ marginHorizontal: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>New Trip</Text></View>
        </View>
        <NavOptions />
      </View>
    );
  }

  export default SelectionScreen;