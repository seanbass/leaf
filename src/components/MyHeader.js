import React, { Component } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { Header } from "react-native-elements";



class HeaderNav extends React.Component {
    render(){
        return(
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Leaf', style: { color: '#fff' } }}
                    //rightComponent={{ icon: 'home', color: '#fff' }}
                    outerContainerStyles={{ backgroundColor: '#3e9b54' }}
                    //innerContainerStyles={{ justifyContent: 'space-around',}}
                />
            </View>
        )
    }
}

export default HeaderNav;

