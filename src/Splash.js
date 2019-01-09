import React, { Component } from 'react';
import { View, StyleSheet, Platform, Image, ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
import logo from '../Images/SubtoneLogoClear.png';
import splash from '../Images/bul.png';

export default class Splash extends Component {
    render() {
        return (
            // <ImageBackground source={bottom} style={{ width: '110%', height: '100%', opacity: 0.9 }}>
            <View style={style.body}>
                <Image style={style.logo} source={logo} />
                {/* <View style={style.blank} /> */}
                <Image style={style.blah} source={splash} />
                <Button large rounded danger onPress={this.props.toggleSplash} style={style.button}>
                    <Text style={style.buttonText}>START</Text>
                </Button>
            </View>
            // </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        width: '110%',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '90%'
    },
    logo: {
        height: '40%',
        width: '110%',
        marginTop: '10%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    button: {
        width: '100%',
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
    },
    blah : {
        width: '110%',
        height: '20%'
    }
});
