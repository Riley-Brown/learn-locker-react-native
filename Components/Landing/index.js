import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  features: {
    width: '45%',
    borderColor: '#222',
    borderWidth: 1,
    borderRadius: 5,
    height: 200,
    flex: 0,
    justifyContent: 'space-around',
    padding: 10
  },
  featuresImg: {
    width: '100%',
    height: 100
  }
});

const Landing = () => {
  return (
    <ScrollView>
      <View style={styles.container} contentContainerStyle={{}}>
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
          <View style={styles.features}>
            <Text
              style={{ textAlign: 'center', marginBottom: 20, fontSize: 20 }}
            >
              Share the best resources in your feed
            </Text>
            <Image
              style={styles.featuresImg}
              source={require('../../Assets/img/shareResources.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.features}>
            <Text
              style={{ textAlign: 'center', marginBottom: 5, fontSize: 20 }}
            >
              Save favorites to your locker!
            </Text>
            <Image
              style={styles.featuresImg}
              source={require('../../Assets/img/saveFavorites.png')}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Landing;
