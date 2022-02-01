// import * as React from 'react';
// import { useState } from 'react';
// import {
//   Button,
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView
// } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // Screens
// import HomeScreen from './screens/Home';
// import CreateAccountScreen from './screens/CreateAccount';
// import ProfileScreen from './screens/Profile';
// import SelectionScreen from './screens/Selection';
// import RoutingScreen from './screens/Routes';
// import MapScreen from './screens/Maps';
// import MatchingScreen from './screens/Matching';
// import TripCompleteScreen from './screens/TripComplete';
// // Stylesheet
// import styles from './stylesheet.js';

// // Redux
// import { Provider } from "react-redux";
// import { store } from "./store";

// // Safe area context for header
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     // <SafeAreaProvider>...</SafeAreaProvider>
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="ParkHoboken" component={HomeScreen} />
//           <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
//           <Stack.Screen name="Profile" component={ProfileScreen} />
//           <Stack.Screen name="Selection" component={SelectionScreen} />
//           <Stack.Screen name="Map" component={MapScreen} />
//           <Stack.Screen name="Routing" component={RoutingScreen} />
//           <Stack.Screen name="Matching" component={MatchingScreen} />
//           <Stack.Screen name="TripComplete" component={TripCompleteScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }


// export default App;
