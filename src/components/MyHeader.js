import React, { Component } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { Header } from "react-native-elements";



class HeaderNav extends React.Component {
    render(){
        return(
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: 'black' }}
                    centerComponent={{ text: 'Leaf', style: { color: 'black' } }}
                    //rightComponent={{ icon: 'home', color: '#fff' }}
                    outerContainerStyles={{ backgroundColor: '#fff' }}
                    //innerContainerStyles={{ justifyContent: 'space-around',}}
                />
            </View>
        )
    }
}

export default HeaderNav;

