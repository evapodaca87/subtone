import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('./Images/logo.png')} />
                <Text style={styles.welcome}>Practice Version</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%'
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
