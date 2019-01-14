import React, { PureComponent } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Container, Header, Content, Button, Text, Icon, Row } from 'native-base';
import Form from './form';

export default class Log extends PureComponent {
    render() {
        return (
            <View style={style.logPage}>
                <View>
                    <Text style={style.logHead}>This will be the log view page</Text>
                </View>
                <Form style={style.inputs} />
                <View style={style.nav}>
                    <Button iconCenter style={style.close} onPress={this.props.toggleHome}>
                        <Icon style={style.icon} name='close' />
                    </Button>
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
        fontSize: 50,
    }
});
