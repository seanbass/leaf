import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import Icon from 'react-native-vector-icons/Ionicons';


const SampleScreen = () => (
  <View style={styles.container}>
    <Text>Sample</Text>
  </View>
);

const ProfileScreen = () => (
    <View style={styles.container}>
      <Text>Put Profile Here</Text>
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
    activeTintColor: 'lightgrey',
    style: {
      backgroundColor: '#3e9b54',
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
    headerStyle: {backgroundColor: 'white'},
    title: 'Leaf',
    headerTintColor: '#3e9b54',
    headerLeft: <Text onPress={() => 
      navigation.navigate('DrawerToggle')}><Text>
        <Icon name="ios-list" marginLeft={20} size={40}/>
          </Text>
        </Text>
  })
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default DrawerNavigation;

