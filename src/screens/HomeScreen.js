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


//import { WebBrowser } from 'expo';
//import { MonoText } from '../components/StyledText';
import { Button, List, ListItem, Card } from 'react-native-elements';

import Chart from '../components/ChartTest';

//import MeasurementContainer from '../components/Measurements'
//import Measurement from '../componenets/Measurements'
import { Measurement, MeasurementContainer } from '../components/Measurements'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };


  render() {
    return (
        <ScrollView style={styles.container}>
          <MeasurementContainer />
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
