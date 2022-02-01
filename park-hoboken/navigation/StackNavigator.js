import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from '../navigation/DrawerNavigator'
import CreateAccount from '../screens/CreateAccount';
import Login from '../screens/Login';
import Matching from '../screens/Matching';
import TripComplete from '../screens/TripComplete';
import Maps from '../screens/Maps';
import Routes from '../screens/Routes';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen name="Login" component={Login}
        options={{header: () => null}} />
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{header: () => null}}
        // options={{
        //   title: 'Main',
        //   headerStyle: {
        //     backgroundColor: '#09f',
        //   },
        // }}
      />
      <Stack.Screen name="CreateAccount" component={CreateAccount} 
      options={{
          title: 'Create Account',
          headerStyle: {
            backgroundColor: '#A74F49',
          },
        }}/>
      <Stack.Screen name="Matching" component={Matching} options={{
          title: 'Matching',
          headerStyle: {
            backgroundColor: '#A74F49',
          },
        }}/>
      <Stack.Screen name="TripComplete" component={TripComplete} options={{
          title: 'Trip Complete',
          headerStyle: {
            backgroundColor: '#A74F49',
          },
        }}/>
      <Stack.Screen name="Maps" component={Maps} options={{
          title: 'Maps',
          headerStyle: {
            backgroundColor: '#A74F49',
          },
        }}/>
      <Stack.Screen name="Routes" component={Routes} options={{
          title: 'Routes',
          headerStyle: {
            backgroundColor: '#A74F49',
          },
        }}/>
    </Stack.Navigator>
  );
};
export default StackNavigator;