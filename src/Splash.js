import React, { Component } from 'react';
import { View, StyleSheet, Platform, Image, ImageBackground, Linking, LinkingIOS } from 'react-native';
import { Root, Container, Header, Content, Button, Text, Icon } from 'native-base';
import logo from '../Images/SubtoneLogoClear.png';
import splash from '../Images/bul.png';

export default class Splash extends Component {
    render() {
        return (
            <Root>
                <View style={style.body}>
                    <Image style={style.logo} source={logo} />
                    <Image style={style.blah} source={splash} />
                    <Button large rounded danger onPress={this.props.toggleSplash} style={style.button}>
                        <Text style={style.buttonText}>START</Text>
                    </Button>
                    <Text style={style.legal} onPress={() => Linking.openURL('http://subtone-legal.surge.sh/')}>
                        2019 Subtone Legal Agreement
                    </Text>
                </View>
            </Root>
        );
    }
}

const style = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        width: '100%',
        backgroundColor: 'black'
    },
    logo: {
        height: '40%',
        width: '100%',
        marginTop: '10%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    button: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    buttonText: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    blah: {
        width: '100%',
        height: '20%'
    },
    legal: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        marginBottom: '5%'
    }
});
