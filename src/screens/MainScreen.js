import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { TabNavigator } from "react-navigation";


import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import ScheduleScreen from "./ScheduleScreen";

// Is this Nav being used?

const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Schedule: { screen: ScheduleScreen, },
  Settings: { screen: SettingsScreen, },
});


export default MainScreenNavigator;