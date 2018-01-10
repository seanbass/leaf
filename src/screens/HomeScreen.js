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

import { Button, List, ListItem, Card, } from 'react-native-elements';
import Chart from '../components/ChartTest';
import { Measurement, MeasurementContainer } from '../components/Measurements';
import HeaderNav from '../components/MyHeader';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };


  render() {
    return (
        <ScrollView>
          <HeaderNav />
          <MeasurementContainer />
        </ScrollView>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 30,
  },
});
