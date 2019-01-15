import React, { PureComponent } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Container, Header, Content, Button, Text, Icon, Row } from 'native-base';
import Modal from 'react-native-modal';
import Tuner from './tuner';
import Note from './note';
import bottom from '../Images/spinspin.gif';
import Navbar from '../Components/Navbar';

var randomColor = require('randomcolor'); // import the script
var totallyRandomColor = randomColor(); // a hex code for an attractive color

export default class Saved extends PureComponent {
    render() {
        return (
            <View style={style.savedPage}>
                <View />
                <Text style={style.textedS} onPress={this.props.toggleSaved}>
                    SAVE PAGE
                </Text>
                <View style={style.nav}>
                    <Navbar
                        toggleHome={this.props.toggleHome}
                        toggleLog={this.props.toggleLog}
                        showKey={this.showKey}
                        toggleLogPage={this.props.toggleLogPage}
                        toMain={this.props.toMain}
                    />
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    savedPage: {
        backgroundColor: randomColor(),
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textedS: {
        color: 'white'
    },
    closeButton: {
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'red'
    },
    nav: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
