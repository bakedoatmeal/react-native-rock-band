import { StyleSheet, Text, View } from 'react-native';
import BandsScreen from './components/BandsScreen';
import StatsScreen from './components/StatsScreen';
import StylesScreen from './components/StylesScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
    
          if (route.name === 'Bands') {
            iconName = 'musical-note-outline'
          } else if (route.name === 'Stats') {
            iconName = 'stats-chart-outline'
          } else if (route.name === 'Styles') {
            iconName = 'list-circle-outline'
          }
    
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato', // Active/focussed color
        tabBarInactiveTintColor: 'gray' // Inactive color
      })}
      >
        <Tab.Screen name="Bands" component={BandsScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
        <Tab.Screen name="Styles" component={StylesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
