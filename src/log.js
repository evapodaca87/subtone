import React, { PureComponent } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Text, Icon, Row } from 'native-base';
import Form from '../Components/form';
import Modal from 'react-native-modal';
import Tuner from './tuner';
import Note from './note';
import bottom from '../Images/spinspin.gif';
import Navbar from '../Components/Navbar';

export default class Log extends PureComponent {
    render() {
        return (
            <ImageBackground source={bottom} style={style.logPage} backgroundColor='#990033'>
                <View style={style.logPage}>
                    <Text style={style.eh1}>Log</Text>
                    <Form inputLog={this.props.inputLog} />
                    <Navbar
                        toggleHome={this.props.toggleHome}
                        toggleLog={this.props.toggleLog}
                        showKey={this.showKey}
                        toggleLogPage={this.props.toggleLogPage}
                        toMain={this.props.toMain}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    logPage: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-between'
    },
    eh1: {
        fontSize: 80,
        alignSelf: 'center',
        marginTop: '15%',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 10, height: 10},
        textShadowRadius: 5
    }
});
