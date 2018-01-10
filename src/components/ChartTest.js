import React, { Component } from "react";
import { 
  ScrollView,
  StyleSheet,
  Platform,
  Text,
  Dimensions,
  View, 
} from 'react-native';

import { VictoryBar, VictoryArea, VictoryChart, } from "victory-native";
import Svg from "react-native-svg";

class Chart extends Component {
  render() {
    return (
      <View>
        <VictoryBar />
      </View>
    );
  }
}

export default Chart;