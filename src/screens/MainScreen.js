import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { TabNavigator } from "react-navigation";

import LogoutButton from "../components/LogoutButton"

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Welcome</Text>
    <LogoutButton />
  </View>
);

const SettingsScreen = () => (
  <View style={styles.container}>
    <Text>Settings</Text>
  </View>
);

const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default MainScreenNavigator;