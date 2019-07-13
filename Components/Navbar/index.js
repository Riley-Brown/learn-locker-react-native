import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomColor: 'rgb(29, 161, 242)',
    borderBottomWidth: 1,
    height: 70
  }
});
export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>locker.dev</Text>
        <Image
          source={require('../../Assets/img/logo.png')}
          style={{ width: 40, height: 40 }}
        />
        <Button
          onPress={() => console.log(123)}
          title="Log In"
          color="rgb(29, 161, 242)"
        />
      </View>
    );
  }
}
