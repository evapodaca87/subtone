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
                <View>
                    <View style={style.view}>
                        {this.props.samples.map((x) => {
                            return (
                                <View style={style.allsss}>
                                    <View>
                                        <Text>{x.title}</Text>
                                        <Text>{x.artist}</Text>
                                        <Text>{x.key}</Text>
                                        <Text>{x.init}</Text>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>
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
    },
    row1: {
        alignSelf: 'stretch'
    },
    something: {
        alignSelf: 'stretch',
        flexDirection: 'column'
    },
    view: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    alsss: {
        alignSelf: 'stretch',
        flexDirection: 'row'
    }
});
