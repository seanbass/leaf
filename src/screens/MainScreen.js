import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { TabNavigator } from "react-navigation";


import HomeScreen from "./HomeScreen"
import SettingsScreen from "./SettingsScreen"
import ScheduleScreen from "./ScheduleScreen"



const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Schedule: { screen: ScheduleScreen },
  Settings: { screen: SettingsScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

export default MainScreenNavigator;