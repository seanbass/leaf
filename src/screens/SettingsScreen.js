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
import HeaderNav from '../components/MyHeader';



export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: null,
  };


  render() {
    return (
        <ScrollView>
            <HeaderNav />
            <SettingsList />
        </ScrollView>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 30,
  },
});
