import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Faicons from 'react-native-vector-icons/FontAwesome';
import Fa5icons from 'react-native-vector-icons/FontAwesome5';
import MCicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from './tabs/Chat';
import Map from './tabs/Map';
import Profile from './tabs/Profile';
import Notif from './tabs/Notif';

const Tab = createBottomTabNavigator();

class Home extends React.Component {

  render() {
    return (
      <Tab.Navigator screenOptions={this.tabBarIcon} tabBarOptions={{
        labelStyle: {
          display: 'none'
        },safeAreaInsets: true,
        inactiveTintColor: "gray",
        activeTintColor: "#366a89",
        style: {
          backgroundColor: "#fafafa",
          elevation: 0,
          borderTopWidth: 1,
          borderColor: "#000"
        }
      }}>
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Notif" component={Notif} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }

  tabBarIcon ({route}){
    return {
      tabBarIcon: ({focused, color, size}) => {
        let icon = null;
        // if (focused) alert(route.name);
        if (route.name == "Chat") {
          icon = (<MCicons name="message" color={color} size={size}></MCicons>);
        }else if (route.name == "Profile") {
          icon = <Fa5icons name="user-alt" color={color} size={size}></Fa5icons>;
        }else if (route.name == "Map") {
          icon = (<Fa5icons name="map-marker-alt" color={color} size={size}></Fa5icons>);
        }else if (route.name == "Notif") {
          icon = (<Faicons name="bell" color={color} size={size}></Faicons>)
        }
        return icon;
      }
    }
  };

}

StyleSheet.create({
  container: {
  }
})

export default Home;