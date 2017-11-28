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
import LogoutButton from "../components/LogoutButton"



export default class ScheduleScreen extends React.Component {
  static navigationOptions = {
    title: null,
  };


  render() {
    return (
        <ScrollView style={styles.container}>
          <LogoutButton />
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