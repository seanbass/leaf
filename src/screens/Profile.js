import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button
} from 'react-native';

//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editProfile, lockProfile } from '../redux/reducers/user.actions'; 

import EN from 'react-native-vector-icons/Entypo';

class Profile extends Component {

  render() {
    //let user = this.props.user;
    const { profile, editProfile, lockProfile } = this.props
    var editButton
    if(profile == "locked") {
      editButton = <EN style={styles.icon} name="pencil" onPress={editProfile}/>
    } else {
      editButton = <EN style={styles.icon} name="squared-cross" onPress={lockProfile}/>
    }
    return (
      <View>
      <Image source={require('../img/lights2.jpeg')}
             style={styles.profileBackground}>
        <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
               style={styles.avatar}/>
        <Text style={styles.nameText}>
          Sean
        </Text>
      </Image>
      {editButton}
      </View>

    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.user.profile
  }
}

const mapDispatchToProps = ( dispatch ) => bindActionCreators({
  editProfile: () => editProfile(),
  lockProfile: () => lockProfile()
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

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
  },
  icon: {
    fontSize: 24
  }
});