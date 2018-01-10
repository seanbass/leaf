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
    icon: 'lock-outline',
  },
  {
    title: 'Calibrate',
    icon: 'local-drink'
  },
  {
    title: 'Updates',
    icon: 'sync'
},
];

class SettingsList extends React.Component {
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

export default SettingsList;