import * as React from 'react';
import { View, Text } from 'react-native';
import User from '../models/User';

class Splash extends React.Component {

  constructor() {
    super();
    User.getUsers((v) => {
      this.props.navigation.navigate('Home', {
        users: v
      })
    })
  }

  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize:40,fontWeight: 'bold'}}>Fun Team</Text>
      </View>
    );
  }

}

export default Splash;