import React, { PureComponent } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Container, Header, Content, Button, Text, Icon, Row } from 'native-base';

export default class Saved extends PureComponent {
    render() {
        return (
            <View style={style.savedPage}>
                <View />
                <Text style={style.textedS} onPress={this.props.toggleSaved}>
                    SAVE PAGE
                </Text>
                <View style={style.nav}>
                    <Button iconCenter danger style={style.closeButton} onPress={this.props.toggleSplash}>
                        <Icon name='close' />
                    </Button>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    savedPage: {
        backgroundColor: 'black',
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
