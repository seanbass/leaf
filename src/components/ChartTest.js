import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        //source={{uri: 'https://bl.ocks.org/mbostock/raw/3883245/'}}
        source={{uri: 'https://us-central1-leaf-autarky.cloudfunctions.net/fillGauge'}}
        style={{height: 300, width: 300}}
      />
    );
  }
}