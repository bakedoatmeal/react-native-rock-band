import * as React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {styles} from '../data'


export default function StylesScreen () {


  return (
    <FlatList
      data={styles}
      renderItem={({item}) => <Text style={stylesSheet.styleView}>{item}</Text>}
      style={{backgroundColor: 'black', flexDirection: 'column'}}
    >
    </FlatList>
  );
}


const stylesSheet = StyleSheet.create({
  styleView: {
    margin: 5,
    padding: 5,
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    backgroundColor: 'black',
    color: 'white',
  }

});
