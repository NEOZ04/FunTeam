import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Faicons from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

class Chat extends React.Component {

  render() {
    let Messages = [];
    for (let i=0;i<10;i++){
        Messages.push(<View style={styles.msg}>
          <View style={styles.msg_info}>
            <Text style={styles.msg_info_name}>Your Name</Text>
            <Text style={styles.msg_info_time}>16:00</Text>
            <Text style={styles.msg_info_status}>
              <Faicons name="clock" size={10}></Faicons>
            </Text>
          </View>
          <View style={styles.msg_content}>
            <Text style={styles.msg_content_text}>
                Hello World!
            </Text>
          </View>
        </View>);
    }
    return (
      <ScrollView style={styles.container}>
        {Messages}
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16
  },
  msg: {
    alignItems: 'flex-start',
    marginTop: 16
  },
  msg_info: {
    flexDirection: 'row'
  },
  msg_info_name: {
    fontSize: 10,
    fontWeight: 'bold'
  },
  msg_info_time: {
    fontSize: 10,
    marginLeft: 4
  },
  msg_info_status: {
    fontSize: 10,
    marginLeft: 4,
    marginTop: 2
  },
  msg_content: {
    padding: 8,
    backgroundColor: "#eee",
    marginTop: 4,
    borderRadius: 4,
  },
  msg_sender: {
      backgroundColor: "lightblue",
  },
  msg_content_text: {

  }
});

export default Chat;