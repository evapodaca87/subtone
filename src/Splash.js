import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image, Button } from 'react-native';
import logo from '../Images/logo.png';

export default class Splash extends Component {
    render() {
        return (
            <View style={style.body}>
                <Image style={style.logo} source={logo} />
                <Button onPress={this.props.toggleSplash} style={style.welcome}  title='START'>
                   
                </Button>
            </View>
        );
    }
}

const style = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%'
    },
    frequency: {
        fontSize: 28,
        color: 'blue'
    },
    welcome: {
        fontSize: 12,
        textAlign: 'center',
        margin: 10,
        color: 'blue'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    logo: {
        height: '30%',
        width: '100%'
    }
});
