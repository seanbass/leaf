import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import {RkConfig, RkText} from 'react-native-ui-kitten';

export default class Profile extends Component {

  render() {
    //let user = this.props.user;
    return (
      <Image source={require('../img/lights2.jpeg')}
             style={styles.profileBackground}>
        <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
               style={styles.avatar}/>
        <Text style={styles.nameText}>
          Sean
        </Text>
      </Image>

    )
  }
}


const styles = StyleSheet.create({
  profileBackground: {
    width: null,
    height: 220,
    justifyContent: 'flex-end',
    alignItems: 'stretch'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center'
  },
  nameText: {
    backgroundColor: "#3e9b54",
    paddingLeft: 20,
    paddingVertical: 5,
    fontSize: 32,
    color: 'white'
  }
});