import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import Tuner from './tuner';
import Note from './note';
import bottom from '../Images/spinspin.gif';

export default class Main extends Component {
    state = {
        note: {
            name: 'A',
            octave: 4,
            frequency: 440
        }
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

    render() {
        return (
            <ImageBackground source={bottom} style={style.spin}>
                <View style={style.content}>
                    <StatusBar backgroundColor='#000' translucent />
                    <Note style={style.numser} {...this.state.note} />
                    <Text style={style.frequency}>{this.state.note.frequency.toFixed(1)} Hz</Text>
                </View>
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    content: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginTop: '98%'
    },
    frequency: {
        fontSize: 28,
        color: 'white',
        marginTop: '-3%'
    },
    spin: {
        height: '108%',
        width: '100%'
    }
});
