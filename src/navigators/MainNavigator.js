import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import Profile from "../screens/Profile";

import Icon from 'react-native-vector-icons/Ionicons';
import {RkConfig, RkButton, RkText} from 'react-native-ui-kitten';


const ProfileScreen = () => (
    <View style={styles.container}>
     <Profile />
    </View>
  );

const HomeIcon = (<Icon name="rocket" size={30} color="red" />)

const HomeTabs = TabNavigator({
  Home: { screen: HomeScreen },
  Schedule: { screen: ScheduleScreen },
  Settings: { screen: SettingsScreen }
},


{
  tabBarOptions : {
    inactiveTintColor: '#ffffff',
    activeTintColor: 'lightgrey',
    style: {
      backgroundColor: '#3e9b54',
    }
  }
})


const DrawerStack = DrawerNavigator({
  Home: { screen: HomeTabs },
  Profile: { screen: ProfileScreen },
})


const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'white'},
    title: 'Leaf',
    headerTintColor: '#3e9b54',
    headerLeft: <Icon name="ios-list" marginLeft={20} size={40} onPress={() => 
      navigation.navigate('DrawerToggle')}/>
  })
})


// Sean Working On Settings Nav
/**
const SettingsStack = StackNavigator({
  Logout: { screen: Logout},
  Calibrate: { screen: Calibrate },
  Update: { screen: Update },
})

**/

export default DrawerNavigation;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'white',
  },
});


