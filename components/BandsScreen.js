import * as React from 'react';
import {bands} from '../data'
import { Text, View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function BandsScreen() {


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', }}>
      <FlatList data={bands}
        renderItem={({item}) => {
          return <Bands item={item}/>
        }}
        keyExtractor={item => item.band_name} 
        style={{width: '100%'}}
      />
    </SafeAreaView>
  );
}

function Bands({item}) {
  return (
    <View style={styles.bandView} >
      <View style={styles.bandFlex}>
        <Text style={styles.text}>{item.band_name}</Text>
        <Text style={styles.text}>{item.origin}</Text>
      </View>
      <View style={styles.bandFlex}>
        <Text style={styles.text}>{`${item.fans},000`}</Text>
        <Text style={styles.text}>{item.formed}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  bandFlex: {
    display: 'flex', 
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20
  },
  bandView: {
    margin: 5,
    padding: 5,
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }, 
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  }

});
