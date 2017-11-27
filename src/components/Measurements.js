import React, { Component } from 'react';
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
import Chart from '../components/ChartTest';



export class Measurement extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.subTitle}>
          {this.props.value}
        </Text>
      </View>
    )
  }
}

export class MeasurementContainer extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      temp: "",
      hum: "",
      ph: "",
    };
  }


/*
  fetch() {
    var handle = setInterval( () => { 
        console.log('fetch started');
        this.getTempHumid()
    },
        5000
    );
}

  componentDidMount() {
    this.fetch()
  }


componentWillUnmount(){
    clearInterval(handle)
}
*/

  getTempHumid = () => {
    return fetch('http://192.168.0.107:8888')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(previousState => {
          return { 
            temp : responseJson.temperature,
            hum : responseJson.humidity
          }
        })
        return console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(){
    return (
      <View style={styles.container}>
         <Card title="Temperature">
            <Measurement value={this.state.temp}/>
              
          </Card>
            <Card title="Humidty">
             <Measurement value={this.state.hum}/>
              <Image source={require("../../assets/images/temperaturePic.png")}/>
          </Card>
          <Card title="Ph">
            <Measurement value={this.state.ph}/>
              
          </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7fffd4',
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
