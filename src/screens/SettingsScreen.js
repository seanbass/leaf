import React, { Component } from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
  ListView,
} from 'react-native';


import { Button, List, ListItem, Card } from 'react-native-elements';
import LogoutButton from "../components/LogoutButton";
import SettingsList from "../components/Settings";



export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: null,
  };


  render() {
    return (
        <ScrollView style={styles.container}>
            <SettingsList />
        </ScrollView>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    paddingVertical: 30,
  },
  header: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
    color: 'red',
  },
  description: {
    fontSize: 16.
  }
});
