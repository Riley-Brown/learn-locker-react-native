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
  Button,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 20,
    flex: 1
  }
});

export default class Landing extends Component {
  render() {
    return (
      <ScrollView>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontSize: 23, paddingBottom: 10 }}>
            See What your Friends Are Learning
          </Text>
          <Image
            source={require('../../Assets/img/landing.png')}
            style={{ width: '95%', height: 200 }}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'rgb(29, 161, 242)',
              width: '80%',
              padding: 10,
              marginTop: 20,
              borderRadius: 20
            }}
          >
            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>
              Get Started!
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '95%',
              marginTop: 30
            }}
          >
            <View
              style={{
                width: '45%',
                borderColor: '#222',
                borderWidth: 1,
                borderRadius: 5,
                height: 200,
                flex: 0,
                justifyContent: 'space-around',
                padding: 10
              }}
            >
              <Text
                style={{ textAlign: 'center', marginBottom: 20, fontSize: 20 }}
              >
                Share the best resources in your feed
              </Text>
              <Image
                style={{ width: '100%', height: 100 }}
                source={require('../../Assets/img/shareResources.png')}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                width: '45%',
                height: 200,
                flex: 0,
                justifyContent: 'space-around',
                borderColor: '#222',
                borderWidth: 1,
                borderRadius: 5,
                padding: 10
              }}
            >
              <Text
                style={{ textAlign: 'center', marginBottom: 5, fontSize: 20 }}
              >
                Save favorites to your locker!
              </Text>
              <Image
                style={{ width: '100%', height: 100 }}
                source={require('../../Assets/img/saveFavorites.png')}
                resizeMode="contain"
              />
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    );
  }
}
