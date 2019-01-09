import React, { Component } from 'react';
import { View, StyleSheet, Platform, Image, ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
import logo from '../Images/logo_clear.png';
import bottom from '../Images/hel.png';

export default class Splash extends Component {
    render() {
        return (
            <ImageBackground source={bottom} style={{ width: '110%', height: '100%', opacity: 0.9 }}>
                <View style={style.body}>
                    <Image style={style.logo} source={logo} />
                    <View style={style.blank} />
                    <Button large rounded danger onPress={this.props.toggleSplash} style={style.button}>
                        <Text style={style.buttonText}>START</Text>
                    </Button>
                </View>
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '90%'
    },
    logo: {
        height: '40%',
        width: '100%',
        marginTop: '10%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 300
    },
    button: {
        width: '90%',
        height: '10%',
        marginLeft: '5%',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    buttonText: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    blank: {
        height: '8%'
    }
});
