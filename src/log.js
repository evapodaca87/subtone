import React, { PureComponent } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Text, Icon, Row } from 'native-base';
import Form from './form';
import Modal from 'react-native-modal';
import Tuner from './tuner';
import Note from './note';
import bottom from '../Images/spinspin.gif';
import Navbar from '../Components/Navbar';

var randomColor = require('randomcolor'); // import the script
var totallyRandomColor = randomColor(); // a hex code for an attractive color


export default class Log extends PureComponent {
    
    render() {
        return (
            <ImageBackground source={bottom} style={style.logPage}>
                <View style={style.logPage}>
                    <View />
                    <Form style={style.inputs} inputLog={this.props.inputLog} />
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
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    logPage: {
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: randomColor()
    },
    nav: {
        height: '5%'
    },
    close: {
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'red'
    },
    inputs: {
        height: '10%'
    },
    logHead: {
        color: 'white',
        fontSize: 50
    }
});
