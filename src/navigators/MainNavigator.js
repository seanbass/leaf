import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ScheduleScreen from "../screens/ScheduleScreen";


const SampleScreen = () => (
  <View style={styles.container}>
    <Text>Sample</Text>
  </View>
);

const ProfileScreen = () => (
    <View style={styles.container}>
      <Text>Sample</Text>
    </View>
  );

const HomeTabs = TabNavigator({
  Home: { screen: HomeScreen },
  Schedule: { screen: ScheduleScreen },
  Settings: { screen: SettingsScreen }
},
{
  tabBarOptions : {
    inactiveTintColor: '#ffffff',
    activeTintColor: '#000000',
    style: {
      backgroundColor: '#2f90f3',
    }
  }
})

const DrawerStack = DrawerNavigator({
  Home: { screen: HomeTabs },
  Sample: { screen: SampleScreen },
  Profile: { screen: ProfileScreen },
})


const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#2f90f3'},
    title: 'Welcome!',
    headerTintColor: 'white',
    headerLeft: <Text onPress={() => 
      navigation.navigate('DrawerToggle')}>Menu</Text>
  })
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default DrawerNavigation;

