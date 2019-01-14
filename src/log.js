import React, { PureComponent } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Container, Header, Content, Button, Text, Icon, Row } from 'native-base';

export default class Log extends PureComponent {
    render() {
        return (
            <View style={style.logPage}>
                <View />
                <View style={style.contents} />
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
        justifyContent: 'space-between',
    },
    contents: {},
    nav: {},
    close: {
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'red'
    },
    icon: {}
});
