import * as React from 'react';
import { View, Text } from 'react-native';
// import firebase from 'firebase';
import User from './src/models/User';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Component
import Home from './src/components/Home';
import Splash from './src/components/Splash';

const Stack = createStackNavigator();

class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}

// <Stack.Screen name="Splash" options={{
//   headerShown: false
// }} component={Splash} />

export default App;