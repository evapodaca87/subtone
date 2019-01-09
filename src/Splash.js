import React, { Component } from 'react';
import { View, StyleSheet, Platform, Image } from 'react-native';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
import logo from '../Images/logo.png';

export default class Splash extends Component {
    render() {
        return (
            <View style={style.body}>
                <Image style={style.logo} source={logo} />
                <Button large rounded bordered danger onPress={this.props.toggleSplash} style={style.button}>
                    <Text style={style.buttonText}>START</Text>
                </Button>
            </View>
        );
    }
}

const style = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        width: '100%'
    },
    logo: {
        height: '30%',
        width: '100%'
    },
    button: {
        width: '90%',
        height: '10%',
        marginLeft: '5%',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 30,
        textAlign: 'center'
    }
});
