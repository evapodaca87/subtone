import React, { PureComponent } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
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
            <ImageBackground source={bottom} style={style.savedPage} backgroundColor={randomColor()}>
                <View style={style.savedPage}>
                    <Text style={style.eh1}>Samples</Text>
                    <View style={style.viewed}>
                        {this.props.samples.map((x) => {
                            return (
                                <View style={style.track}>
                                    <Text style={style.title}>{x.title}</Text>
                                    <Text style={style.artist}>{x.artist}</Text>
                                    <Text style={style.key}>{x.key}</Text>
                                    <Text style={style.init}>{x.init}</Text>
                                </View>
                            );
                        })}
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
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    savedPage: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-between'
    },
    eh1: {
        fontSize: 80,
        alignSelf: 'center',
        marginTop: '15%',
        color: 'white'
    },
    viewed: {
        width: '90%',
        height: '50%',
        alignSelf: 'center',
        flexDirection: 'column'
    },
    init: {
        width: '10%',
        color: 'white',
        height: 'auto',
        fontSize: 20
    },
    title: {
        width: '37.5%',
        color: 'white',
        height: 'auto',
        fontSize: 25
    },
    artist: {
        width: '37.5%',
        color: 'white',
        height: 'auto',
        fontSize: 22
    },
    key: {
        width: '10%',
        color: 'white',
        height: 'auto',
        fontSize: 30
    },
    track: {
        height: '15%',
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
});
