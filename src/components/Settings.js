import React, { Component } from "react";
import { 
  ScrollView,
  StyleSheet,
  Platform,
  Text,
  Dimensions,
  View, 
} from 'react-native';

import { List, ListItem } from 'react-native-elements'

const list = [
  {
    title: 'Logout',
    icon: 'av-timer',
  },
  {
    title: 'Calibrate',
    icon: 'flight-takeoff'
  },
  {
    title: 'Updates',
    icon: 'flight-takeoff'
  },
];

export default class SettingsList extends React.Component {
    render(){
        return(
            <View>
                <List>
                    {list.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            leftIcon={{name: item.icon}}
                        />
                        ))
                    }
                    </List>
            </View>
        )
    }
}

