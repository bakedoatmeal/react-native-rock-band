import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {bands, styles, fans, active, split, countries} from '../data.js'

export default function StatsScreen() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
      <Text style={stylesSheet.text}>Metal 🤘</Text>
      <Text style={stylesSheet.text}>Count: {bands.length}</Text>
      <Text style={stylesSheet.text}>Fans: {`${fans},000`}</Text>
      <Text style={stylesSheet.text}>Countries: {countries.length}</Text>
      <Text style={stylesSheet.text}>Active: {active}</Text>
      <Text style={stylesSheet.text}>Split: {split}</Text>
      <Text style={stylesSheet.text}>Styles: {styles.length}</Text>
    </View>
  );
}


const stylesSheet = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  }
});