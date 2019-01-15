import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Text, Icon, Row } from 'native-base';
import Modal from 'react-native-modal';
import Tuner from './tuner';
import Note from './note';
import bottom from '../Images/spinspin.gif';
import Navbar from '../Components/Navbar';
import ColorKeyPage from '../Components/ColorKeyPage';

export default class Main extends Component {
    state = {
        note: {
            name: 'A',
            octave: 4,
            frequency: 440
        },
        showKey: false
    };

    showKey = () => {
        this.setState({
            showKey: !this.state.showKey
        });
    };

    _update(note) {
        this.setState({ note });
    }

    componentDidMount() {
        const tuner = new Tuner();
        tuner.start();
        tuner.onNoteDetected = (note) => {
            if (this._lastNoteName === note.name) {
                this._update(note);
            } else {
                this._lastNoteName = note.name;
            }
        };
    }

    spin = function(options) {
        let colorGen = () => {
            if (this.state.note.name === 'C') {
                return '#ff0000';
            } else if (this.state.note.name === 'G') {
                return '#ff4500';
            } else if (this.state.note.name === 'D') {
                return '#FFA500';
            } else if (this.state.note.name === 'A') {
                return '#FFAE42';
            } else if (this.state.note.name === 'E') {
                return '#EFDF00';
            } else if (this.state.note.name === 'B') {
                return '#9ACD32';
            } else if (this.state.note.name === 'F♯') {
                return '#00FF00';
            } else if (this.state.note.name === 'C♯') {
                return '#0D98BA';
            } else if (this.state.note.name === 'F') {
                return '#CD00CD';
            } else if (this.state.note.name === 'D♯') {
                return '#0000FF';
            } else if (this.state.note.name === 'G♯') {
                return '#8A2BE2';
            } else if (this.state.note.name === 'A♯') {
                return '#4B0082';
            } else {
                return 'black';
            }
        };

        let color = colorGen(); // a hex code for an attractive color
        return {
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            backgroundColor: color
        };
    };

    render() {
        return (
            <ImageBackground source={bottom} style={this.spin()}>
                <View style={style.all}>
                    <View />
                    <View style={style.contents}>
                        <Note {...this.state.note} />
                        <Text style={style.frequency}>{this.state.note.frequency.toFixed(1)} Hz</Text>
                    </View>
                    <Navbar
                        toggleHome={this.props.toggleHome}
                        toggleLog={this.props.toggleLog}
                        showKey={this.showKey}
                        toggleLogPage={this.props.toggleLogPage}
                        toMain={this.props.toMain}
                    />
                    <Modal isVisible={this.state.showKey}>
                        <ColorKeyPage showKey={this.showKey} />
                    </Modal>
                </View>
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    all: {
        height: '100%',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    contents: {
        alignItems: 'center'
    },
    frequency: {
        fontSize: 35,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: { width: 3, height: 5 },
        textShadowRadius: 4
    }
});
