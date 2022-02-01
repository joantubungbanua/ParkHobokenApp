import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from '../components/Icons'
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import PastTrips from '../screens/PastTrips';
import Rewards from '../screens/Rewards';
import Settings from '../screens/Settings';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {

// ICONS: https://oblador.github.io/react-native-vector-icons/

  return (
    <Drawer.Navigator initialRouteName="Home"
    //     screenOptions={{
    //     headerShown: false
    //   }}
      >
      <Drawer.Screen name="Profile" component={Profile}
      options={{
        header: () => null,
        drawerIcon: config => <Icon.MaterialCommunityIcons
            size={23}
            name="account" />
        }}/>
      <Drawer.Screen name="Rewards" component={Rewards}
      options={{
        header: () => null,
        drawerIcon: config => <Icon.MaterialCommunityIcons
            size={23}
            name="gift" />
        }}/>
      <Drawer.Screen name="Past Trips" component={PastTrips}
      options={{
        header: () => null,
        drawerIcon: config => <Icon.MaterialCommunityIcons
            size={23}
            name="car" />
        }}/>
      <Drawer.Screen name="Settings" component={Settings}
      options={{
        header: () => null,
        drawerIcon: config => <Icon.Ionicons
            size={23}
            name="md-settings" />
        }}/>
      <Drawer.Screen name="Home" component={Home} options={{header: () => null}}/>
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;