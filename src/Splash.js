import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import logo from '../Images/logo.png';

export default class Splash extends PureComponent {
    render() {
        return (
            <View style={style.body}>
                <Image style={style.logo} source={logo} />
                <Text onPress={this.props.toggleSplash} style={style.welcome}>
                    Start
                </Text>
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
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'pink'
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
