import React, { PureComponent } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Container, Header, Content, Button, Text, Icon, Row } from 'native-base';
// import Form from './form';

export default class Log extends PureComponent {
    render() {
        return (
            <View style={style.navbar}>
                <View style={style.nav}>
                    <Button iconCenter style={style.homeButton} onPress={this.props.toggleHome}>
                        <Icon name='home' />
                    </Button>
                    <Button iconCenter style={style.mainButton} onPress={this.props.toMain}>
                        <Icon name='microphone' />
                    </Button>
                    <Button iconCenter style={style.logButton} onPress={this.props.toggleLog}>
                        <Icon name='cloud-download' />
                    </Button>
                    <Button iconCenter style={style.viewlogButton} onPress={this.props.toggleLogPage}>
                        <Icon name='list' />
                    </Button>
                    <Button iconCenter style={style.keyButton} onPress={this.props.showKey}>
                        <Icon name='key' />
                    </Button>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    navbar: {
        width: '100%'
    },
    nav: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    homeButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '20%',
        backgroundColor: '#1ABC9C'
    },
    mainButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '20%',
        backgroundColor: 'red'
    },
    logButton: {
        justifyContent: 'center',
        width: '20%',
        backgroundColor: '#D35400'
    },
    viewlogButton: {
        justifyContent: 'center',
        width: '20%',
        backgroundColor: '#9ACD32'
    },
    keyButton: {
        justifyContent: 'center',
        width: '20%',
        backgroundColor: '#7D3C98'
    }
});
