import * as React from 'react';
import { View, Text } from 'react-native';

class Profile extends React.Component {

  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize:40,fontWeight: 'bold'}}>Profile Screen</Text>
      </View>
    );
  }

}

export default Profile;