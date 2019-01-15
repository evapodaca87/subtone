import React, { PureComponent } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Container, Header, Content, Button, Text, Icon, Row } from 'native-base';
import Form from './form';
import Modal from 'react-native-modal';
import Tuner from './tuner';
import Note from './note';
import bottom from '../Images/spinspin.gif';
import Navbar from '../Components/Navbar';

export default class Log extends PureComponent {
    render() {
        return (
            <View style={style.logPage}>
                <View />
                <Form style={style.inputs} inputLog={this.props.inputLog} />
                <View style={style.nav}>
                    {/* <Button iconCenter style={style.close} onPress={this.props.toggleSplash}>
                        <Icon style={style.icon} name='close' />
                    </Button> */}
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
    logPage: {
        backgroundColor: 'black',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    contents: {},
    nav: {
        height: '5%'
    },
    close: {
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'red'
    },
    icon: {},
    inputs: {
        height: '10%'
    },
    logHead: {
        color: 'white',
        fontSize: 50
    }
});
